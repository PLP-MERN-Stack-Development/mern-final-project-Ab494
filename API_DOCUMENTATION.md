# API Documentation - Women Empowerment Portal

## Base URL
- **Development**: `http://localhost:5000/api`
- **Production**: `https://women-empowerment-api.onrender.com/api`

## Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### Authentication Endpoints

#### POST /auth/register
Register a new user.

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "role": "user", // user, mentor, moderator, admin
  "region": "Africa",
  "skills": ["JavaScript", "Leadership"],
  "languages": ["English"]
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user",
    "region": "Africa"
  },
  "token": "jwt_token_here"
}
```

#### POST /auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user",
    "region": "Africa",
    "avatar": ""
  },
  "token": "jwt_token_here"
}
```

#### GET /auth/me
Get current user information (protected).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user",
    "skills": ["JavaScript", "Leadership"],
    "bio": "",
    "verified": false,
    "region": "Africa",
    "avatar": "",
    "interests": [],
    "languages": ["English"],
    "createdAt": "2025-11-17T19:26:23.933Z",
    "updatedAt": "2025-11-17T19:26:23.933Z"
  }
}
```

### Resource Endpoints

#### GET /resources
Get all resources with optional filtering.

**Query Parameters:**
- `category`: Filter by category (Leadership, Technology, Health, etc.)
- `region`: Filter by region (Global, Africa, Asia, Europe, Americas, Oceania)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "resources": [
    {
      "_id": "resource_id",
      "title": "Leadership Skills for Women in Business",
      "summary": "Essential leadership strategies and techniques...",
      "content": "Full content...",
      "category": "Leadership",
      "tags": ["business", "career", "management"],
      "author": {
        "_id": "author_id",
        "name": "Dr. Sarah Johnson",
        "avatar": ""
      },
      "region": "Global",
      "featured": false,
      "views": 245,
      "createdAt": "2025-11-17T19:27:47.123Z"
    }
  ],
  "totalPages": 1,
  "currentPage": 1
}
```

#### POST /resources (Protected - Mentors/Admin only)
Create a new resource.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Resource Title",
  "summary": "Brief summary of the resource",
  "content": "Full content of the resource",
  "category": "Leadership",
  "tags": ["business", "career"],
  "region": "Global"
}
```

### Event Endpoints

#### GET /events
Get all events with optional filtering.

**Query Parameters:**
- `category`: Filter by category (Conference, Workshop, Webinar)
- `status`: Filter by status (upcoming, past, ongoing)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "events": [
    {
      "_id": "event_id",
      "title": "Women in Leadership Summit 2025",
      "description": "Inspiring day of talks and workshops...",
      "date": "2025-12-02T08:00:00.000Z",
      "location": {
        "type": "hybrid",
        "city": "Nairobi",
        "country": "Kenya",
        "link": "https://zoom.us/example"
      },
      "host": {
        "_id": "host_id",
        "name": "Dr. Sarah Johnson",
        "avatar": ""
      },
      "category": "Conference",
      "capacity": 200,
      "attendees": ["user_id"],
      "tags": ["leadership", "networking"],
      "createdAt": "2025-11-17T19:27:47.456Z"
    }
  ],
  "totalPages": 1,
  "currentPage": 1
}
```

#### GET /events/:id
Get event details by ID.

**Response:**
```json
{
  "success": true,
  "event": {
    "_id": "event_id",
    "title": "Event Title",
    "description": "Event description",
    "date": "2025-12-02T08:00:00.000Z",
    "location": {
      "type": "online",
      "link": "https://meet.google.com/example"
    },
    "host": {
      "_id": "host_id",
      "name": "Host Name",
      "bio": "Host bio"
    },
    "attendees": [
      {
        "_id": "user_id",
        "name": "Attendee Name",
        "avatar": ""
      }
    ],
    "capacity": 50,
    "tags": ["technology", "education"]
  }
}
```

#### POST /events/:id/register (Protected)
Register for an event.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully registered",
  "event": {
    // Updated event object
  }
}
```

### User Endpoints

#### GET /users (Protected - Admin only)
Get all users.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `role`: Filter by role

**Response:**
```json
{
  "success": true,
  "users": [
    {
      "_id": "user_id",
      "name": "User Name",
      "email": "user@example.com",
      "role": "user",
      "region": "Africa",
      "verified": false,
      "createdAt": "2025-11-17T19:26:23.933Z"
    }
  ],
  "totalPages": 1,
  "currentPage": 1
}
```

#### PUT /users/profile (Protected)
Update user profile.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Updated Name",
  "skills": ["New Skill", "Updated Skill"],
  "bio": "Updated bio",
  "interests": ["New Interest"],
  "languages": ["English", "French"]
}
```

### Mentorship Endpoints

#### GET /mentorships (Protected)
Get user's mentorships.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "mentorships": [
    {
      "_id": "mentorship_id",
      "mentor": {
        "_id": "mentor_id",
        "name": "Mentor Name",
        "bio": "Mentor bio",
        "skills": ["Leadership"]
      },
      "mentee": {
        "_id": "user_id",
        "name": "User Name"
      },
      "topics": ["Leadership", "Career Development"],
      "status": "active",
      "message": "Mentorship message",
      "startDate": "2025-11-17T19:27:47.789Z",
      "createdAt": "2025-11-17T19:27:47.789Z"
    }
  ]
}
```

#### POST /mentorships (Protected)
Create a mentorship request.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "mentorId": "mentor_id",
  "topics": ["Leadership", "Career Development"],
  "message": "I would love to learn from your experience..."
}
```

### Analytics Endpoints (Admin only)

#### GET /analytics
Get platform analytics.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "analytics": {
    "totalUsers": 150,
    "totalResources": 25,
    "totalEvents": 12,
    "activeMentorships": 8,
    "usersByRegion": {
      "Africa": 45,
      "Asia": 38,
      "Europe": 32,
      "Americas": 25,
      "Oceania": 10
    },
    "resourcesByCategory": {
      "Leadership": 8,
      "Technology": 6,
      "Health": 5,
      "Rights": 4,
      "Education": 2
    }
  }
}
```

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error message"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- **General endpoints**: 100 requests per 15 minutes
- **Authentication endpoints**: 5 requests per 15 minutes
- **Resource creation**: 10 requests per hour

## Status Codes

- **200**: Success
- **201**: Created successfully
- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **500**: Internal Server Error