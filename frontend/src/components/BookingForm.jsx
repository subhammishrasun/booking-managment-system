import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createBooking, updateBooking } from "../services/api";

const BookingSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required")
});

const BookingForm = ({ selectedBooking, onSuccess }) => {
  const isEdit = Boolean(selectedBooking);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {isEdit ? "Update Booking" : "Create New Booking"}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {isEdit ? "Modify your booking details" : "Fill in the details to create a new booking"}
        </p>
      </div>

      <Formik
        enableReinitialize
        initialValues={{
          name: selectedBooking?.name || "",
          email: selectedBooking?.email || "",
          date: selectedBooking?.date?.split("T")[0] || ""
        }}
        validationSchema={BookingSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          let res;
          try {
            if (isEdit) {
              res = await updateBooking(selectedBooking._id, values);
            } else {
              res = await createBooking(values);
            }

            if (res.success) {
              resetForm();
              onSuccess();
            } else {
              alert(res.message);
            }
          } catch (error) {
            alert("An error occurred. Please try again.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="mt-1 text-sm text-red-600 flex items-center"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-1 text-sm text-red-600 flex items-center"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Booking Date
              </label>
              <Field
                id="date"
                name="date"
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 outline-none"
              />
              <ErrorMessage
                name="date"
                component="p"
                className="mt-1 text-sm text-red-600 flex items-center"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-3 px-4 rounded-lg font-semibold text-white 
                transition duration-200 transform hover:scale-[1.02]
                ${isEdit 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
                }
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                focus:outline-none focus:ring-2 focus:ring-offset-2 
                ${isEdit ? 'focus:ring-purple-500' : 'focus:ring-blue-500'}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                isEdit ? "Update Booking" : "Create Booking"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;