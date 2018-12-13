FROM microsoft/dotnet:sdk AS build-env
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "todo-be.dll"]


#$ docker build -t aspnetapp .


#$ docker run -d -p 8080:80 --name myapp aspnetapp
# http://localhost:8080/api/values

# docker run -d -p 80:80 todo-be
# http://localhost/api/values

# docker ps
# docker ps -a
# docker rm ##