from rest_framework import viewsets
from rest_framework.response import Response
from . import models
from . import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .management.commands import export_to_csv

import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn import preprocessing
import numpy as np



class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.selectUserSerializer

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    


@api_view(["POST"])
def predict(request):
    try:
        mydata = request.data  # ex:admin@gmail.com
        print(mydata["email"])
        export_to_csv.export_users_to_csv("/app/data.csv")
        df = pd.read_csv("/app/data.csv", index_col="email")
        # should run python manage.py exportUsers /Users/kunkerdthaisong/cn331/cn331_web_new/backend/data.csv
        # change path
        df['blood_group'] = df['blood_group'].astype("category")
        df['mbti'] = df['mbti'].astype("category")
        df['zodiac']=df['zodiac'].astype("category")
        df['hobbies']=df['hobbies'].astype('category')

        le = preprocessing.LabelEncoder()

        df_new = df.apply(le.fit_transform)
        df_new = df_new.drop(columns=["first_name", "last_name", "Is_Staff", "Is_Active", "date_joined"])
        want_pred=df_new.loc[mydata["email"]]
        df_new=df_new.drop(index=mydata["email"])
        knn_c = KNeighborsClassifier(n_neighbors=3)
        knn_c.fit(df_new, df_new.index)

        res = knn_c.predict(np.asarray([want_pred]))
        email = res[0]
        print(email)
        return Response('Your mate is {}'.format(email))
    except ValueError as e:
        return Response(e.args[0])