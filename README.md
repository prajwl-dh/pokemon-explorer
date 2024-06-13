# My Pokemon App

This project contains a frontend and a backend component for a Pokemon explorer application, Dockerized for easy deployment.

## Prerequisites

Before running the application, make sure you have Docker installed on your machine.

- [Docker Installation Guide](https://docs.docker.com/get-docker/)

## Getting Started

Follow these steps to run the application locally using Docker Compose.

### 1. Clone the Repository

git clone REPOSITORY_URL
cd my-pokemon-app

### 2. Build and Start the Services

Run the following command to build and start the Docker containers for the frontend and backend:

docker-compose up --build

The --build flag ensures that Docker Compose builds fresh images before starting the containers.

### 3. Access the Application

Once the containers are up and running, you can access the application at the following URLs:

- Backend (pokemon-api): http://localhost:3000/graphql
- Frontend (pokemon-ui): http://localhost:4000

### 4. Stopping the Application

To stop the application and shut down the containers, press Ctrl + C in the terminal where docker-compose up is running.

Alternatively, run the following command in the project directory:

docker-compose down

This command stops and removes containers, networks, volumes, and images created by docker-compose up.
