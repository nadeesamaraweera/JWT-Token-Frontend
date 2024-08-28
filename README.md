# JWT Authentication Frontend

## Overview

This project is a frontend implementation for user authentication using JSON Web Tokens (JWT). It is built with HTML, CSS, JavaScript, Bootstrap, and AJAX. The frontend interacts with a backend service that generates and verifies JWT tokens.

## Features

* User login form: Allows users to enter their credentials to log in.
* JWT token storage in `localStorage`: Safely stores JWT tokens in the browser for session management.
* Protected routes that require JWT authentication: Ensures certain pages are accessible only to authenticated users.
* AJAX requests to the backend with JWT tokens: Facilitates secure communication between the frontend and backend for authentication and data retrieval.

## Technology Stack

* HTML: Provides the structure of the web pages.
* CSS & Bootstrap: Used for styling and responsive design.
* JavaScript: Handles user interactions and makes AJAX requests.
* AJAX: Communicates with the backend API for authentication and data retrieval.


## Getting Started

1. Clone the repository:git clone https://github.com/nadeesamaraweera/JWT-Token-Frontend.git
2. Open the project in your code editor.
3. Set up your backend server to issue JWT tokens upon successful login.
4. Link your frontend with the backend by setting the correct API endpoint in the JavaScript file.


## Usage

* ###  Signup

1. Navigate to the signup form and fill in the required fields with your details.
2. On successful signup, the backend will create a new user account.
3. You will then be redirected to the login page to enter your credentials.
4. After logging in, the JWT token will be stored in `localStorage`, and you will be authenticated for access to protected routes.

* ### Login

1. Fill in the login form with your credentials.
2. Upon successful login, the JWT token will be stored in `localStorage`.
3. This token will be automatically included in the Authorization header for all subsequent requests to protected routes.

* ### Dashboard

1. Access the dashboard after a successful login or signup.
2. The dashboard provides an overview of your account and displays relevant information.
3. Protected routes on the dashboard require a valid JWT token; otherwise, access will be restricted.
4. AJAX requests are made to the backend to fetch real-time data and update the dashboard dynamically.