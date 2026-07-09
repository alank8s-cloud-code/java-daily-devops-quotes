# 🚀 Java Daily DevOps Quotes

A simple Java application that displays random motivational and DevOps quotes through a modern web interface. This project is built using **Java**, **Maven**, **HTML**, **CSS**, and **JavaScript**, and can be run either locally or inside a Docker container.

---

# 📌 Features

- 🎯 Random motivational and DevOps quotes
- 💻 Modern SaaS-inspired UI
- 📋 Copy quote to clipboard
- 🔄 Generate a new quote with one click
- ☕ Built using Java HttpServer
- 📦 Maven project
- 🐳 Docker support

---

# 🛠️ Technologies Used

- Java 21
- Maven
- HTML5
- CSS3
- JavaScript
- Docker

---

# 📂 Project Structure

```text
java-daily-devops-quotes/
│
├── Dockerfile
├── .dockerignore
├── README.md
├── pom.xml
│
└── src
    └── main
        ├── java
        │   └── Main.java
        │
        └── resources
            ├── quotes.txt
            └── static
                ├── index.html
                ├── style.css
                └── script.js
```

---

# 📋 Requirements

Before running the project, install:

- Java 21
- Maven
- Git
- Docker (Optional)

---

# ⚙️ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/java-daily-devops-quotes.git

cd java-daily-devops-quotes
```

---

# ▶️ Run Without Docker

## Step 1: Build the Project

```bash
mvn clean package
```

---

## Step 2: Run the Application

```bash
java -jar target/app.jar
```

---

## Step 3: Open the Browser

```
http://localhost:8000
```

---

# 🐳 Run With Docker

## Step 1: Build the Docker Image

```bash
docker build -t java-daily-devops-quotes .
```

---

## Step 2: Run the Docker Container

```bash
docker run -d \
--name java-daily-devops-quotes \
-p 8000:8000 \
java-daily-devops-quotes
```

---

## Step 3: Open the Browser

```
http://localhost:8000
```

---

# 📦 Why Does Maven Generate app.jar?

By default, Maven creates a JAR file using this format:

```
artifactId-version.jar
```

Example:

```
motivaflow-1.0.0.jar
```

To make the Dockerfile simpler, this project uses:

```xml
<build>
    <finalName>app</finalName>
</build>
```

Now Maven always generates:

```
target/app.jar
```

This means the Dockerfile never needs to change, even if the project version changes.

---

# 🐳 Dockerfile

The application starts using:

```dockerfile
CMD ["java", "-jar", "target/app.jar"]
```

---

# 📦 Build Output

After running:

```bash
mvn clean package
```

The `target` directory looks like:

```text
target/
├── app.jar
├── classes
├── generated-sources
├── maven-archiver
└── maven-status
```

---

# 📸 Application Preview

> Add screenshots of your application here.

```
images/homepage.png
```

---

# 🎯 Future Improvements

* User login
* Database support
* GitHub Actions CI/CD
* AWS deployment
* Kubernetes deployment
---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
