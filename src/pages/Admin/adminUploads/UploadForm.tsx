import { useState, useRef } from "react";
import type { FormEvent } from "react";

interface UploadFormProps {
  API_BASE: string;
  onUpload: () => void;
  sections: string[];
}

export default function UploadForm({ API_BASE, onUpload, sections }: UploadFormProps) {
  const [selectedSection, setSelectedSection] = useState("");
  const [newSection, setNewSection] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [footerName, setFooterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    const finalSection = selectedSection === "NEW" ? newSection : selectedSection;

    if (!file || !title || !footerName || !finalSection) {
      setError("File, title, footer name, and section are required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("document", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("footerName", footerName);
    formData.append("section", finalSection);

    try {
      const res = await fetch(`${API_BASE}/adminUploads/upload.php`, {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (!res.ok) throw new Error(data.message || "Upload failed");

      setFile(null);
      setTitle("");
      setDescription("");
      setFooterName("");
      setSelectedSection("");
      setNewSection("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSuccess(true);
      onUpload();
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-200 bg-[#FAFAF8] px-4 py-2.5 text-sm font-light text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A0A0B] transition-colors duration-200";

  const labelClass =
    "block text-xs uppercase tracking-[0.15em] font-medium text-[#1A0A0B] mb-2";

  return (
    <div className="px-4 sm:px-6 md:px-0">
    <form onSubmit={handleUpload} className="space-y-6 ">

      {/* Two-column row on md+: Title + Footer Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Document Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className={labelClass}>Footer Display Name *</label>
          <input
            type="text"
            value={footerName}
            onChange={(e) => setFooterName(e.target.value)}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* Description — full width */}
      <div>
        <label className={labelClass}>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Two-column row on md+: Section + File */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Section *</label>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className={inputClass}
            required
          >
            <option value="">Select Section</option>
            {sections.map((sec) => (
              <option key={sec} value={sec}>{sec}</option>
            ))}
            <option value="NEW">+ Create New Section</option>
          </select>

          {selectedSection === "NEW" && (
            <input
              type="text"
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              placeholder="Enter new section name"
              className={`${inputClass} mt-2`}
              required
            />
          )}
        </div>

        <div>
          <label className={labelClass}>Select Document *</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className={`${inputClass} file:mr-4 file:border-0 file:bg-transparent file:text-xs file:uppercase file:tracking-widest file:font-medium file:text-[#1A0A0B] file:cursor-pointer cursor-pointer`}
            required
          />
          {file && (
            <p className="mt-2 text-xs text-gray-500 font-light tracking-wide truncate">
              Selected: {file.name}
            </p>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500 font-light tracking-wide border border-red-200 bg-red-50 px-4 py-2">
          {error}
        </p>
      )}

      {/* Success */}
      {success && (
        <p className="text-xs text-green-600 font-light tracking-wide border border-green-200 bg-green-50 px-4 py-2">
          Document uploaded successfully.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-fit border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-8 py-3 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "Uploading..." : "Upload Document"}
      </button>

    </form>
    </div>
  );
}