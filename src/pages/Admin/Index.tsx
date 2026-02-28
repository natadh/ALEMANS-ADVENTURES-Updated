import { useNavigate } from "react-router-dom";
import { Upload, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";
import AdminHeader from "./components/adminHeader";
export default function AdminIndexPage() {
  const navigate = useNavigate();

  const options = [
    {
      title: "Upload New Document",
      description: "Upload new privacy policies, legal notices, or other files.",
      icon: <Upload className="w-6 h-6" strokeWidth={1.5} />,
      action: () => navigate("/admin/uploads"),
    },
    {
      title: "Manage Journal",
      description: "Create and edit travel journal entries.",
      icon: <BookOpen className="w-6 h-6" strokeWidth={1.5} />,
      action: () => navigate("/admin/journal"),
    },
    {
      title: "Manage Reviews",
      description: "Create and edit customer reviews.",
      icon: <Star className="w-6 h-6" strokeWidth={1.5} />,
      action: () => navigate("/admin/reviews"),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <AdminHeader/>
      <div className="max-w-6xl mx-auto py-20 px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B]">
            Admin Dashboard
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white hover:bg-[#FAFAF8] transition-colors duration-300 p-8 flex flex-col gap-6"
            >
              {/* Icon + Title */}
              <div>
                <div className="text-[#F5D547] mb-4">
                  {option.icon}
                </div>
                <h2 className="font-medium text-base uppercase tracking-wider text-[#1A0A0B] mb-2">
                  {option.title}
                </h2>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {option.description}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={option.action}
                className="w-fit border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-6 py-2.5 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
              >
                Open
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}