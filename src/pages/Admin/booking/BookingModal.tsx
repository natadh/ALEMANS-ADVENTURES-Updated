import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  booking: any;
  onClose: () => void;
}

const BookingModal: FC<BookingModalProps> = ({ booking, onClose }) => {
  if (!booking) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="bg-white w-full max-w-lg p-8 border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-lg font-bold transition-colors duration-200"
          >
            ×
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="w-14 h-px bg-[#F5D547] mb-4"></div>
            <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-[#1A0A0B]">
              Booking Details
            </h2>
          </div>

          {/* Booking Details */}
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Name:</strong> {booking.full_name}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Phone:</strong> {booking.phone}</p>
            <p><strong>Nationality:</strong> {booking.nationality}</p>
            <p><strong>State:</strong> {booking.state}</p>
            <p><strong>Adults:</strong> {booking.adults}</p>
            <p><strong>Has Children:</strong> {booking.has_children ? "Yes" : "No"}</p>
            {booking.has_children && <p><strong>Children:</strong> {booking.children}</p>}
            <p><strong>Arrival Date:</strong> {booking.arrival_date}</p>
            <p><strong>Departure Date:</strong> {booking.departure_date}</p>
            {booking.accommodation && <p><strong>Accommodation:</strong> {booking.accommodation}</p>}
            {booking.transport && <p><strong>Transport:</strong> {booking.transport}</p>}
            {booking.message && <p><strong>Message:</strong> {booking.message}</p>}
            <p>
              <strong>Status:</strong>{" "}
              <span className={`${booking.read ? "text-gray-500" : "text-red-500 font-semibold"}`}>
                {booking.read ? "Read" : "Unread"}
              </span>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;