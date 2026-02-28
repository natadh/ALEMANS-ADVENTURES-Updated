import { useEffect, useState } from "react";
import UploadForm from "./UploadForm";
import UploadList from "./UploadList";
import AdminHeader from "../components/adminHeader";

interface UploadItem {
  id: number;
  title: string;
  description?: string;
  footer_name: string;
  section: string;
  url: string;
}

export default function AdminUploadsPage() {
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [sections, setSections] = useState<string[]>([]);
  const [error, setError] = useState("");
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const fetchUploads = async () => {
    try {
      const res = await fetch(`${API_BASE}/adminUploads/getUploads.php`);
      if (!res.ok) throw new Error("Failed to fetch uploads");
      const data = await res.json();
      setUploads(data.files || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch uploads.");
    }
  };

  const fetchSections = async () => {
    try {
      const res = await fetch(`${API_BASE}/adminUploads/listSections.php`);
      if (!res.ok) throw new Error("Failed to fetch sections");
      const data = await res.json();
      setSections(data.sections || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch sections.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this document?")) return;
    try {
      const res = await fetch(`${API_BASE}/adminUploads/deleteUpload.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to delete document");
      fetchUploads();
      fetchSections();
    } catch (err: any) {
      setError(err.message || "Failed to delete document.");
    }
  };

  useEffect(() => {
    fetchUploads();
    fetchSections();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      <div className="max-w-6xl mx-auto py-20 px-6 space-y-16">

        {/* Upload form section */}
        <div>
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h1 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-10">
            Upload Document
          </h1>
          <UploadForm
            API_BASE={API_BASE}
            sections={sections}
            onUpload={fetchUploads}
          />
        </div>

        {/* Uploaded list section */}
        <div>
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-10">
            Uploaded Documents
          </h2>
          {error && (
            <p className="text-xs text-red-500 font-light tracking-wide border border-red-200 bg-red-50 px-4 py-2 mb-6">
              {error}
            </p>
          )}
          <UploadList uploads={uploads} onDelete={handleDelete} />
        </div>

      </div>
    </div>
  );
}