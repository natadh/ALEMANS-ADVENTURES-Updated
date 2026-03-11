import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/adminHeader";
import BookingModal from "./BookingModal";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function Bookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("date_desc");
  const [filter, setFilter] = useState<string>("all");

  // Debounce timer
  const [debounceTimer, setDebounceTimer] = useState<number | null>(null);
  const fetchBookings = async (query = "", sortValue = sort, filterValue = filter) => {
    try {
      const params = new URLSearchParams({
        q: query,
        sort: sortValue,
        filter: filterValue,
      });

      const res = await fetch(`${API_BASE}/booking/search.php?${params.toString()}`);
      const data = await res.json();
      if (data.success) setBookings(data.bookings);
    } catch (err) {
      console.error("Failed to fetch bookings", err);
    }
  };

  // Fetch bookings when sort/filter changes
  useEffect(() => {
    fetchBookings(search, sort, filter);
  }, [sort, filter]);

  // Handle search input with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (debounceTimer) clearTimeout(debounceTimer);

    const timer = setTimeout(() => {
      fetchBookings(value, sort, filter);
    }, 300); // 300ms debounce

    setDebounceTimer(timer);
  };

  const markAsRead = async (bookingId: number) => {
    try {
      await fetch(`${API_BASE}/booking/mark-read.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId }),
      });
      setBookings((prev) =>
        prev.map((b) => (b.id === bookingId ? { ...b, read: 1 } : b))
      );
    } catch (err) {
      console.error("Failed to mark booking as read", err);
    }
  };

  const handleBookingClick = (booking: any) => {
    if (!booking.read) markAsRead(booking.id);
    setSelectedBooking(booking);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <AdminHeader />
      <div className="max-w-6xl mx-auto py-20 px-6">
        {/* Header */}
        <div className="mb-6">
          <div className="w-12 h-px bg-[#F5D547] mb-4"></div>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-4">
            Bookings
          </h1>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search bookings by name, email or phone..."
              value={search}
              onChange={handleSearchChange}
              className="w-full md:w-1/2 p-3 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-3 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="date_desc">Newest First</option>
              <option value="date_asc">Oldest First</option>
              <option value="name_asc">Name A → Z</option>
              <option value="name_desc">Name Z → A</option>
            </select>

            {/* Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="all">All</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {bookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleBookingClick(booking)}
              className={`cursor-pointer bg-white p-6 flex flex-col gap-4 transition-colors duration-300
                ${booking.read ? "hover:bg-[#FAFAF8]" : "bg-yellow-50 border-yellow-400 font-semibold"}
              `}
            >
              <div>
                <h2 className="font-medium text-base uppercase tracking-wider text-[#1A0A0B] mb-2">
                  {booking.full_name} {booking.has_children ? "(Family)" : ""}
                </h2>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {booking.adults} adults, {booking.children} children
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {booking.arrival_date} → {booking.departure_date}
                </p>
              </div>
              {!booking.read && (
                <div className="w-fit text-[10px] bg-red-500 text-white px-2 py-0.5 uppercase tracking-widest">
                  New
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedBooking && (
        <BookingModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
}