FROM ubuntu:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update

RUN apt install build-essential checkinstall -y
RUN apt install libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev liblzma-dev libc6-dev libbz2-dev libffi-dev zlib1g-dev -y
RUN apt-get install wget -y
RUN wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz 
RUN tar xzf Python-3.9.6.tgz 
RUN ./Python-3.9.6/configure --enable-optimizations
RUN make ./Python-3.9.6/
RUN make install ./Python-3.9.6/ 
RUN apt-get install python3-pip -y
RUN pip3 install numpy
RUN pip3 install simpletransformers
RUN pip3 install torch

RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get -y install nodejs
RUN node --version
RUN npm --version

WORKDIR /app
COPY ./ /app

RUN npm install

CMD npm start

EXPOSE 3000


