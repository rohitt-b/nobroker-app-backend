# NoBroker App – Backend

This is the backend service for a NoBroker-style PropTech application built using **Node.js**, **TypeScript**, **Express**, **PostgreSQL**, and **Prisma ORM**.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- ✅ Create and Fetch Property Listings (Protected)
- ✅ PostgreSQL + Prisma Integration
- ✅ Modular Architecture (Routes, Controllers, Middleware)

---

## 🛠️ Tech Stack

- Node.js + TypeScript
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication

---

## 📦 Installation (for local setup)

1. **Clone the repository**
```bash
git clone https://github.com/your-username/nobroker-app-backend.git
cd nobroker-app-backen
````

2. install dependencies
3. npm install

4.Set environment variables

Create a .env file in the root:

env
Copy
Edit
DATABASE_URL=your_postgresql_url_here
JWT_SECRET=your_jwt_secret
PORT=5000


5. Run the server

bash
Copy
Edit
npx ts-node-dev src/index.ts


📬 API Endpoints
markdown
Copy
Edit
### 🔐 Auth Routes
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Authenticate user and receive a JWT token

### 🏠 Property Routes
- `GET /api/properties` – Get all listed properties
- `POST /api/properties` – Create a new property (requires JWT token in header)
🧪 How to Test with Postman
markdown
Copy
Edit
1. Register or login using the endpoints:
   - `POST /api/auth/register`
   - `POST /api/auth/login`

2. Copy the token from login response.

3. For protected routes like `POST /api/properties`, add a header:
   - `Authorization: Bearer <your_token_here>`
🌐 Deployment (After Railway is done)
markdown
Copy
Edit
### Live API URL:
- `https://your-railway-url.up.railway.app`
