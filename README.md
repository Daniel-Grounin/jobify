# Jobify – Job Application Tracker

A minimalist MERN-stack web app that helps you organize every job application, interview, and follow-up in one place.

## Features

* **Add / Edit / Delete Jobs** – full CRUD functionality
* **Dashboard** with stats, charts, and filters
* **Secure Auth** – JWT-based login & registration
* **Responsive UI** built with React + Styled-Components
* **REST API** powered by Node, Express, and MongoDB
* **Dark Mode** and collapsible sidebar

## Tech Stack

| Layer           | Tech                                   |
| --------------- | -------------------------------------- |
| Front-end       | React (Vite), React Router 6, Axios    |
| Styling         | Styled-Components, React-Icons         |
| Back-end        | Node.js, Express, Express-Async-Errors |
| Database        | MongoDB Atlas, Mongoose                |
| Auth & Security | bcrypt, JSON Web Tokens (JWT)          |
| Charts          | Recharts                               |

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/jobify.git
cd jobify

# 2. Install dependencies
npm install          # root dev tools
cd client && npm install   # React app
cd ../server && npm install # API

# 3. Create a .env file inside /server
# (see “Environment Variables” below)

# 4. Run both servers in dev mode
npm run dev          # uses concurrently
```

### Environment Variables (`/server/.env`)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=super_secret_key
JWT_LIFETIME=1d
```

### Scripts

| Command          | Purpose                        |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start client & server together |
| `npm run server` | Start only the Express API     |
| `npm run client` | Start only the React app       |
| `npm run build`  | Build React for production     |

## Deployment

Jobify can be deployed easily on [Render](https://render.com) or any platform that supports Node & static sites:

1. Push the repo to GitHub
2. Create a new **Web Service** for `/server` (build command: `npm install && npm run build`, start: `node server.js`)
3. Add a **Static Site** for `/client/dist` or serve the build folder from Express
4. Set the environment variables in your dashboard

## Screenshots

| Landing                      | Dashboard (dark)                      |
| ---------------------------- | ------------------------------------- |
| ![Landing](docs/landing.png) | ![Dashboard](docs/dashboard-dark.png) |



