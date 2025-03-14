# Something very important

-
## How to build and run the app - on server
- Install docker by following the steps on [Docker Installation Guide](https://docs.docker.com/engine/install/).

- Build docker image using
`docker build -t DOCKER_IMAGE_NAME .`
E.g.: `docker build -t 'is-this-good' .`

- Run the docker image using
`docker run -d -p MACHINE_PORT:CONTAINER_PORT DOCKER_IMAGE_NAME`
E.g.: `docker run -d -p 8000:3000 is-this-good --env-file .env`

- Open the browser and visit
`http://localhost:MACHINE_PORT/`
E.g.: `http://localhost:8000/`

