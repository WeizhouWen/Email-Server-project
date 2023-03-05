FROM arm64v8/ubuntu:22.04

RUN apt update
RUN apt install -y default-jre

COPY ./mailServer_jar.tgz .
RUN tar -xvf ./mailServer_jar.tgz
CMD java -jar ./mailServer_jar/mailServer.jar
