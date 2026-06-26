# Admin Frontend

## Overview

The Admin Frontend is part of the Multi-Tenant Feature Flag Management System.

This application is used by Organization Administrators to manage feature flags for their organization. Each administrator belongs to a specific organization and can only manage feature flags associated with that organization.

The frontend communicates with the backend API for authentication and feature flag operations.

---

## Features

### Authentication

- Organization Admin signup
- Organization Admin login
- JWT-based authentication
- Logout functionality

### Feature Flag Management

- Create feature flags
- Enable feature flags
- Disable feature flags
- Delete feature flags
- View all feature flags belonging to the organization

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
│   ├── Signup.jsx
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── services/
│   └── api.js
│
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
cd admin-frontend
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5174
```

---

## Backend Requirement

Ensure the backend server is running before starting the frontend.

Example backend API URL:

```text
http://localhost:5000/api
```

---

## API Configuration

The application uses Axios for API communication.

Example:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
```

---

## Application Flow

### Signup

1. Organization Admin enters:
   - Name
   - Email
   - Password
   - Organization ID

2. Backend creates an Organization Admin account.
3. User is redirected to the login page.

### Login

1. Admin enters email and password.
2. Backend validates credentials.
3. JWT token is returned and stored in Local Storage.
4. User is redirected to the dashboard.

### Dashboard

1. Admin creates feature flags.
2. Feature flags are stored in MongoDB.
3. Admin can enable or disable features.
4. Admin can delete existing features.
5. Only features belonging to the admin's organization are displayed.

---

## Available Routes

| Route        | Description            |
| ------------ | ---------------------- |
| `/`          | Signup Page            |
| `/login`     | Login Page             |
| `/dashboard` | Feature Flag Dashboard |

---

## Authentication

JWT tokens are stored in browser Local Storage.

Example:

```javascript
localStorage.setItem("adminToken", token);
```

Protected API requests automatically include the token in the Authorization header.

Example:

```text
Authorization: Bearer <token>
```

---

## Environment Variables

| Variable            | Description     |
| ------------------- | --------------- |
| `VITE_API_BASE_URL` | Backend API URL |

Example:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Future Improvements

- Route protection using Protected Routes
- Global authentication state using Context API
- Loading indicators
- Better error handling
- Feature search and filtering
- Pagination for feature lists
- User profile management
