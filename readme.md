# Simple Backend Application

## Project Description
This project is designed to allow user registration and display registered users in a table format. It includes the following components:

- **Backend:** Handles API endpoints for user registration and retrieval.
- **React Frontend:** User interaction using React and Vite.
- **HTML Frontend:** A simple HTML-based interface for quick testing or demonstration.

## Folder Structure

```
backend-project
|-- backend
|   |-- (Backend server files)
|
|-- react_frontend
|   |-- (React + Vite frontend files)
|
|-- html_frontend
    |-- (Simple HTML frontend files)
```

---

## Getting Started

Follow the steps below to clone the project, install dependencies, and run the application.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) for dependency management
- [Git](https://git-scm.com/) for cloning the repository

---

## Steps to Run the Project

### 1. Clone the Repository

Execute this command in your terminal to clone the project:
```bash
git clone https://github.com/kunalbhatia2601/backend-project.git
```

Navigate to the project directory:
```bash
cd backend-project
```

### 2. Setup Backend

Navigate to the `backend` folder:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Run the backend server:
```bash
node index.js
```
The server will run on `http://localhost:3000` (default port).

---

### 3. Setup React Frontend

Navigate to the `react_frontend` folder:
```bash
cd ../react_frontend
```

Install dependencies:
```bash
npm install
```

Run the React frontend:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the port specified by Vite).
You can enhance the styling of the React pages using the `App.css` file located in the `src` folder.

---

### 4. Setup HTML Frontend

Navigate to the `html_frontend` folder:
```bash
cd ../html_frontend
```

Open the `index.html` file directly in your browser.
You can enhance the styling of the HTML pages using the `style.css` file located in the same folder.

---

## Features

1. **User Registration:**
   - Register users by providing their name, username, and password.
2. **Display Users:**
   - View all registered users in a table format on the frontend.

---

## API Endpoints

### Backend API

- **POST /send-data**: Register a new user
  ```json
  {
    "name": "string",
    "username": "string",
    "password": "string"
  }
  ```

- **GET /get-data**: Retrieve the list of all registered users

---