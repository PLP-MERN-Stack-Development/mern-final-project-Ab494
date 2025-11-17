# Women Empowerment Resource Portal - Frontend

A modern, responsive, and accessible React-based frontend for the Women Empowerment Resource Portal, fully aligned with UN Sustainable Development Goal 5 (Gender Equality). This comprehensive application provides an intuitive, beautiful, and empowering user experience for women worldwide.

## 🎯 Features

### Core Functionality
- **Authentication & Authorization**: Secure user authentication with role-based access control
- **Dark Mode Support**: Full dark mode implementation with system preference detection
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Real-time Updates**: React Query for efficient data fetching and caching

### Platform Features
- **Educational Resources**: Browse and download curated resources on various topics
- **Events & Workshops**: Discover and register for upcoming events and networking opportunities
- **Mentorship Network**: Connect with experienced mentors across different fields
- **Personal Dashboard**: Track progress, view activity, and manage goals
- **Admin Panel**: Comprehensive admin dashboard with analytics and user management

### UI/UX Features
- **Modern Design System**: Custom TailwindCSS configuration with SDG 5 color palette
- **Interactive Components**: Reusable UI components with consistent design
- **Form Validation**: Robust form handling with React Hook Form
- **Toast Notifications**: User-friendly feedback system
- **Loading States**: Skeleton loaders and spinners for better UX

## 🛠️ Technology Stack

### Core Technologies
- **Framework**: React 18.2+ with Vite 5+
- **Language**: JavaScript (ES6+)
- **Routing**: React Router DOM v6.20+
- **Build Tool**: Vite with Hot Module Replacement

### State Management
- **Global State**: React Context API (Auth, Theme, Notifications)
- **Server State**: TanStack React Query v5+ for data fetching and caching
- **Form State**: React Hook Form v7+ with validation
- **Local State**: React useState/useReducer hooks

### Styling & UI
- **CSS Framework**: TailwindCSS v3.3+ with custom configuration
- **Component Library**: Custom components following modern design principles
- **Icons**: Lucide React v0.263+
- **Notifications**: React Hot Toast

### Data & APIs
- **HTTP Client**: Axios v1.6+ with interceptors
- **Charts**: Recharts v2.10+ for data visualization
- **Date Handling**: date-fns v2.30+

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Backend API running on `http://localhost:5000/api`

### Installation

1. **Clone and navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Spinner.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   ├── resources/
│   │   ├── events/
│   │   ├── mentorship/
│   │   ├── profile/
│   │   ├── dashboard/
│   │   └── admin/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Resources.jsx
│   │   ├── Events.jsx
│   │   ├── Mentorship.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── AdminPanel.jsx
│   │   └── NotFound.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design System

### Color Palette (UN SDG 5 Theme)

```javascript
// Primary - Pink/Magenta (SDG 5)
primary: {
  50: '#fdf2f8', 500: '#ec4899', 900: '#831843'
}

// Secondary - Teal/Cyan
secondary: {
  50: '#f0fdfa', 500: '#14b8a6', 900: '#134e4a'
}

// Accent - Purple
accent: {
  50: '#faf5ff', 500: '#a855f7', 900: '#581c87'
}
```

### Typography
- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold, large sizes (text-4xl to text-6xl)
- **Body Text**: Regular weight, comfortable line-height (1.6)

### Components
- **Buttons**: Primary, Secondary, Outline, Ghost, Danger variants
- **Cards**: Hover effects, customizable padding and shadows
- **Inputs**: Form validation, icons, password toggle
- **Layout**: Responsive container with consistent spacing

## 🔐 Authentication System

### User Roles
- **User**: Standard platform access
- **Mentor**: Can offer mentorship and create content
- **Admin**: Full platform management access

### Protected Routes
```javascript
// Admin only
<ProtectedRoute roles={['admin']}>
  <AdminPanel />
</ProtectedRoute>

// Any authenticated user
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
```

### Demo Credentials
```
Admin: admin@womenempowerment.org / admin123
Mentor: mentor@womenempowerment.org / mentor123  
User: user@womenempowerment.org / user123
```

## 📱 Responsive Design

### Breakpoints
- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)
- **2xl**: 1536px (Extra large)

### Mobile-First Approach
- Default styles for mobile (< 640px)
- Progressive enhancement for larger screens
- Touch-friendly interfaces on mobile devices

## 🌙 Dark Mode

### Implementation
- System preference detection
- Manual toggle in navbar
- Persistent user preference
- Smooth transitions between themes

### CSS Classes
```css
.dark { /* Dark mode styles */ }
.light { /* Light mode styles */ }
```

## 🔍 Search & Filtering

