# Portfolio Backend API

A comprehensive REST API for managing portfolio content including projects, experience, education, skills, certifications, and contact messages.

## 🚀 Features

- **Complete CRUD Operations** for all portfolio content
- **JWT Authentication** for admin access
- **MongoDB Integration** with Mongoose ODM
- **Input Validation** using Joi
- **Rate Limiting** and security middleware
- **Search Functionality** across all content types
- **File Upload Support** (ready for images)
- **Comprehensive Error Handling**
- **Database Seeding** with sample data

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🛠 Installation

1. **Clone and navigate to server directory**
```bash
cd server
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Copy .env file and update values
cp .env.example .env
```

4. **Database Setup**
```bash
# Initialize database and create admin user
npm run init-db

# Seed with sample data (optional)
npm run seed

# Or run both commands
npm run setup
```

5. **Start the server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 🔧 Environment Variables

```env
# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# JWT Secret (change in production)
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Admin Credentials
ADMIN_EMAIL=prachi@example.com
ADMIN_PASSWORD=admin123
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register new admin (protected)
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/change-password` - Change password
- `POST /api/auth/logout` - Logout

### Projects
- `GET /api/projects` - Get all projects (public)
- `GET /api/projects/:id` - Get single project (public)
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)
- `PATCH /api/projects/:id/visibility` - Toggle visibility (admin)

### Experience
- `GET /api/experience` - Get all experiences (public)
- `GET /api/experience/:id` - Get single experience (public)
- `POST /api/experience` - Create experience (admin)
- `PUT /api/experience/:id` - Update experience (admin)
- `DELETE /api/experience/:id` - Delete experience (admin)

### Education
- `GET /api/education` - Get all education records (public)
- `GET /api/education/:id` - Get single education record (public)
- `POST /api/education` - Create education record (admin)
- `PUT /api/education/:id` - Update education record (admin)
- `DELETE /api/education/:id` - Delete education record (admin)

### Skills
- `GET /api/skills` - Get all skills (public)
- `GET /api/skills/categories` - Get skill categories (public)
- `GET /api/skills/:id` - Get single skill (public)
- `GET /api/skills/search/:query` - Search skills (public)
- `POST /api/skills` - Create skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)
- `PATCH /api/skills/:id/featured` - Toggle featured status (admin)

### Certifications
- `GET /api/certifications` - Get all certifications (public)
- `GET /api/certifications/providers` - Get providers (public)
- `GET /api/certifications/categories` - Get categories (public)
- `GET /api/certifications/:id` - Get single certification (public)
- `GET /api/certifications/search/:query` - Search certifications (public)
- `POST /api/certifications` - Create certification (admin)
- `PUT /api/certifications/:id` - Update certification (admin)
- `DELETE /api/certifications/:id` - Delete certification (admin)
- `PATCH /api/certifications/:id/verify` - Toggle verification (admin)

### Contact
- `POST /api/contact` - Submit contact form (public)
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/stats` - Get contact statistics (admin)
- `GET /api/contact/:id` - Get single message (admin)
- `PATCH /api/contact/:id/status` - Update message status (admin)
- `PATCH /api/contact/:id/priority` - Update message priority (admin)
- `PATCH /api/contact/:id/spam` - Toggle spam status (admin)
- `DELETE /api/contact/:id` - Delete message (admin)

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 📝 Request/Response Examples

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "prachi@example.com",
  "password": "admin123"
}
```

### Create Project
```bash
POST /api/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "My New Project",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "status": "In Progress",
  "github": "https://github.com/user/project"
}
```

### Submit Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Collaboration Opportunity",
  "message": "I'd like to discuss a project..."
}
```

## 🗄 Database Models

### Project Schema
- title, description, longDescription
- technologies[], features[]
- status, github, demo
- startDate, endDate, priority
- isVisible, tags[]

### Experience Schema
- title, company, location
- startDate, endDate, isCurrent
- employmentType, description
- responsibilities[], achievements[]
- technologies[], skills[]

### Education Schema
- degree, fieldOfStudy, institution
- startDate, endDate, isCurrent
- grade, cgpa, percentage
- subjects[], achievements[]

### Skill Schema
- name, category, level
- proficiency, yearsOfExperience
- description, certifications[]
- icon, color, isFeatured

### Certification Schema
- title, provider, issueDate
- expiryDate, credentialId, credentialUrl
- skills[], topics[], category
- isVerified, isExpired

### Contact Schema
- name, email, subject, message
- phone, company, status, priority
- tags[], notes, source

## 🚦 Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `423` - Locked (account locked)
- `429` - Too Many Requests
- `500` - Internal Server Error

## 🔒 Security Features

- **Helmet.js** - Security headers
- **Rate Limiting** - Prevent abuse
- **CORS** - Cross-origin resource sharing
- **Input Validation** - Joi validation
- **Password Hashing** - bcryptjs
- **JWT Authentication** - Secure tokens
- **Account Locking** - Brute force protection

## 📊 Monitoring & Logging

- **Morgan** - HTTP request logging
- **Error Handling** - Comprehensive error responses
- **Health Check** - `/api/health` endpoint

## 🚀 Deployment

### Environment Setup
1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET`
3. Configure MongoDB Atlas URI
4. Set proper CORS origins

### PM2 (Recommended)
```bash
npm install -g pm2
pm2 start server.js --name portfolio-api
pm2 startup
pm2 save
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email prachi@example.com or create an issue in the repository.

---

**Built with ❤️ by Prachi Pravin Talavanekar**