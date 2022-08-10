docker build -t student-ui -f dockerfile .
docker run -d --rm -p 4200:80 --name student-ui  student-ui 
docker commit  $(docker ps | grep -w student-ui  | head -n 1 | awk '{print $1;}')  aphiwe2020/student-ui:$1
docker push aphiwe2020/student-ui:$1
kubectl apply -f deployments.yaml