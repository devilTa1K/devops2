pipeline {
    agent any

    stages {
        stage('Run Docker Compose') {
            steps {
                bat 'docker compose down'
                bat 'docker compose up -d --build'
            }
        }
    }
}
