WT Authentication Frontend
Overview
This project is a frontend implementation for user authentication using JSON Web Tokens (JWT). It is built with HTML, CSS, JavaScript, Bootstrap, and AJAX. The frontend interacts with a backend service that generates and verifies JWT tokens.

Features
User login form: Allows users to enter their credentials to log in.
JWT token storage in localStorage: Safely stores JWT tokens in the browser for session management.
Protected routes that require JWT authentication: Ensures certain pages are accessible only to authenticated users.
AJAX requests to the backend with JWT tokens: Facilitates secure communication between the frontend and backend for authentication and data retrieval.
Technology Stack
HTML: Provides the structure of the web pages.
CSS & Bootstrap: Used for styling and responsive design.
JavaScript: Handles user interactions and makes AJAX requests.
AJAX: Communicates with the backend API for authentication and data retrieval.
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/ApsaraWitharana/SE10-JWT-Token-FrontEnd.git
Open the project in your code editor.

Set up your backend server to issue JWT tokens upon successful login.

Link your frontend with the backend by setting the correct API endpoint in the JavaScript file.
