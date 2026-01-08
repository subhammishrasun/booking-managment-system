const VITE_URL = import.meta.env.VITE_API_URL;

export const getBookings = async () => {
  const res = await fetch(VITE_URL);
  return res.json();
};

export const createBooking = async (data) => {
  const res = await fetch(VITE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateBooking = async (id, data) => {
  const res = await fetch(`${VITE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteBooking = async (id) => {
  const res = await fetch(`${VITE_URL}/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
