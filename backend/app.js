const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Allowed origins based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://your-frontend.onrender.com" // Render frontend URL
      ]
    : [
        "http://localhost:5174", // Vite
        "http://localhost:3000"  // CRA (optional)
      ];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    }
  })
);

app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Booking Manager API is running");
});

module.exports = app;
