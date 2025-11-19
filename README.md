# Women Empowerment Portal

> **🚀 Deployment Ready!** This project is configured for deployment on Netlify (Frontend) and Render (Backend). See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

![Women Empowerment](https://img.shields.io/badge/Project-Women%20Empowerment-brightgreen) ![React](https://img.shields.io/badge/Frontend-React%2019.2.0-blue) ![Node.js](https://img.shields.io/badge/Backend-Node.js-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-green) ![License](https://img.shields.io/badge/License-MIT-yellow)

A comprehensive MERN stack platform designed to empower women through education, mentorship, and community building. This platform provides resources, organizes events, facilitates mentorship connections, and tracks progress toward career advancement.

> **⚠️ Important Note:** This project was built with teammates for the final project and was brought up to week 8 assignment standards to match week requirements. Therefore, other teammates might submit the same project.

## 🌟 Features

### Core Functionality
- **🔐 Authentication System** - Secure user registration, login, and session management
- **📚 Resource Library** - Extensive collection of educational materials and career guides
- **📅 Event Management** - Workshop registration and event tracking system
- **👥 Mentorship Network** - Connect mentors and mentees based on skills and goals
- **📊 Analytics Dashboard** - Track user progress and platform engagement
- **🛡️ Admin Panel** - Comprehensive admin controls for platform management
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode Support** - Built-in dark/light theme switching

### User Roles
- **Users** - Access resources, events, and mentorship
- **Mentors** - Provide guidance and mentorship services
- **Admins** - Full platform management capabilities

## 🛠️ Technology Stack

### Frontend
- **React 19.2.0** - Modern React with hooks and concurrent features
- **Vite 7.2.2** - Fast build tool and dev server
- **React Router 6.20.0** - Client-side routing
- **React Query 5.8.4** - Data fetching and state management
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **Zustand** - Lightweight state management
- **Date-fns** - Date manipulation utilities

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.19.3** - MongoDB object modeling
- **JSON Web Tokens (JWT)** - Authentication tokens
- **Express Rate Limiter** - API rate limiting
- **CORS** - Cross-Origin Resource Sharing
- **Helmet.js** - Security middleware
- **Express Mongo Sanitize** - MongoDB injection prevention

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Vitest** - Unit testing framework

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/women-empowerment-portal.git
   cd women-empowerment-portal
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   ```

4. **Environment Setup**

   **Backend (.env)**
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/women-empowerment
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key
   
   # Server
   PORT=5000
   FRONTEND_URL=http://localhost:5174
   
   # File Upload (Cloudinary)
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

   **Frontend (.env)**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Start the development servers**

   **Backend (Terminal 1)**
   ```bash
   npm run dev
   ```

   **Frontend (Terminal 2)**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5174
   - Backend API: http://localhost:5000/api
   - API Health Check: http://localhost:5000/api/health

## 📁 Project Structure

```
women-empowerment/
├── README.md
├── package.json
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── analyticsController.js
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   ├── mentorshipController.js
│   │   ├── resourceController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── models/
│   │   ├── Event.js
│   │   ├── Mentorship.js
│   │   ├── Report.js
│   │   ├── Resource.js
│   │   └── User.js
│   ├── routes/
│   │   ├── analytics.js
│   │   ├── auth.js
│   │   ├── events.js
│   │   ├── mentorships.js
│   │   ├── reports.js
│   │   ├── resources.js
│   │   └── users.js
│   ├── utils/
│   │   ├── seedData.js
│   │   └── validation.js
│   └── .env
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── eslint.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── components/
│       │   ├── common/
│       │   │   ├── Button.jsx
│       │   │   ├── Card.jsx
│       │   │   ├── Input.jsx
│       │   │   ├── ProtectedRoute.jsx
│       │   │   └── Spinner.jsx
│       │   └── layout/
│       │       ├── Footer.jsx
│       │       └── Navbar.jsx
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── ThemeContext.jsx
│       ├── pages/
│       │   ├── AdminPanel.jsx
│       │   ├── Dashboard.jsx
│       │   ├── Events.jsx
│       │   ├── GetStarted.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Mentorship.jsx
│       │   ├── NotFound.jsx
│       │   ├── Profile.jsx
│       │   ├── Register.jsx
│       │   └── Resources.jsx
│       ├── services/
│       │   └── api.js
│       ├── utils/
│       │   ├── constants.js
│       │   └── helpers.js
│       └── .env
└── .gitignore
```

## 🔧 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Resource Endpoints
- `GET /api/resources` - Get all resources
- `GET /api/resources/:id` - Get resource by ID
- `POST /api/resources` - Create new resource (admin/mentor)
- `PUT /api/resources/:id` - Update resource
- `DELETE /api/resources/:id` - Delete resource

### Event Endpoints
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get event by ID
- `POST /api/events` - Create new event (admin/mentor)
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Mentorship Endpoints
- `GET /api/mentorships` - Get mentorship connections
- `POST /api/mentorships` - Request mentorship
- `PUT /api/mentorships/:id/status` - Update mentorship status
- `DELETE /api/mentorships/:id` - End mentorship

### Analytics Endpoints
- `GET /api/analytics/dashboard` - Get dashboard analytics
- `GET /api/analytics/users` - User statistics
- `GET /api/analytics/resources` - Resource analytics
- `GET /api/analytics/events` - Event analytics

## 💻 Frontend Architecture

### Components Structure
- **Common Components** - Reusable UI components (Button, Card, Input, etc.)
- **Layout Components** - Navigation, Footer, and page structure
- **Page Components** - Route-specific page components

### State Management
- **AuthContext** - User authentication and authorization
- **ThemeContext** - Dark/light mode switching
- **React Query** - Server state management

### Routing
- **Public Routes** - Home, Login, Register, Resources, Events, Mentorship
- **Protected Routes** - Dashboard, Profile (require authentication)
- **Admin Routes** - Admin Panel (require admin role)

## 🎨 Design System

### Color Palette
- **Primary Pink**: #ec4899 (Main brand color)
- **Secondary Teal**: #14b8a6 (Supporting color)
- **Gray Scale**: Light to dark grays for text and backgrounds
- **Success Green**: #10b981
- **Error Red**: #ef4444
- **Warning Yellow**: #f59e0b

### Typography
- **Font Family**: Inter (with fallbacks)
- **Headings**: Bold weights with gradient effects
- **Body Text**: Regular weight with proper line heights

### Layout
- **Container**: Max-width constraints for readability
- **Grid**: Responsive grid system using Tailwind
- **Spacing**: Consistent spacing scale throughout

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test              # Run tests
npm run test:ui       # Run tests with UI
```

### Linting
```bash
npm run lint          # Check code quality
npm run lint:fix      # Auto-fix linting issues
```

## 🚀 Deployment

### Backend Deployment
1. Set production environment variables
2. Build the application
3. Deploy to your preferred hosting service (Heroku, Railway, DigitalOcean)

### Frontend Deployment
```bash
cd frontend
npm run build         # Build for production
npm run preview       # Preview production build
```

### Environment Variables (Production)
Ensure all environment variables are properly set in your production environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors & Collaborators

### Core Development Team
- **Marion Kipruto** - *Lead Frontend Developer*
  📧 [marionrutto21@gmail.com](mailto:mariorutto21@gmail.com)

- **Evans Cheruiyot** - *Lead Backend Developer*
  📧 [cheruiyotevans6042@gmail.com](mailto:cheruiyotevans6042@gmail.com)

## 🙏 Acknowledgments

- React and the React community for the amazing framework
- Tailwind CSS for the utility-first CSS approach
- MongoDB for the flexible database solution
- All contributors and supporters of women's empowerment initiatives

## 📞 Support

If you have any questions or need help, please:
1. Check the documentation above
2. Search existing issues
3. Create a new issue with detailed information
4. Contact the development team

---

**Built with ❤️ for women empowerment and equality**