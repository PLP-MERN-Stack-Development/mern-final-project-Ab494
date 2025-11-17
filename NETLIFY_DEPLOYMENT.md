# Frontend Deployment Guide - Netlify

This guide covers deploying the React frontend to Netlify, including both manual and automated deployment options.

## Prerequisites

- Netlify account (free tier available)
- GitHub repository with your project
- Built React application (dist folder)

## Method 1: Manual Deployment via Netlify Dashboard

### Step 1: Build the Application

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

### Step 2: Prepare for Deployment

The build command will create a `dist` folder in the frontend directory. This contains your production-ready application.

### Step 3: Deploy via Netlify Dashboard

1. **Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with your GitHub, GitLab, or email account

2. **Create New Site**
   - Click "Add new site" → "Deploy manually"
   - Or drag and drop your `dist` folder to the deploy area

3. **Configure Site Settings**
   - **Site name**: `women-empowerment-portal` (or your preferred name)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (recommended)

### Step 4: Environment Variables

1. Go to Site settings → Environment variables
2. Add the following variables:

```env
VITE_API_URL=https://your-backend-api.onrender.com/api
```

**Note**: Replace `your-backend-api.onrender.com` with your actual backend deployment URL.

### Step 5: Configure Build Settings

1. Go to Site settings → Build & deploy
2. Update build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

### Step 6: Deploy

1. Click "Deploy site" 
2. Netlify will build and deploy your application
3. You'll receive a URL like `https://amazing-site-123.netlify.app`

## Method 2: Automated Deployment via GitHub Integration

### Step 1: Push to GitHub

```bash
# Add all files to git
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### Step 2: Connect GitHub Repository

1. **Login to Netlify**
2. **Create New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select your repository

### Step 3: Configure Build Settings

1. **Base directory**: `frontend` (since frontend is in subdirectory)
2. **Build command**: `cd frontend && npm install && npm run build`
3. **Publish directory**: `frontend/dist`
4. **Node version**: 18

### Step 4: Environment Variables

1. Go to Site settings → Environment variables
2. Add:
   - `VITE_API_URL`: `https://your-backend-api.onrender.com/api`

### Step 5: Deploy

1. Click "Deploy site"
2. Netlify will automatically build and deploy whenever you push to the main branch

## Method 3: Using Netlify CLI

### Step 1: Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Or using Homebrew (macOS)
brew install netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser for authentication.

### Step 3: Initialize Site

```bash
# Navigate to frontend directory
cd frontend

# Initialize Netlify
netlify init
```

### Step 4: Configure Settings

When prompted:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Step 5: Deploy

```bash
# Deploy to production
netlify deploy --prod

# Or deploy to preview URL first
netlify deploy
```

## Advanced Configuration

### ✅ **netlify.toml Configuration File (Already Created)**

The project includes a pre-configured `netlify.toml` file that handles:

```toml
[build]
  base = "frontend"
  command = "npm install && npm run build"
  publish = "frontend/dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**This configuration solves the deployment issue by:**
- ✅ Setting the build directory to `frontend`
- ✅ Using `--legacy-peer-deps` flag to resolve React 19/lucide-react conflicts
- ✅ Properly installing dependencies and building the React app
- ✅ Configuring SPA redirects for React Router
- ✅ Optimizing caching headers for static assets
- ✅ Setting the correct Node.js version

### Fixing the "Missing script: build" Error

If you encounter the "Missing script: build" error during deployment:

1. **Ensure the netlify.toml file is in your repository root**
2. **Verify the file structure:**
   ```
   project-root/
   ├── netlify.toml ✅ (This file)
   ├── frontend/
   │   ├── package.json ✅ (with build script)
   │   └── src/
   └── backend/
   ```

3. **Check your frontend package.json has the build script:**
   ```json
   {
     "scripts": {
       "build": "vite build"
     }
   }
   ```

### SPA Configuration

The netlify.toml file already includes proper SPA redirects for React Router:

```toml
# Redirects for SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers for caching static assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Environment-Specific Configuration

### Production Environment

**Frontend .env.production:**
```env
VITE_API_URL=https://women-empowerment-api.onrender.com/api
VITE_APP_TITLE=Women Empowerment Portal
```

### Staging Environment

```toml
[build]
  publish = "frontend/dist"
  command = "cd frontend && npm install && npm run build"

[context.branch-deploy]
  command = "cd frontend && npm install && npm run build:staging"

[build.environment]
  VITE_API_URL = "https://staging-api.onrender.com/api"
```

## Domain Configuration

### Custom Domain Setup

1. **Purchase Domain** (optional)
   - GoDaddy, Namecheap, or other registrar

2. **Configure in Netlify**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records as instructed

3. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - No additional configuration needed

## Monitoring and Analytics

### Netlify Analytics

1. Enable in Site settings → Analytics
2. Monitor:
   - Page views
   - Bandwidth usage
   - Top pages
   - Traffic sources

### Error Monitoring

Add error tracking in your React app:

```javascript
// Add to main.jsx
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

// Add to API service
const handleApiError = (error) => {
  if (error.response?.status >= 500) {
    // Log to external service
    console.error('Server error:', error);
  }
};
```

## Performance Optimization

### Build Optimization

**Frontend package.json optimization:**
```json
{
  "scripts": {
    "build": "vite build",
    "build:analyze": "npm run build && npx vite-bundle-analyzer"
  },
  "build": {
    "rollupOptions": {
      "output": {
        "manualChunks": {
          "vendor": ["react", "react-dom"],
          "ui": ["lucide-react", "@tanstack/react-query"]
        }
      }
    }
  }
}
```

### Caching Configuration

**netlify.toml:**
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check Node version
   node --version
   
   # Clear cache
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Routing Issues**
   - Ensure SPA redirects are configured
   - Check netlify.toml configuration

3. **API Connection Issues**
   - Verify VITE_API_URL environment variable
   - Check CORS settings in backend
   - Ensure backend URL is accessible

### Build Logs

Check build logs in Netlify dashboard for detailed error information.

### Local Testing

```bash
# Test build locally
cd frontend
npm run build
npm run preview

# Test with environment variables
VITE_API_URL=https://your-api.com/api npm run preview
```

## Security Considerations

### Environment Variables
- Never commit sensitive data to repository
- Use Netlify's environment variable management
- Rotate API keys regularly

### Content Security Policy

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://your-backend-api.com;
">
```

## Backup and Recovery

### Backup Strategy
1. Git repository serves as code backup
2. Netlify provides deployment history
3. Consider additional backup for environment variables

### Recovery Process
1. Restore from git repository
2. Reconfigure environment variables
3. Redeploy using Netlify dashboard or CLI

## Cost Optimization

### Free Tier Limits
- 100GB bandwidth/month
- 300 build minutes/month
- Unlimited personal and commercial sites

### Monitoring Usage
- Check bandwidth usage regularly
- Optimize bundle size
- Use CDN effectively

This comprehensive guide should help you deploy your React frontend to Netlify successfully!