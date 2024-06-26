# Pokemon Explorer

This project contains a frontend and a backend component for a Pokemon explorer application, Dockerized for easy deployment.

# Features
Key features include pagination, lazy loading, responsive design, GraphQL integration, Tailwind CSS, name-based searching, and more.

## Prerequisites

Before running the application, make sure you have Docker installed on your machine.

- [Docker Installation Guide](https://docs.docker.com/get-docker/)

## Getting Started

Follow these steps to run the application locally using Docker Compose.

### 1. Clone the Repository

```bash
git clone https://github.com/prajwl-dh/pokemon-explorer.git
```

```bash
cd pokemon-explorer
```

### 2. Build and Start the Services

Run the following command to build and start the Docker containers for the frontend and backend:

```bash
docker-compose up --build
```

The --build flag ensures that Docker Compose builds fresh images before starting the containers.

### 3. Access the Application

Once both containers are up and running, the frontend will automatically communicate with the backend, so you can access the frontend application at the following URL:

- Frontend (pokemon-ui): http://localhost:4000
  
- Backend (pokemon-api): http://localhost:3000/graphql

### 4. Stopping the Application

To stop the application and shut down the containers, press Ctrl + C in the terminal where docker-compose up is running.

Alternatively, run the following command in the project directory:

```bash
docker-compose down
```

This command stops and removes containers, networks, volumes, and images created by docker-compose up.
