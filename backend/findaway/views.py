from rest_framework import viewsets
from rest_framework.response import Response
from . import models
from . import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

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
        # to predict
        mydata = request.data  # admin@gmail.com #str
        print(mydata["email"])
        df = pd.read_csv("/Users/Prin/Documents/Coding/Cn331/cn331_web_new/backend/data.csv", index_col="email")
        # should run python manage.py exportUsers /Users/kunkerdthaisong/cn331/cn331_web_new/backend/data.csv
        # change path
        df['blood_group'] = df['blood_group'].astype("category")
        df['mbti'] = df['mbti'].astype("category")
        le = preprocessing.LabelEncoder()

        df_new = df.apply(le.fit_transform)
        df_new = df_new.drop(columns=["first_name", "last_name", "Is_Staff", "Is_Active", "date_joined"])

        knn_c = KNeighborsClassifier(n_neighbors=2)
        knn_c.fit(df_new, df_new.index)

        res = knn_c.predict(np.asarray([df_new.loc[mydata["email"]]]))
        email = res[0]
        print(email)
        return Response('Your mate is {}'.format(email))
    except ValueError as e:
        return Response(e.args[0])