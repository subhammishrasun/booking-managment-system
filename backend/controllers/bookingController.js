const Booking = require("../models/Booking");

// @desc   Create a new booking
// @route  POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { name, email, date } = req.body;

    // Basic validation
    if (!name || !email || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const booking = await Booking.create({ name, email, date });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

// @desc   Get all bookings
// @route  GET /api/bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};


// @desc   Update booking
// @route  PUT /api/bookings/:id
exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, date } = req.body;

    // Basic validation
    if (!name || !email || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { name, email, date },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

// @desc   Delete booking
// @route  DELETE /api/bookings/:id
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};


// @desc   Update booking
// @route  PUT /api/bookings/:id
exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, date } = req.body;

    // Basic validation
    if (!name || !email || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { name, email, date },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

// @desc   Delete booking
// @route  DELETE /api/bookings/:id
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

