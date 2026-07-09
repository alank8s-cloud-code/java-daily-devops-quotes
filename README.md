# 🚀 MotivaFlow - Daily DevOps Motivation

MotivaFlow is a simple Java web application that shows random motivational quotes.

The application is specially created for beginners who are learning:

* Java
* Maven
* HTML
* CSS
* JavaScript
* Docker
* DevOps

Every time you click the **"Inspire Me"** button, a new motivational quote is displayed.

---

# 📷 Project Preview

> A modern SaaS-style motivation application with beautiful UI and random DevOps quotes.

---

# ✨ Features

* Random motivational quotes
* DevOps and beginner-friendly quotes
* Modern UI
* Responsive design
* Dark mode
* Copy quote
* Favorite quote
* Share quote
* Built using Java HttpServer
* No framework required

---

# 🛠 Technologies Used

### Backend

* Java 21
* Java HttpServer
* Maven

### Frontend

* HTML5
* CSS3
* JavaScript

### DevOps

* Docker
* Multi-stage Docker Build

---

# 📂 Project Structure

```text
MotivaFlow/
│
├── pom.xml
├── Dockerfile
├── Dockerfile.multistage
├── docker-compose.yml
├── README.md
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

Before running the project, install the following software.

| Software            | Version     |
| ------------------- | ----------- |
| Java JDK            | 21 or later |
| Maven               | 3.9+        |
| Git                 | Latest      |
| Docker *(Optional)* | Latest      |

---

# 🔍 Check Installed Versions

Check Java

```bash
java -version
```

Check Maven

```bash
mvn -version
```

Check Docker

```bash
docker --version
```

---

# 📥 Clone the Repository

```bash
git clone <repository-url>
```

Go to the project folder

```bash
cd MotivaFlow
```

---

# ▶️ Run Without Docker

## Step 1

Compile the project

```bash
mvn clean package
```

---

## Step 2

Run the application

```bash
java -jar target/motivaflow-1.0.0.jar
```

---

## Step 3

Open your browser

```
http://localhost:8000
```

You should see the MotivaFlow application.

---

# 🐳 Run With Docker

## Step 1

Build the Docker image

```bash
docker build -f Dockerfile.multistage -t motivaflow .
```

---

## Step 2

Run the container

```bash
docker run -d -p 8000:8000 --name motivaflow motivaflow
```

---

## Step 3

Open your browser

```
http://localhost:8000
```

---

# 🛑 Stop the Container

```bash
docker stop motivaflow
```

---

# ▶️ Start Again

```bash
docker start motivaflow
```

---

# 🗑 Remove Container

```bash
docker rm -f motivaflow
```

---

# 🗑 Remove Docker Image

```bash
docker rmi motivaflow
```

---

# 🌐 API Endpoint

Get a random quote

```
GET /api/quote
```

Example response

```json
{
  "quote": "Automation is an investment, not an expense."
}
```

---

# 📚 What I Learned

While building this project, I learned:

* Java HttpServer
* REST API basics
* JSON response
* Reading files from resources
* Maven project structure
* HTML
* CSS
* JavaScript
* Docker
* Multi-stage Docker build
* Static file serving
* Project structure

---

# 🎯 Future Improvements

* User login
* Database support
* Categories
* Search quotes
* Quote history
* Admin panel
* Kubernetes deployment
* GitHub Actions CI/CD
* AWS deployment

---

# 🤝 Contributing

Feel free to fork this repository and improve it.

If you find any issue, please create an Issue or Pull Request.

---

# ⭐ Support

If you found this project helpful:

⭐ Star this repository

🍴 Fork it

📢 Share it with others

---

# 👨‍💻 Author

**Suraj**

Aspiring DevOps Engineer

Always learning and building new projects.

