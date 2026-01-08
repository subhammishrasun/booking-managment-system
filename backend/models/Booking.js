const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true
    },
    date: {
      type: Date,
      required: [true, "Booking date is required"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
