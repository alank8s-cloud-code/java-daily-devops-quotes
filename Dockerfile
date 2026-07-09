# Base Image
FROM maven:3.9.9-eclipse-temurin-21

# Set Working Directory
WORKDIR /app

# Copy Maven Configuration
COPY pom.xml .

# Download Project Dependencies
RUN mvn dependency:go-offline

# Copy Application Source Code
COPY src ./src

# Build the Java Application
RUN mvn clean package -DskipTests

# Expose Application Port
EXPOSE 8000

# Run the Java Application
CMD ["java", "-jar", "target/app.jar"]
