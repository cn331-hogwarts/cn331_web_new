FROM python:3.12
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ADD client.cert /usr/local/share/ca-certificates/client.cert
RUN chmod 644 /usr/local/share/ca-certificates/client.cert && update-ca-certificates
EXPOSE 80
