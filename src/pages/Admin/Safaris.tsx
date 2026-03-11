import { useState } from "react";
import CategoriesEditor from "./Safaris/CategoriesEditor";
import SubcategoriesEditor from "./Safaris/SubcategoriesEditor";
import SafarisEditor from "./Safaris/SafarisEditor";
import AdminHeader from "./components/adminHeader";

export default function AdminSafarisPage() {
  const [activeTab, setActiveTab] = useState<"categories" | "subcategories" | "safaris">("categories");
  const [countryId, setCountryId] = useState<number | null>(1);

  const tabClasses = (tab: string) =>
    `px-4 py-2 rounded uppercase tracking-wide text-sm font-medium transition-colors duration-200 ${
      activeTab === tab
        ? "bg-[#F5D547] text-black"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <AdminHeader />

      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="w-12 h-px bg-[#F5D547] mb-4"></div>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B]">
            Admin Safari Management
          </h1>
          <p className="text-gray-600 mt-2 text-sm font-light">
            Manage safari categories, subcategories, and tours.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button className={tabClasses("categories")} onClick={() => setActiveTab("categories")}>
            Categories
          </button>
          <button className={tabClasses("subcategories")} onClick={() => setActiveTab("subcategories")}>
            Subcategories
          </button>
          <button className={tabClasses("safaris")} onClick={() => setActiveTab("safaris")}>
            Safaris
          </button>
        </div>

        {/* Optional: country filter dropdown */}
        <div className="mb-6 flex items-center gap-2">
          <label className="font-medium">Country:</label>
          <select
            value={countryId ?? ""}
            onChange={(e) => setCountryId(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
          >
            <option value={1}>Kenya</option>
            <option value={2}>Uganda</option>
            <option value={3}>Tanzania</option>
            <option value={4}>Rwanda</option>
            <option value={5}>Zanzibar</option>
          </select>
        </div>

        {/* Editor area */}
        <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-6">
          {activeTab === "categories" && <CategoriesEditor countryId={countryId} />}
          {activeTab === "subcategories" && <SubcategoriesEditor countryId={countryId} />}
          {activeTab === "safaris" && <SafarisEditor countryId={countryId} />}
        </div>
      </div>
    </div>
  );
}