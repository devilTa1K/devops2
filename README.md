# Fake News Detection System

A complete full-stack web application that allows users to analyze news articles or text and classify them as REAL or FAKE using Machine Learning.

## Architecture

- **Frontend**: React.js (Vite)
- **Backend**: Node.js + Express.js
- **ML Service**: Python + FastAPI
- **Database**: MongoDB
- **DevOps**: Docker, Jenkins CI/CD

## Features
- Analyze text to classify as Real or Fake News.
- Displays confidence score.
- History tracking of past predictions.
- Fully containerized with Docker.

## Setup Instructions

### Prerequisites
- Docker & Docker Compose installed.

### Running Locally with Docker
1. Clone the repository.
2. Run `docker-compose up --build -d`
3. Access the application at `http://localhost:3000`

### Running Services Independently
- **Client**: `cd client && npm install && npm run dev`
- **Server**: `cd server && npm install && npm start`
- **ML Service**: `cd ml-service && pip install -r requirements.txt && uvicorn main:app --reload`
