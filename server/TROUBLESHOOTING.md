# 🔧 Troubleshooting Guide

## Server Crash Issues

### 1. **Check Dependencies**
```bash
# Make sure all dependencies are installed
npm install

# Check if Node.js is working
npm run check
```

### 2. **Test Basic Server**
```bash
# Run the test server (minimal setup)
npm run test-server

# Visit: http://localhost:5000/test
```

### 3. **Diagnose Issues**
```bash
# Run diagnostic script
npm run diagnose
```

### 4. **Common Issues & Solutions**

#### ❌ **Module Not Found Errors**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### ❌ **MongoDB Connection Failed**
```bash
# Check if MongoDB is running
# For local MongoDB:
mongod

# For MongoDB Atlas:
# - Check connection string in .env
# - Verify network access in Atlas dashboard
# - Check username/password
```

#### ❌ **Port Already in Use**
```bash
# Change port in .env file
PORT=5001

# Or kill process using the port
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

#### ❌ **JWT Secret Error**
```bash
# Make sure JWT_SECRET is set in .env
JWT_SECRET=your_very_long_and_secure_secret_key_here
```

### 5. **Step-by-Step Startup**

1. **Check Environment**
```bash
# Copy example env file
cp .env.example .env

# Edit .env with your values
```

2. **Install Dependencies**
```bash
npm install
```

3. **Test MongoDB Connection**
```bash
# Start MongoDB locally or check Atlas connection
```

4. **Start Server**
```bash
# Development mode
npm run dev

# Or production mode
npm start
```

### 6. **Debugging Tips**

#### Enable Detailed Logging
```javascript
// Add to server.js for debugging
console.log('Environment variables:', {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Not set',
  JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set'
});
```

#### Check Server Logs
```bash
# Run with detailed output
DEBUG=* npm run dev
```

### 7. **Quick Fixes**

#### Minimal Working Server
If everything fails, use this minimal server.js:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 8. **Environment-Specific Issues**

#### Windows
- Use `npm run dev` instead of `nodemon` directly
- Check Windows Defender/Antivirus blocking Node.js

#### Mac/Linux
- Check file permissions: `chmod +x server.js`
- Use `sudo` if port < 1024

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### 9. **Getting Help**

If issues persist:
1. Check the error message carefully
2. Look at the full stack trace
3. Verify all environment variables are set
4. Test with minimal configuration
5. Check MongoDB connection separately

### 10. **Success Indicators**

When server starts successfully, you should see:
```
🎉 ================================
🚀 Server running on port 5000
🌐 Environment: development
📱 Frontend URL: http://localhost:3000
🔗 API Base URL: http://localhost:5000/api
🏥 Health Check: http://localhost:5000/api/health
🎉 ================================
```

Test the health endpoint: `http://localhost:5000/api/health`