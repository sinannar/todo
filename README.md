# Todo FE & BE

This project is created to experiment with dotnet wepapi and angular containerisation

## FE


link : https://malcoded.com/posts/angular-docker

$ docker build -t todo-fe .
$ docker run -d -p 4200:80 todo-fe

open browser to check http://localhost:4200

### Related Files
- Dockerfile
- .dockerignore
- nginx.conf


## BE

$ docker build -t todo-be .
$ docker run -d -p 5000:80 todo-be

open browser to check http://localhost:5000/api/values

### Related Files
-Dockerfile
-.dockerignore

## Related Docker Commands
- docker ps
- docker ps -a
- docker rm ##

## Pushing docker images to azure container registry
https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli

### For BE image that created as todo-be into todosinannar.azurecr.io registry
- docker tag todo-be todosinannar.azurecr.io/todo/be
- docker push todosinannar.azurecr.io/todo/be
- go to https://todo-be-sinannar.azurewebsites.net/swagger/index.html

### For FE image that created as todo-fe into todosinannar.azurecr.io registry
- change the remote server address to https://todo-be-sinannar.azurewebsites.net
- docker tag todo-fe todosinannar.azurecr.io/todo/fe
- docker push todosinannar.azurecr.io/todo/fe
- go to https://todo-fe-sinannar.azurewebsites.net/