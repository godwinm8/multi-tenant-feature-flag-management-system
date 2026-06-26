# User Frontend

## Overview

The User Frontend is part of the Multi-Tenant Feature Flag Management System.

This application allows end users to verify whether a particular feature is enabled or disabled for their organization.

Users provide an Organization ID and a Feature Key, and the application communicates with the backend API to determine the feature status.

---

## Features

- Check whether a feature is enabled for an organization.
- Simple and user-friendly interface.
- Responsive design for mobile, tablet, and desktop devices.
- Real-time API integration with the backend.
- Ability to check multiple organizations and feature combinations.

---

## Tech Stack

- React
- Vite
- Axios
- CSS3

---

## Project Structure

```text
src/
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
cd user-frontend
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

The application will run at:

```text
http://localhost:5175
```

---

## Backend Requirement

Ensure the backend server is running before starting the frontend application.

Example backend URL:

```text
http://localhost:5000/api
```

---

## Environment Variables

| Variable            | Description          |
| ------------------- | -------------------- |
| `VITE_API_BASE_URL` | Backend API base URL |

Example:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Application Flow

1. User enters an Organization ID.
2. User enters a Feature Key.
3. The application sends a request to the backend API.
4. The backend checks whether the feature exists and whether it is enabled for the specified organization.
5. The result is displayed to the user:
   - **Enabled ✅**
   - **Disabled ❌**

---

## API Endpoint Used

```text
POST /api/feature-flags/check
```

Request body:

```json
{
  "organizationId": "organization_id",
  "featureKey": "light_mode"
}
```

Example response:

```json
{
  "enabled": true
}
```

---

## Available Pages

| Route | Description          |
| ----- | -------------------- |
| `/`   | Feature Checker Page |

---

## Future Improvements

- Organization dropdown instead of manual ID entry.
- Search history for previously checked features.
- Better validation messages.
- Loading skeletons and animations.
- Dark mode support.
- Copyable feature check results.
