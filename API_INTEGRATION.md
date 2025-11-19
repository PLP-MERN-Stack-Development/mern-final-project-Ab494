# 🔗 **FRONTEND API INTEGRATION EXPLAINED**

## ✅ **HOW THE FRONTEND FETCHES APIS FROM YOUR BACKEND**

### **1. Environment Configuration**

**frontend/.env.production:**
```env
VITE_API_URL=https://women-empowerment-1kk5.onrender.com/api
```

### **2. API Service Configuration**

**frontend/src/services/api.js:**
```javascript
import axios from 'axios';

// In production, this uses your backend URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Automatic token injection for authenticated requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handling with toast notifications
api.interceptors.response.use(/* error handling */);

export default api;
```

### **3. Authentication Integration**

**frontend/src/context/AuthContext.jsx:**
```javascript
import api from '../services/api';

const login = async (email, password) => {
  // This makes request to: https://women-empowerment-1kk5.onrender.com/api/auth/login
  const { data } = await api.post('/auth/login', { email, password });
  return data;
};

const register = async (userData) => {
  // This makes request to: https://women-empowerment-1kk5.onrender.com/api/auth/register
  const { data } = await api.post('/auth/register', userData);
  return data;
};
```

### **4. How Pages Use the API**

**frontend/src/pages/Login.jsx:**
```javascript
const onSubmit = async (data) => {
  // Uses AuthContext which calls the API service
  const result = await login(data.email, data.password);
  // API call goes to: https://women-empowerment-1kk5.onrender.com/api/auth/login
};
```

## 🔄 **API CALL FLOW**

```
Frontend Page (Login.jsx)
    ↓
AuthContext (AuthContext.jsx)
    ↓
API Service (services/api.js)
    ↓
Backend URL (from .env.production)
    ↓
https://women-empowerment-1kk5.onrender.com/api/auth/login
```

## 📡 **PRODUCTION API ENDPOINTS**

Your frontend will make API calls to these backend endpoints:

**Authentication:**
- `POST /auth/login` → https://women-empowerment-1kk5.onrender.com/api/auth/login
- `POST /auth/register` → https://women-empowerment-1kk5.onrender.com/api/auth/register
- `GET /auth/me` → https://women-empowerment-1kk5.onrender.com/api/auth/me

**User Management:**
- `GET /users/profile` → https://women-empowerment-1kk5.onrender.com/api/users/profile
- `PUT /users/profile` → https://women-empowerment-1kk5.onrender.com/api/users/profile

**Resources:**
- `GET /resources` → https://women-empowerment-1kk5.onrender.com/api/resources
- `POST /resources` → https://women-empowerment-1kk5.onrender.com/api/resources

**Events:**
- `GET /events` → https://women-empowerment-1kk5.onrender.com/api/events
- `POST /events` → https://women-empowerment-1kk5.onrender.com/api/events

**Mentorships:**
- `GET /mentorships` → https://women-empowerment-1kk5.onrender.com/api/mentorships
- `POST /mentorships` → https://women-empowerment-1kk5.onrender.com/api/mentorships

## 🧪 **TESTING THE API CONNECTION**

### **Backend Health Check:**
```bash
curl https://women-empowerment-1kk5.onrender.com/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Women Empowerment Portal API"
}
```

### **Frontend Test:**
1. Go to: https://women-empowermentsdgs.netlify.app/
2. Click "Register" to create an account
3. The registration form will call: `https://women-empowerment-1kk5.onrender.com/api/auth/register`
4. Login form will call: `https://women-empowerment-1kk5.onrender.com/api/auth/login`

## ✅ **INTEGRATION STATUS: READY**

- ✅ **Frontend .env.production** → Points to your Render backend
- ✅ **API Service** → Uses environment variable for base URL
- ✅ **AuthContext** → Makes API calls through configured service
- ✅ **CORS Configuration** → Backend allows your frontend domain
- ✅ **Error Handling** → Global error management with toast notifications
- ✅ **Authentication** → JWT token management configured

**The frontend is fully configured to communicate with your backend!** 🎯