pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_CMD = 'docker-compose'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies & Test Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                    // sh 'npm test' // Uncomment when tests are added
                }
            }
        }

        stage('Install Dependencies & Test ML Service') {
            steps {
                dir('ml-service') {
                    sh 'pip install -r requirements.txt'
                    // sh 'pytest' // Uncomment when tests are added
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh "${DOCKER_COMPOSE_CMD} build"
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh "${DOCKER_COMPOSE_CMD} up -d"
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Deployment successful! Application is running on port 3000.'
        }
        failure {
            echo 'Deployment failed! Checking logs...'
            sh "${DOCKER_COMPOSE_CMD} logs"
        }
    }
}
