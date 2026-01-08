const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Allowed origins based on environment
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://booking-managment-system-1.onrender.com" // Render frontend URL
      ]
    : [
        "http://localhost:5174", // Vite
        "http://localhost:5173"  // CRA (optional)
      ];

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true, //  REQUIRED
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })
);


app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Booking Manager API is running");
});

module.exports = app;
