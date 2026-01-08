import { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";
import { getBookings } from "../services/api";

const Home = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const fetchBookings = async () => {
    const res = await getBookings();
    if (res.success) setBookings(res.data);
    setSelectedBooking(null);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <BookingForm
        selectedBooking={selectedBooking}
        onSuccess={fetchBookings}
      />

      <BookingList
        bookings={bookings}
        onEdit={setSelectedBooking}
        onRefresh={fetchBookings}
      />
    </div>
  );
};

export default Home;
