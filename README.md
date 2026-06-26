# Multi-Tenant Feature Flag Management System

## Overview

This project is a simple SaaS-style multi-tenant feature flag management system built with a Node.js backend and three separate frontend applications.

The system allows a software host to create organizations, organization administrators to manage feature flags for their own organization, and end users to check whether a feature is enabled for their organization.

The goal of this project was to design a clean API structure, implement role-based access, and maintain tenant isolation while keeping the implementation simple and practical.

---

## Features

### Super Admin

- Login using static credentials
- Create organizations
- View all organizations

### Organization Admin

- Sign up under an organization
- Login using email and password
- Create feature flags
- Enable feature flags
- Disable feature flags
- Delete feature flags
- Manage only the feature flags belonging to their organization

### End User

- Enter an organization identifier
- Enter a feature key
- Check whether the feature is enabled or disabled for that organization

---

## System Architecture

```text
Super Admin Frontend
        │
        ▼
      Backend API
        ▲
        │
Admin Frontend
        │
        ▼
      MongoDB
        ▲
        │
User Frontend
```

---

## Repository Structure

```text
multi-tenant-feature-flag-management-system/
│
├── backend/
│
├── super-admin-frontend/
│
├── admin-frontend/
│
├── user-frontend/
│
└── README.md
```

---

## Technology Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Frontend

- React
- Vite
- Axios
- CSS3

### Database

- MongoDB

---

## Authentication

The project uses a custom authentication implementation based on JSON Web Tokens (JWT).

- Super Admin uses static credentials stored in configuration.
- Organization Admins authenticate using email and password.
- Protected routes use JWT middleware for authorization.

No third-party authentication providers were used.

---

## Multi-Tenant Design

Each organization has its own isolated set of feature flags.

Organization administrators can only manage feature flags that belong to their own organization.

Feature checks performed by end users are resolved within the context of the selected organization.

---

## API Modules

### Authentication

- Admin signup
- Admin login
- Token generation

### Organizations

- Create organization
- Get organizations list

### Feature Flags

- Create feature flag
- Get feature flags
- Update feature flag status
- Delete feature flag
- Check feature availability

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd multi-tenant-feature-flag-management-system
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

SUPER_ADMIN_EMAIL=admin@example.com
SUPER_ADMIN_PASSWORD=admin123
```

---

## Super Admin Frontend Setup

```bash
cd super-admin-frontend
npm install
npm run dev
```

Example `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Admin Frontend Setup

```bash
cd admin-frontend
npm install
npm run dev
```

Example `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## User Frontend Setup

```bash
cd user-frontend
npm install
npm run dev
```

Example `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Application Flow

1. Super Admin logs in.
2. Super Admin creates an organization.
3. Organization Admin signs up using the organization identifier.
4. Organization Admin logs in and manages feature flags.
5. End User checks whether a feature is enabled for a specific organization.

---

## Example Feature Flag

```text
light_mode
beta_dashboard
advanced_reports
new_checkout_flow
```

---

## Possible Improvements

Given more time, the following enhancements could be added:

- Role-based middleware for finer access control
- Request validation middleware
- Centralized error handling
- Protected frontend routes
- Pagination for organization listing
- Search and filtering
- Audit logs for feature changes
- Deployment configuration
