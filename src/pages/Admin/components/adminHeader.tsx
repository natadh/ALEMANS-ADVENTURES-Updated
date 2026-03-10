import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Upload, BookOpen, Star, LayoutDashboard, Globe, Menu, X, CalendarCheck, MapPin } from "lucide-react";

// Use your environment variable for API base URL
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const navItems = [
  { label: "Dashboard", path: "/admin", icon: <LayoutDashboard className="w-4 h-4" strokeWidth={1.5} /> },
  { label: "Upload Document", path: "/admin/uploads", icon: <Upload className="w-4 h-4" strokeWidth={1.5} /> },
  { label: "Journals", path: "/admin/journal", icon: <BookOpen className="w-4 h-4" strokeWidth={1.5} /> },
  { label: "Reviews", path: "/admin/reviews", icon: <Star className="w-4 h-4" strokeWidth={1.5} /> },
  { label: "Safaris", path: "/admin/safaris", icon: <MapPin className="w-4 h-4" strokeWidth={1.5} /> },
  { label: "Bookings", path: "/admin/bookings", icon: <CalendarCheck className="w-4 h-4" strokeWidth={1.5} />, showUnread: true },
];

export default function AdminHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };
  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE}/auth/logout.php`, {
        method: "POST",
        credentials: "include",
      });

      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  // Fetch unread bookings count
  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const res = await fetch(`${API_BASE}/booking/unread.php`);
        const data = await res.json();
        if (data.unreadCount !== undefined) {
          setUnreadCount(data.unreadCount);
        }
      } catch (err) {
        console.error("Failed to fetch unread bookings", err);
      }
    };

    fetchUnread();
    // Optional: refresh every 30s
    const interval = setInterval(fetchUnread, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer shrink-0"
          onClick={() => handleNavigate("/admin")}
        >
          <div className="w-6 h-px bg-[#F5D547]"></div>
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A0A0B]">
            Admin
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.15em] font-light transition-colors duration-200 whitespace-nowrap
                  ${isActive
                    ? "bg-[#1A0A0B] text-white"
                    : "text-gray-600 hover:text-[#1A0A0B] hover:bg-[#FAFAF8]"
                  }`}
              >
                {item.icon}
                {item.label}
                {item.showUnread && unreadCount > 0 && (
                  <sup className="text-[10px] font-bold hover:text-[#1A0A0B]">{unreadCount}</sup>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">

          <button
            onClick={() => handleNavigate("/")}
            className="hidden md:flex items-center gap-2 border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-4 py-2 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
          >
            <Globe className="w-4 h-4" strokeWidth={1.5} />
            Website
          </button>

          <button
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-4 py-2 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
          >
            Logout
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-[#1A0A0B] hover:text-gray-600 transition-colors duration-200"
          >
            {menuOpen
              ? <X className="w-5 h-5" strokeWidth={1.5} />
              : <Menu className="w-5 h-5" strokeWidth={1.5} />
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col divide-y divide-gray-100">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`flex items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.15em] font-light transition-colors duration-200 text-left
                    ${isActive
                      ? "bg-[#1A0A0B] text-white"
                      : "text-gray-600 hover:text-[#1A0A0B] hover:bg-[#FAFAF8]"
                    }`}
                >
                  {item.icon}
                  {item.label}
                  {item.showUnread && unreadCount > 0 && (
                    <sup className="ml-1 text-[10px] bg-red-500 text-white px-1 rounded-full">{unreadCount}</sup>
                  )}
                </button>
              );
            })}

            <button
              onClick={() => handleNavigate("/")}
              className="flex items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.15em] font-light text-gray-600 hover:text-[#1A0A0B] hover:bg-[#FAFAF8] transition-colors duration-200"
            >
              <Globe className="w-4 h-4" strokeWidth={1.5} />
              Back to Website
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}