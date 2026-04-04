# Prachi Pravin Talavanekar — Portfolio

A full-stack personal portfolio website with a dynamic admin dashboard. All content (projects, experience, skills, certifications, education) is managed through the admin panel and served live from a MongoDB database.

---

## Tech Stack

**Frontend**
- React 18, React Router v6
- Tailwind CSS, Framer Motion
- Axios, React Icons

**Backend**
- Node.js, Express.js
- MongoDB, Mongoose
- JWT Authentication, bcryptjs
- Joi validation

**Deployment**
- Frontend + Backend → [Render](https://render.com)
- Database → MongoDB Atlas

---

## Project Structure

```
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Navbar, Footer, CursorEffect, ProtectedRoute
│       │   └── admin/       # Standalone form components (legacy)
│       ├── contexts/        # AuthContext (JWT auth state)
│       ├── hooks/           # useApi (data fetching hook)
│       ├── pages/           # All public pages + Admin dashboard
│       └── services/        # api.js (Axios instance + all API methods)
│
└── server/                  # Express backend
    ├── middleware/           # auth.js (JWT), validation.js (Joi)
    ├── models/               # Mongoose schemas
    ├── routes/               # REST API routes
    ├── scripts/              # DB init script
    └── utils/                # Seed data
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home / Hero |
| `/about` | About me |
| `/education` | Education history |
| `/experience` | Work experience |
| `/skills` | Skills & proficiency |
| `/projects` | Projects showcase |
| `/certifications` | Certifications |
| `/resume` | Resume download |
| `/contact` | Contact form |
| `/admin/login` | Admin login |
| `/admin` | Admin dashboard (protected) |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Create project (auth) |
| PUT | `/api/projects/:id` | Update project (auth) |
| DELETE | `/api/projects/:id` | Delete project (auth) |
| GET | `/api/experience` | Get all experience |
| POST | `/api/experience` | Create experience (auth) |
| GET | `/api/skills` | Get all skills (grouped) |
| GET | `/api/certifications` | Get all certifications |
| GET | `/api/education` | Get all education |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/upload` | Upload image/PDF as base64 (auth) |
| GET | `/api/analytics/stats` | Get page view stats |
| GET | `/api/health` | Health check |

---

## Admin Features

- Add / edit / delete Projects, Experience, Education, Skills, Certifications
- Upload project images from device
- Upload company logo from device (Experience)
- Upload internship certificate PDF (Experience)
- Toggle visibility of any item
- Dashboard with content counts and portfolio view stats

---

## Local Setup

### Prerequisites
- Node.js >= 14
- MongoDB Atlas URI (or local MongoDB)

### 1. Clone the repo

```bash
git clone https://github.com/prachiTalavanekar/MyPortfolio.git
cd MyPortfolio
```

### 2. Setup the server

```bash
cd server
npm install
```

Create `server/.env`:

```env
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
PORT=5001
NODE_ENV=development
ADMIN_EMAIL=your_email
ADMIN_PASSWORD=your_password
```

Initialize the database and create the admin user:

```bash
npm run init-db
```

Start the server:

```bash
npm run dev
```

### 3. Setup the client

```bash
cd client
npm install
```

Create `client/.env`:

```env
REACT_APP_API_URL=http://localhost:5001/api
```

Start the client:

```bash
npm start
```

The app runs at `http://localhost:3000`, API at `http://localhost:5001/api`.

---

## Environment Variables

### Server (`server/.env`)

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `PORT` | Server port (default 5001) |
| `NODE_ENV` | `development` or `production` |
| `ADMIN_EMAIL` | Initial admin email |
| `ADMIN_PASSWORD` | Initial admin password |
| `FRONTEND_URL` | Allowed CORS origin in production |

### Client (`client/.env`)

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Backend API base URL |

---

## Deployment (Render)

The backend is deployed as a **Web Service** and the frontend as a **Static Site** on Render.

**Backend build command:** `npm install`  
**Backend start command:** `node server.js`

**Frontend build command:** `npm install && npm run build`  
**Frontend publish directory:** `build`

Set all environment variables in the Render dashboard under each service's **Environment** tab.

---

## Author

**Prachi Pravin Talavanekar**  
GitHub: [@prachiTalavanekar](https://github.com/prachiTalavanekar)
