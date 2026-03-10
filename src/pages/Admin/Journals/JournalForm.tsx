import { useState } from "react";

interface Props {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function JournalForm({ onSuccess, onCancel }: Props) {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("Aleman's Team");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full border border-gray-200 bg-[#FAFAF8] px-4 py-2.5 text-sm font-light text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A0A0B] transition-colors duration-200";

  const labelClass =
    "block text-xs uppercase tracking-[0.15em] font-medium text-[#1A0A0B] mb-2";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("destination", destination);
    formData.append("date", date);
    formData.append("author", author);

    if (image) {
      formData.append("image", image);
    } else if (imageUrl) {
      formData.append("imageUrl", imageUrl);
    }

    try {
      const res = await fetch(`${API_BASE}/journals/createJournal.php`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Create failed");

      setTitle("");
      setContent("");
      setDestination("");
      setDate("");
      setAuthor("Aleman's Team");
      setImageUrl("");
      setImage(null);

      onSuccess();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="max-h-[90vh] overflow-y-auto bg-[#FAFAF8] ">
    <div className="min-h-full flex items-start justify-center  ">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-8xl bg-white  px-8 md:px-12 py-10 space-y-8 shadow-sm"
      >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Title */}
        <div>
          <label className={labelClass}>Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
            required
          />
        </div>

        {/* Destination */}
        <div>
          <label className={labelClass}>Destination *</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="e.g. Kenya"
            className={inputClass}
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className={labelClass}>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Author */}
        <div>
          <label className={labelClass}>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className={labelClass}>Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className={inputClass}
          />
        </div>

        {/* Upload Image */}
        <div>
          <label className={labelClass}>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
            className={`${inputClass} file:mr-4 file:border-0 file:bg-transparent file:text-xs file:uppercase file:tracking-widest file:font-medium file:text-[#1A0A0B] file:cursor-pointer cursor-pointer`}
          />
        </div>

        {/* Content (Full Width) */}
        <div className="md:col-span-2">
          <label className={labelClass}>Content *</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={`${inputClass} h-40 resize-none`}
            required
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500 font-light tracking-wide border border-red-200 bg-red-50 px-4 py-2">
          {error}
        </p>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-200 text-gray-500 text-xs uppercase tracking-[0.2em] px-6 py-2.5 font-light hover:border-[#1A0A0B] hover:text-[#1A0A0B] transition-colors duration-300"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-6 py-2.5 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Saving..." : "Save Entry"}
        </button>
      </div>
    </form>
    </div>      
    </div>
  );
}