# IMovies

A MERN cinema booking platform based on the structure of the public reference project [121-bhavya/IMovies](https://github.com/121-bhavya/IMovies), with our own branding and configuration.

## Brand system
- Charcoal: `#202024`
- Warm ivory: `#F4EBDD`
- Parchment: `#E8DDCA`
- Crimson: `#B32635`
- Headings: DM Serif Display
- Interface: DM Sans

## Environment setup
Copy the root `.env.example` to `.env` for Docker Compose, or copy `server/.env.example` to `server/.env` for local backend development. Fill in your MongoDB connection and create a strong private `JWT_SECRET`. Add a TMDB API key if you want real movie metadata. Never commit `.env` files or secrets.

## Run locally
Install dependencies in `server` and `client`, configure the server environment, start MongoDB, then run the backend and frontend using the scripts in their respective `package.json` files. Test locally before deployment or using real customer data.
