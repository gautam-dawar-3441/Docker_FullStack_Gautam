# Docker Full Stack Application

## Project Overview

This project containerizes a full-stack application consisting of:

- Node.js and Express frontend
- Flask backend
- Docker
- Docker Compose

The Express frontend provides a form for submitting an item name and description. The submitted data is sent to the Flask backend through the Docker Compose network.

## Project Structure

```text
Docker_Gautam/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .dockerignore
│
├── docker-compose.yml
├── .gitignore
└── README.md