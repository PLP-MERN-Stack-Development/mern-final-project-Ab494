# 🚀 **BACKEND DEPLOYMENT GUIDE**

## 📋 **Overview**
This guide covers deploying your Women Empowerment Platform backend to multiple cloud providers.

## 🏗️ **Backend Architecture**
- **Framework**: Express.js with ES6 modules
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcryptjs
- **Security**: Helmet, CORS, Rate Limiting
- **Deployment Ready**: Configured for cloud platforms

## 🔧 **Required Environment Variables**

Create a `.env` file with these variables:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/women_empowerment

# JWT Secret (generate a strong secret)
JWT_SECRET=your-super-strong-jwt-secret-key-here

# Frontend URL (for CORS)
FRONTEND_URL=https://your-frontend-domain.com

# Cloudinary (for file uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Server Configuration
NODE_ENV=production
PORT=5000
```

## 🌐 **Deployment Options**

### **Option 1: Render.com (Recommended)**

**Why Render?**
- ✅ Free tier available
- ✅ Automatic deployments from GitHub
- ✅ Built-in MongoDB hosting
- ✅ SSL certificates included
- ✅ Easy environment variable management

**Steps:**

1. **Push code to GitHub**
```bash
git add .
git commit -m "Backend ready for deployment"
git push origin main
```

2. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Connect your GitHub account

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder as the root directory

4. **Configure Build Settings**
   ```yaml
   Build Command: npm install
   Start Command: npm start
   ```

5. **Add Environment Variables**
   In Render dashboard → Environment tab:
   - Add all environment variables from above
   - Use Render's built-in MongoDB or external MongoDB Atlas

6. **Deploy**
   - Click "Create Web Service"
   - Wait for automatic deployment

**Render Configuration Already Present!**
Your `render.yaml` file is configured for auto-deployment.

---

### **Option 2: Railway.app**

**Steps:**

1. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

2. **Login and Initialize**
```bash
railway login
railway init
```

3. **Configure Environment**
```bash
railway add mongodb
railway add
```

4. **Deploy**
```bash
railway up
```

---

### **Option 3: Heroku**

**Steps:**

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login and Create App**
```bash
heroku login
heroku create women-empowerment-api
```

3. **Set Environment Variables**
```bash
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-jwt-secret
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set FRONTEND_URL=https://your-frontend-url.com
```

4. **Deploy**
```bash
git subtree push --prefix backend heroku main
```

---

### **Option 4: DigitalOcean App Platform**

**Steps:**

1. **Create App**
   - Go to DigitalOcean → "Apps" → "Create App"
   - Connect GitHub repository
   - Select Node.js runtime

2. **Configure Build**
   ```yaml
   Source Directory: backend
   Build Command: npm install
   Run Command: npm start
   ```

3. **Add Database**
   - Add MongoDB component
   - Configure environment variables

---

## 📦 **Database Setup Options**

### **Option 1: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster (free tier)
4. Get connection string
5. Add to environment variables

### **Option 2: Render Built-in Database**
- Already configured in your `render.yaml`
- Automatic backup and scaling
- Integrated with your web service

### **Option 3: Railway MongoDB**
```bash
railway add mongodb
```

---

## 🔒 **Security Configuration**

### **CORS Setup**
Update `server.js` for production:

```javascript
app.use(cors({
  origin: [
    'https://your-frontend-domain.com',
    'http://localhost:5173' // Remove in production
  ],
  credentials: true
}));
```

### **Environment Variables Security**
- Use strong JWT secrets (64+ characters)
- Never commit `.env` files
- Use platform environment variable managers

---

## 🧪 **Testing Deployment**

### **Health Check Endpoint**
Your server includes `/api/health` endpoint:

```bash
curl https://your-backend-domain.com/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Women Empowerment Portal API"
}
```

### **API Testing**
Test key endpoints:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/resources`
- `GET /api/events`

---

## 🛠️ **Production Optimizations**

### **Update server.js for Production**
```javascript
const PORT = process.env.PORT || 5000;

// Add production optimizations
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}
```

### **Process Management**
Add `start:prod` script:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "start:prod": "NODE_ENV=production node server.js"
  }
}
```

---

## 🔍 **Troubleshooting**

### **Common Issues:**

**1. Database Connection Failed**
- Verify MONGODB_URI format
- Check IP whitelist in MongoDB Atlas
- Ensure database is accessible from deployment region

**2. CORS Errors**
- Update FRONTEND_URL in environment variables
- Check allowed origins in CORS configuration

**3. Build Failures**
- Ensure all dependencies are in package.json
- Check Node.js version compatibility
- Verify file structure matches build commands

**4. Environment Variables**
- Double-check variable names
- Ensure no typos in values
- Restart service after adding new variables

### **Logs and Monitoring**
- **Render**: Dashboard → Logs
- **Railway**: `railway logs`
- **Heroku**: `heroku logs --tail`

---

## ✅ **Deployment Checklist**

- [ ] Environment variables configured
- [ ] Database connection established
- [ ] Frontend URL added to CORS
- [ ] Health check endpoint responding
- [ ] SSL certificate active
- [ ] API endpoints tested
- [ ] Error handling configured
- [ ] Rate limiting active

---

## 🚀 **Quick Start Commands**

**Render (Recommended):**
```bash
git push origin main
# Render auto-deploys from render.yaml
```

**Railway:**
```bash
railway up
```

**Heroku:**
```bash
heroku create women-empowerment-api
heroku config:set MONGODB_URI=your-mongodb-uri
git subtree push --prefix backend heroku main
```

Your backend is production-ready with security middleware, error handling, and proper API structure!