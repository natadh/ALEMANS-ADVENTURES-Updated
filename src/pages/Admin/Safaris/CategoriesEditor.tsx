import { useEffect, useState } from "react";

interface Category {
  id: number;
  title: string;
  country_id: number;
}

interface Props {
  countryId: number | null;
}

export default function CategoriesEditor({ countryId }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<{ id?: number; title: string }>({ title: "" });
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  /** Fetch categories */
  const fetchCategories = async () => {
    if (!countryId) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/safaris/getCategories.php?country_id=${countryId}`);
      const data = await res.json();
      setCategories(data.data || []);
    } catch {
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [countryId]);

  /** Handle create/update */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !countryId) return;

    const endpoint = formData.id ? "update_category.php" : "create_category.php";

    const form = new FormData();
    form.append("title", formData.title);
    form.append("country_id", countryId.toString());
    if (formData.id) form.append("id", formData.id.toString());

    try {
      const res = await fetch(`${API_BASE}/safaris/categories/${endpoint}`, {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (data.success) {
        setShowModal(false);
        setFormData({ title: "" });
        fetchCategories();
      } else {
        setError(data.message || "Failed to save category");
      }
    } catch {
      setError("Failed to save category");
    }
  };

  /** Handle delete */
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    const form = new FormData();
    form.append("id", id.toString());

    try {
      const res = await fetch(`${API_BASE}/safaris/categories/delete_category.php`, {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (data.success) {
        fetchCategories();
      } else {
        setError(data.message || "Failed to delete category");
      }
    } catch {
      setError("Failed to delete category");
    }
  };

  /** Open modal for edit */
  const openEditModal = (category: Category) => {
    setFormData({ id: category.id, title: category.title });
    setShowModal(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold uppercase tracking-[0.05em] text-[#1A0A0B]">Categories</h2>
          <button
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            onClick={() => {
              setFormData({ title: "" });
              setShowModal(true);
            }}
          >
            + Add Category
          </button>
      </div>

      {loading && <p>Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Scrollable table */}
      <div className="border rounded shadow-sm bg-white overflow-x-auto max-h-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((cat, idx) => (
              <tr key={cat.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 text-sm text-gray-800">{cat.title} (ID: {cat.id})</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2 md:flex-nowrap">
                    <button
                      className="px-3 py-1 text-xs uppercase tracking-wide bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      onClick={() => openEditModal(cat)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-xs uppercase tracking-wide bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      onClick={() => handleDelete(cat.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-start md:items-center p-4 backdrop-blur-sm bg-black/30 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden">
            
            {/* Sticky Header */}
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-lg font-medium">{formData.id ? "Edit" : "Add"} Category</h3>
              <button
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>

            {/* Scrollable Form */}
            <div className="p-4 overflow-y-auto flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}