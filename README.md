# IMovies — Cinema Booking Platform

IMovies is a full-stack MERN cinema booking application where users can explore movies, browse showtimes, select seats, complete simulated payments, and manage their digital tickets.

## Tech Stack

**Frontend**
- React 18 and Vite
- Bootstrap 5 and custom CSS
- Redux Toolkit
- React Router
- Socket.IO Client

**Backend**
- Node.js and Express
- MongoDB and Mongoose
- JWT authentication and bcryptjs
- Socket.IO for real-time updates
- Helmet and express-rate-limit for security

## Features

- **Movie discovery:** Browse movies and filter by title, genre, language, city, and date.
- **Movie details:** View movie information, posters, ratings, and available showtimes.
- **Theatre and showtime selection:** Explore theatres and showtimes across available cities.
- **Interactive seat selection:** Choose from Standard, Premium, and Recliner seats.
- **Real-time seat updates:** Socket.IO helps keep seat availability synchronized.
- **Temporary seat holds:** Selected seats are held temporarily to reduce booking conflicts.
- **Simulated payments:** Test the checkout flow using card, UPI, or wallet payment options.
- **Digital tickets and booking history:** View your bookings and ticket information.
- **User authentication:** Register, log in, and access protected features.
- **Admin dashboard:** Manage movies, theatres, shows, and bookings.

> Note: Payments are simulated. This application is intended for development and demonstration, not for processing real payments.

## Prerequisites

Before running IMovies locally, install:

- [Node.js](https://nodejs.org/) — Node.js 18 or later
- A MongoDB database, either a local installation or [MongoDB Atlas](https://www.mongodb.com/atlas)
- Git (optional, for cloning the repository)

## Getting Started on macOS

### 1. Configure the backend

Open a terminal in the project root and run:

```bash
cd server
npm install
```

Make sure a `server/.env` file exists and contains the required configuration:

```env
PORT=5002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
TMDB_API_KEY=your_tmdb_api_key
```

Replace the example values with your own configuration. Use the MongoDB database name `imovies` in your connection string.

- `MONGO_URI` connects the backend to your MongoDB database.
- `JWT_SECRET` is used to sign authentication tokens.
- `CLIENT_URL` specifies the frontend origin.
- `TMDB_API_KEY` is optional if you want to import movie data from TMDB.

**Important:** Keep your `.env` file private. Never commit database credentials, API keys, or secrets to GitHub.

### 2. Start the backend

From the `server` directory, run:

```bash
npm run dev
```

The backend should be available at:

```text
http://localhost:5002
```

You can check its health endpoint at `http://localhost:5002/api/health`.

### 3. Seed the database

Open a second terminal and navigate to the server directory:

```bash
cd server
npm run seed
```

This imports movie data when the configured importer is available and creates sample theatres, showtimes, and demo accounts.

Run the seed command only when you need to populate the database. Avoid using `npm run seed:reset` unless you intentionally want to reset existing data.

### 4. Start the frontend

Open another terminal and run:

```bash
cd client
npm install
npm run dev
```

Open the local website:

**http://localhost:5173**

Ensure that the frontend development server proxies API requests and Socket.IO connections to the backend port configured in your project. In the current local setup, that port is `5002`.

## Using MongoDB Atlas

To use MongoDB Atlas instead of a local MongoDB installation:

1. Create a cluster in MongoDB Atlas.
2. Create a database user under **Database Access**.
3. Configure **Network Access** to allow your development machine.
4. Copy the connection string from **Connect → Drivers**.
5. Add the database name `imovies` to the connection string and place it in `MONGO_URI` inside `server/.env`.

Example format:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@YOUR_CLUSTER.mongodb.net/imovies?retryWrites=true&w=majority
```

This is only an example. Replace the placeholders with your actual credentials. URL-encode special characters in your password when necessary.

Never share or commit your MongoDB connection string.

## Importing Movie Data

IMovies supports importing movie information from external sources configured in the project.

- **TMDB:** Configure `TMDB_API_KEY` in `server/.env` to enable TMDB imports.
- **Fallback sources:** The project may use another configured source when TMDB is unavailable.
- **Showtimes and seat availability:** These are generated for the application and are not guaranteed to represent real cinema schedules.

To refresh movie data, run the import command from the `server` directory:

```bash
npm run import:movies
```

The availability of imported information depends on the external source and its configuration.

## Demo Accounts

The seed script creates the following development accounts:

| Role | Email | Password |
|---|---|---|
| Admin | `admin@imovies.com` | `Admin@123` |
| User | `user@imovies.com` | `User@123` |

These credentials are for local testing only. Change them before any public deployment, and never use these default credentials in production.

## Project Structure

```text
imovies/
├── client/          # React frontend
├── server/          # Express backend
├── docker-compose.yml
├── .gitignore
└── README.md
```

The frontend contains the pages, components, styling, and client-side state management. The backend contains the API routes, controllers, database models, authentication, and booking logic.

## API Overview

The backend exposes REST API endpoints for:

- Authentication and user profiles
- Movie browsing and administration
- Theatre and showtime management
- Seat locking and booking
- Booking history and cancellation
- Notifications
- Administrative statistics and booking management

Protected endpoints require authentication, and administrative endpoints require appropriate permissions.

## Security and Limitations

- Passwords are hashed using bcrypt.
- JWT authentication protects restricted routes.
- Backend middleware provides security headers and rate limiting.
- Booking logic checks seat availability to reduce the risk of double-booking.
- Payments are simulated and do not transfer real money.
- The application requires further security review and configuration before production deployment.

## Future Improvements

Potential enhancements include:

- Food and beverage add-ons
- Promotional codes
- Email ticket delivery
- An admin seat-map editor
- Automated API and frontend tests
- Integration with a real payment gateway
