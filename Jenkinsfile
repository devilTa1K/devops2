pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Compose Build & Run') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d --build'
            }
        }
    }
}
