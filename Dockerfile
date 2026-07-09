#Base image for the project

FROM maven:3.9.9-eclipse-temurin-21 

#SET THE WORKING DIRECTORY INSIDE CONTAINER

WORKDIR /app

#COPY THE PROJECT DEPENDENCIES CONTAINER DIRECTORY

COPY  pom.xml .

#Download all required libraries now and store them in the local Maven cache

RUN mvn dependency:go-offline

#
COPY src ./src

##Compile the source code and package it into a JAR

RUN mvn clean package -DskipTests

COPY target/*.jar app.jar

EXPOSE 8000

CMD ["java", "-jar", "app.jar"]
