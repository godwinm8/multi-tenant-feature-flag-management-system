# Multi-Tenant Feature Flag Management System - Backend

## Overview

This project is the backend service for a Multi-Tenant Feature Flag Management System built as part of the Byepo Technologies Software Developer technical assessment.

The system supports multiple organizations, allowing each organization to manage its own feature flags independently while maintaining tenant isolation.

## Features

### Super Admin

- Login using static credentials
- Create organizations
- View all organizations

### Organization Admin

- Signup and login
- Create feature flags
- Enable or disable feature flags
- Delete feature flags
- Manage feature flags only for their organization

### End User

- Check whether a feature is enabled or disabled for a specific organization

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## Project Structure

```text
src/
├── config/
│   └── mongoDb.js
├── controllers/
│   ├── authController.js
│   ├── featureFlagController.js
│   ├── organizationController.js
│   └── superAdminController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── FeatureFlag.js
│   ├── Organization.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── featureFlagRoutes.js
│   ├── organizationRoutes.js
│   └── superAdminRoutes.js
├── utils/
│   └── generateToken.js
├── app.js
└── server.js
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd backend
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

SUPER_ADMIN_EMAIL=admin@byepo.com
SUPER_ADMIN_PASSWORD=admin123
```

### Run the application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server will run on:

```text
http://localhost:5000
```

## API Endpoints

### Super Admin

| Method | Endpoint                 | Description           |
| ------ | ------------------------ | --------------------- |
| POST   | `/api/super-admin/login` | Super Admin login     |
| POST   | `/api/organizations`     | Create organization   |
| GET    | `/api/organizations`     | Get all organizations |

### Authentication

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | `/api/auth/signup` | Organization Admin signup |
| POST   | `/api/auth/login`  | Organization Admin login  |

### Feature Flags

| Method | Endpoint                   | Description                    |
| ------ | -------------------------- | ------------------------------ |
| POST   | `/api/feature-flags`       | Create feature flag            |
| GET    | `/api/feature-flags`       | Get organization feature flags |
| PUT    | `/api/feature-flags/:id`   | Update feature flag status     |
| DELETE | `/api/feature-flags/:id`   | Delete feature flag            |
| POST   | `/api/feature-flags/check` | Check feature status           |

## Authentication

The backend uses JWT-based authentication.

- Super Admin uses static credentials configured through environment variables.
- Organization Admins receive JWT tokens after successful login.
- Protected routes require a valid Bearer token.

Example:

```text
Authorization: Bearer <jwt_token>
```

## Multi-Tenant Design

Each organization has isolated feature flags.

Feature flags are linked to organizations using `organizationId`.

This ensures:

- Organization A cannot access Organization B's feature flags.
- Organization Admins can only manage features belonging to their organization.

## Database Collections

- Organizations
- Users
- FeatureFlags

## Future Improvements

- Role-based middleware
- Centralized error handling
- Request validation middleware
- Refresh token support
- Audit logs for feature changes
- Percentage rollouts for feature flags
- Feature scheduling and expiration
