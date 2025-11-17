# Women Empowerment Portal

A comprehensive MERN stack application designed to empower women worldwide through education, mentorship, and community building.

## 🌟 Project Overview

This capstone project addresses the global need for accessible education and mentorship opportunities for women. The Women Empowerment Portal provides a platform where women can:

- Access curated educational resources
- Join events and workshops
- Connect with mentors and peers
- Track their progress and growth
- Contribute their own expertise and knowledge

## 🚀 Live Demo

**Frontend**: [https://women-empowerment-portal.vercel.app](https://women-empowerment-portal.vercel.app)
**Backend API**: [https://women-empowerment-api.onrender.com/api](https://women-empowerment-api.onrender.com/api)

*Note: Replace with actual deployment URLs when ready*

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Architecture Decisions](#architecture-decisions)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### User Management
- **Authentication**: Secure JWT-based authentication
- **Role-based Access**: Support for user, mentor, moderator, and admin roles
- **Profile Management**: Comprehensive user profiles with skills, interests, and regional preferences
- **Multi-language Support**: English, French, Swahili, Arabic

### Educational Resources
- **Resource Library**: Curated educational content across multiple categories
- **Search & Filter**: Advanced filtering by category, region, and keywords
- **Author Attribution**: Resources attributed to verified mentors and experts
- **View Tracking**: Analytics on resource engagement

### Events & Workshops
- **Event Management**: Create, manage, and participate in events
- **Hybrid Events**: Support for both physical and virtual events
- **Registration System**: Automated capacity management and waitlists
- **Calendar Integration**: Seamless calendar integration

### Mentorship Network
- **Mentor Matching**: Connect mentors and mentees based on skills and interests
- **Topic-based Sessions**: Structured mentorship around specific topics
- **Progress Tracking**: Monitor mentorship journey and outcomes
- **Communication Tools**: Built-in messaging and session scheduling

### Analytics & Reporting
- **Admin Dashboard**: Comprehensive analytics for platform administrators
- **User Engagement**: Track user activity and engagement metrics
- **Resource Performance**: Monitor resource popularity and effectiveness
- **Geographic Distribution**: Understand user distribution across regions

## 🛠️ Technology Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Data fetching and state management
- **Zustand**: Lightweight state management
- **React Hook Form**: Form handling and validation
- **Lucide React**: Beautiful icon library

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **Helmet**: Security middleware
- **CORS**: Cross-Origin Resource Sharing
- **Express Rate Limit**: API rate limiting
- **Express Mongo Sanitize**: NoSQL injection protection

### Development Tools
- **ESLint**: Code linting and formatting
- **Vitest**: Frontend testing framework
- **Jest**: Backend testing framework
- **Supertest**: API testing

## 📁 Project Structure

```
mern-final-project-Ab494/
├── backend/                 # Backend application
│   ├── config/             # Database and cloud configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions and seed data
│   └── server.js           # Express server entry point
├── frontend/               # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   └── main.jsx        # React app entry point
│   ├── public/             # Static assets
│   └── package.json
├── package.json            # Root package configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-final-project-Ab494
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Backend (.env)
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/women-empowerment
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:5173
   
   # Frontend (.env)
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   sudo systemctl start mongod
   
   # Or use MongoDB Compass/Atlas
   ```

5. **Seed the database** (optional, for demo data)
   ```bash
   cd backend
   node utils/seedData.js
   ```

6. **Start the development servers**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm start
   
   # Terminal 2: Frontend
   cd frontend
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api
   - Health Check: http://localhost:5000/api/health

### Demo Credentials

After seeding the database, you can use these test accounts:

- **Admin**: admin@portal.com / password123
- **Mentor**: sarah@portal.com / password123
- **Mentor**: amina@portal.com / password123
- **User**: maria@portal.com / password123

## 🔧 Environment Setup

### Development

The project uses separate `.env` files for backend and frontend:

**Backend (.env)**
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/women-empowerment
JWT_SECRET=your-super-secret-jwt-key-change-in-production
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env)**
```env
# Development
VITE_API_URL=http://localhost:5000/api

# Production (update when deploying)
# VITE_API_URL=https://your-backend-api.com/api
```

### Production

For production deployment, ensure you:
- Use strong, unique JWT secrets
- Configure proper MongoDB Atlas connection
- Set secure environment variables
- Enable HTTPS

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

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

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Resource Endpoints

#### Get Resources
```http
GET /api/resources
GET /api/resources?category=Leadership&page=1&limit=10
```

#### Create Resource (Mentors/Admin only)
```http
POST /api/resources
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Resource Title",
  "summary": "Brief summary",
  "content": "Full content",
  "category": "Leadership",
  "tags": ["business", "career"],
  "region": "Global"
}
```

### Event Endpoints

#### Get Events
```http
GET /api/events
GET /api/events?category=Conference&status=upcoming
```

#### Register for Event
```http
POST /api/events/:id/register
Authorization: Bearer <token>
```

### User Endpoints

#### Get Users (Admin only)
```http
GET /api/users
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "skills": ["New Skill"],
  "bio": "Updated bio",
  "interests": ["New Interest"]
}
```

### Mentorship Endpoints

#### Get Mentorships
```http
GET /api/mentorships
Authorization: Bearer <token>
```

#### Create Mentorship Request
```http
POST /api/mentorships
Authorization: Bearer <token>
Content-Type: application/json

{
  "mentorId": "mentor_id",
  "topics": ["Leadership", "Career Development"],
  "message": "I would love to learn from you..."
}
```

## 🧪 Testing

### Backend Testing

```bash
cd backend

# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Frontend Testing

```bash
cd frontend

# Run component tests
npm test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm test -- --watch
```

### Test Coverage

- **Unit Tests**: Individual function and component testing
- **Integration Tests**: API endpoint testing with Supertest
- **Component Tests**: React component testing with Vitest
- **End-to-End Tests**: User flow testing

## 🚀 Deployment

### Backend Deployment (Render/Heroku)

1. **Prepare for deployment**
   ```bash
   # Update environment variables for production
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/women-empowerment
   JWT_SECRET=secure-production-secret
   ```

2. **Deploy to Render**
   - Connect your GitHub repository
   - Set build command: `cd backend && npm install`
   - Set start command: `npm start`

### Frontend Deployment (Vercel/Netlify)

1. **Build for production**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Set environment variables: `VITE_API_URL=https://your-backend-url.com/api`

## 🏗️ Architecture Decisions

### Database Design

The application uses MongoDB with a document-based approach:

- **User Model**: Comprehensive user profiles with nested arrays for skills, interests, and languages
- **Resource Model**: Hierarchical content with author relationships and tagging
- **Event Model**: Flexible location handling for both physical and virtual events
- **Mentorship Model**: Many-to-many relationships between mentors and mentees

### Security Implementation

- **JWT Authentication**: Stateless authentication with secure token handling
- **Password Hashing**: bcryptjs with salt rounds for secure password storage
- **Rate Limiting**: Express rate limit to prevent API abuse
- **Input Validation**: Express validation and sanitization
- **CORS Configuration**: Proper CORS setup for cross-origin requests
- **Helmet Security**: Security headers for XSS and clickjacking protection

### State Management

- **Frontend**: Zustand for lightweight state management, React Query for server state
- **Authentication**: JWT stored in localStorage with automatic token refresh
- **Real-time Updates**: Polling mechanism for event registrations and notifications

### Performance Optimizations

- **Database Indexing**: Indexes on frequently queried fields (email, region, category)
- **API Pagination**: Efficient pagination for resource and event lists
- **Image Optimization**: Lazy loading and optimized image formats
- **Code Splitting**: Dynamic imports for route-based code splitting

## 🎯 Future Enhancements

### Immediate Improvements
- [ ] **Real-time Notifications**: WebSocket implementation for instant notifications
- [ ] **Video Conferencing**: Integration with video calling for mentorship sessions
- [ ] **Mobile App**: React Native mobile application
- [ ] **Advanced Analytics**: Machine learning for personalized recommendations

### Long-term Goals
- [ ] **Multi-language Support**: Full internationalization (i18n)
- [ ] **Payment Integration**: Subscription management for premium features
- [ ] **AI Chatbot**: AI-powered assistant for common queries
- [ ] **Offline Support**: Progressive Web App (PWA) capabilities
- [ ] **Social Features**: User-generated content and community features

## 🤝 Contributing

We welcome contributions to improve the Women Empowerment Portal:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Capstone Project Team** - *Initial work* - [Women Empowerment Portal](https://github.com/your-repo)

## 🙏 Acknowledgments

- Inspired by the global movement for women's empowerment
- Thanks to all mentors and contributors who share their knowledge
- Built with modern web technologies and best practices

## 📞 Support

For support and questions:

- **Email**: support@womenempowermentportal.com
- **Documentation**: [Project Wiki](https://github.com/your-repo/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)

---

**Built with ❤️ for women's empowerment and education**