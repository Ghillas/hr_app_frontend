# React Frontend – Client Application

This project is the frontend application of a full-stack project built with React.
It interacts with a Spring Boot REST API to provide a modern and responsive user interface.
This project exists in two versions, one basic without authentication, and one with authentication which interact with the secured version of the API (will be published soon).

---

## Project Structure & Versions

This repository contains actually one versions of the Application (secured version will be published soon):

###  `main` branch (stable)
- Public Application
- No authentication
- Interact with the basic version of the API

### `withAuthentication` branch (work in progress)
- Secured Application
- Interact with the secured version of the API
- Manage authentication using JWT
- User Authentication with login

---

## Tech Stack

- React
- JavaScript
- Axios for HTTP requests
- React Router for navigation
- JWT authentication
- CSS

---

## Authentication Flow

1. The user logs in via a login form
2. Credentials are sent to the backend API
3. The API returns a JWT token
4. The token is stored on the client side
5. All secured API requests automatically include the token via an Axios interceptor

---

## Back-end 

This frontend application is designed to work with a Spring Boot REST API.
The backend repository includes:

- REST endpoints
- PostgreSQL database
- JWT authentication (Secured version)
- Spring Security configuration (Secured version)

Back-end repository : https://github.com/Ghillas/hr_app_backend

---

## Running the Project

### Prerequisites

- Node.js
- npm
- Backend API running locally

### Intallation

npm install

### Run the application

npm start

To access the app => http://localhost:3000