### Resources Page Features
- **Search**: Debounced text search
- **Category Filter**: Dropdown selection
- **View Mode**: Grid/List toggle
- **Sorting**: Latest, Most Popular, A-Z

### Search Implementation
```javascript
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearch) {
    // Fetch filtered results
  }
}, [debouncedSearch]);
```

## 📊 State Management

### React Query Setup
```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    }
  }
});
```

### Query Patterns
```javascript
// Fetch data
const { data, isLoading, error } = useQuery({
  queryKey: ['resources', filters],
  queryFn: () => resourceService.getAll(filters)
});

// Mutate data
const mutation = useMutation({
  mutationFn: resourceService.create,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['resources'] });
  }
});
```

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# UI tests
npm run test:ui

# Coverage report
npm run test -- --coverage
```

### Test Structure
```
src/
├── __tests__/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── utils/
```

## 🚀 Deployment

### Build Process
1. **Environment Variables**: Configure production API URL
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Deployment**: Deploy to Vercel, Netlify, or similar platforms

### Environment Variables
```env
# Production
VITE_API_URL=https://your-backend-api.com/api
```

### Vercel Deployment
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      // ... other aliases
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color palette
      }
    }
  }
}
```

## 📈 Performance Optimization

### Code Splitting
```javascript
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

<Suspense fallback={<Spinner />}>
  <AdminPanel />
</Suspense>
```

### Bundle Optimization
- Tree-shaking enabled
- CSS purging with TailwindCSS
- Dynamic imports for route-based splitting
- Image optimization

## 🌍 Accessibility Features

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and roles
- **Color Contrast**: 4.5:1 minimum ratio
- **Focus Management**: Visible focus indicators
- **Alternative Text**: Images have descriptive alt text

### Implementation Examples
```jsx
// Proper ARIA labels
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// Keyboard navigation
<button
  onKeyDown={handleKeyDown}
  tabIndex={0}
  role="button"
>
  Accessible Button
</button>
```

## 🔄 API Integration

### Service Layer Pattern
```javascript
// services/resourceService.js
import api from './api';

export const resourceService = {
  getAll: (params) => api.get('/resources', { params }),
  getById: (id) => api.get(`/resources/${id}`),
  create: (data) => api.post('/resources', data),
  update: (id, data) => api.put(`/resources/${id}`, data),
  delete: (id) => api.delete(`/resources/${id}`)
};
```

### Error Handling
```javascript
// Global error interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

## 🛠️ Development Guidelines

### Code Style
- ESLint configuration for consistent code style
- Prettier for code formatting
- Component naming: PascalCase for components, camelCase for utilities
- File naming: kebab-case for files

### Component Structure
```jsx
// Functional component with hooks
const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState();
  
  return (
    <div className="component-name">
      {/* Component JSX */}
    </div>
  );
};
```

### Git Workflow
```bash
# Feature branch
git checkout -b feature/feature-name

# Commit with conventional commits
git commit -m "feat: add new feature"

# Push and create pull request
git push origin feature/feature-name
```

## 📋 Development Tasks

### Current Implementation Status
- ✅ Project setup and configuration
- ✅ Core UI components (Button, Card, Input, Modal)
- ✅ Authentication context and protected routes
- ✅ Theme context and dark mode
- ✅ Main layout components (Navbar, Footer)
- ✅ Home page with hero section and features
- ✅ Authentication pages (Login, Register)
- ✅ Resources page with search and filtering
- ✅ Events page with listing
- ✅ Mentorship page with mentor cards
- ✅ Dashboard with user statistics
- ✅ Profile management page
- ✅ Admin panel with analytics
- ✅ 404 error page

### Future Enhancements
- [ ] Complete API integration with real backend
- [ ] Add comprehensive test suite
- [ ] Implement advanced search with filters
- [ ] Add real-time notifications
- [ ] Enhance admin panel with detailed analytics
- [ ] Add internationalization (i18n)
- [ ] Implement progressive web app (PWA) features
- [ ] Add performance monitoring

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
- Configure proxy in vite.config.js
- Ensure backend CORS is properly set
- Check API URL in environment variables

**Authentication Issues**
- Verify token storage in localStorage
- Check Authorization header format
- Validate token expiration handling

**Build Errors**
- Clear node_modules and reinstall dependencies
- Check for unused imports
- Verify environment variables are set

### Development Commands
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Development server
npm run dev

# Production build
npm run build

# Lint check
npm run lint

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

### Pull Request Guidelines
- Clear description of changes
- Screenshots for UI changes
- Tests included
- Documentation updated
- No breaking changes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please contact:
- Email: support@womenempowerment.org
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

**Built with ❤️ for gender equality and women's empowerment**
