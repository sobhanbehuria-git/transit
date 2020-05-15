#!/bin/bash
set -x
PATH=$PATH:/usr/local/bin; export PATH
REGION=us-east-1
REPOSITORY_NAME=cms
CLUSTER=DEV
FAMILY=cms
SERVICE_NAME=cms

#STORE REPOSITORY URL IN VARIBALE
REPOSITORY_URI=`aws ecr describe-repositories --repository-names ${REPOSITORY_NAME} --region ${REGION} | jq .repositories[].repositoryUri | tr '"' ' '`

#REPLACE THE BUILD NUMBER AND REPOSITORY URI PLACEHOLDERS WITH THE CONSTANT ABOVE
cd /var/lib/jenkins/ci-cd/
sed -e 's/latest/dev-web-v_'${BUILD_NUMBER}'/g' /var/lib/jenkins/ci-cd/dev-web-taskdef.json > /var/lib/jenkins/ci-cd/dev-web-v-${BUILD_NUMBER}.json

#REGISTER TASK DEFINATION IN THE REPOSITORY
aws ecs  register-task-definition --family ${FAMILY} --container-definitions file:///var/lib/jenkins/ci-cd/dev-web-v-${BUILD_NUMBER}.json  --execution-role-arn ecsTaskExecutionRole  --network-mode bridge  --requires-compatibilities EC2 --region ${REGION}

SERVICES=`aws ecs describe-services --services ${SERVICE_NAME} --cluster ${CLUSTER} --region ${REGION} | jq .failures[]`

# GET LATEST REVISION
REVISION=`aws ecs describe-task-definition --task-definition ${FAMILY} --region ${REGION} | grep revision | tr "/" " " | awk '{print $2}' | sed 's/"$//'`

#UPDATE SERVICES

aws ecs update-service --cluster ${CLUSTER} --region ${REGION} --service ${SERVICE_NAME} --desired-count 1 --task-definition ${FAMILY}:${REVISION} --deployment-configuration maximumPercent=200,minimumHealthyPercent=100 --force-new-deployment --health-check-grace-period-seconds 30



