# Super Admin Frontend

## Overview

This application is the Super Admin portal for the Multi-Tenant Feature Flag Management System.

The Super Admin represents the software provider and is responsible for managing organizations within the platform.

This frontend communicates with the backend API to authenticate the Super Admin and perform organization management operations.

---

## Features

### Authentication

- Super Admin login using static credentials configured in the backend.

### Organization Management

- Create new organizations.
- View all existing organizations.
- Logout functionality.

---

## Tech Stack

- React
- Vite
- Axios
- React Router DOM
- CSS3

---

## Project Structure

```text
src/
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── services/
│   └── api.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd super-admin-frontend
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

## Backend Requirement

Ensure the backend server is running before starting the frontend application.

Example backend URL:

```text
http://localhost:5000
```

---

## API Configuration

The frontend communicates with the backend using Axios.

Example configuration:

```javascript
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
```

---

## Application Flow

### Login

1. Super Admin enters credentials.
2. Backend validates credentials.
3. JWT token is returned and stored in local storage.
4. User is redirected to the dashboard.

### Dashboard

1. Super Admin creates organizations.
2. Newly created organizations are stored in MongoDB.
3. Dashboard displays all organizations.

---

## Available Pages

| Route        | Description           |
| ------------ | --------------------- |
| `/`          | Super Admin Login     |
| `/dashboard` | Super Admin Dashboard |

---

## Authentication

JWT tokens are stored in browser local storage after successful login.

Example:

```text
localStorage.setItem("token", token);
```

Protected API requests automatically include the token in the request headers.

---

## Future Improvements

- Route protection using Protected Routes.
- Global authentication state using Context API.
- Pagination for organizations list.
- Search and filtering for organizations.
- Organization editing and deletion.
- Improved loading and error states.
