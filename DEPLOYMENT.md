# Deployment Configuration for Backend

## Render.com Deployment Instructions

1. **Create new Web Service on Render.com**
2. **Connect your GitHub repository**
3. **Configure the following:**

### Build Settings:
- **Build Command**: `cd backend && npm install`
- **Start Command**: `npm start`

### Environment Variables:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/women-empowerment
JWT_SECRET=your-secure-production-secret-key-here
FRONTEND_URL=https://your-frontend-app.vercel.app
```

### Auto-Deploy:
- Enable auto-deploy for continuous integration

## Environment Setup

Create a `.env.production` file:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/women-empowerment
JWT_SECRET=your-very-secure-jwt-secret-for-production
FRONTEND_URL=https://women-empowerment-frontend.vercel.app
```

## Database Setup

1. Create MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Add IP address to whitelist

## Security Considerations

- Use strong JWT secrets (minimum 32 characters)
- Enable MongoDB Atlas security features
- Set up proper CORS origins
- Use HTTPS only