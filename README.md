# Todo FE & BE

This project is created to experiment with dotnet and angular containerisation

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