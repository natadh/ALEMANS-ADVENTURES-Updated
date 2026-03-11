import { useEffect, useState } from "react";

interface Subcategory {
  id: number;
  title: string;
  category_id: number;
  country_id: number;
}

interface Category {
  id: number;
  title: string;
}

interface Props {
  countryId: number | null;
}

export default function SubcategoriesEditor({ countryId }: Props) {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<{ id?: number; title: string; category_id: number }>({ title: "", category_id: 0 });
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  /** Fetch categories for dropdown */
  const fetchCategories = async () => {
    if (!countryId) return;
    try {
      const res = await fetch(`${API_BASE}/safaris/getCategories.php?country_id=${countryId}`);
      const data = await res.json();
      setCategories(data.data || []);
    } catch {
      setError("Failed to load categories");
    }
  };

  /** Fetch subcategories */
  const fetchSubcategories = async () => {
    if (!countryId) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/safaris/getSubcategories.php?country_id=${countryId}`);
      const data = await res.json();
      setSubcategories(data.data || []);
    } catch {
      setError("Failed to load subcategories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
  }, [countryId]);

  /** Handle form submit (create or update) */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = formData.id ? "update_subcategory.php" : "create_subcategory.php";

    const form = new FormData();
    form.append("title", formData.title);
    form.append("category_id", formData.category_id.toString());
    if (formData.id) form.append("id", formData.id.toString());

    try {
      const res = await fetch(`${API_BASE}/safaris/subcategories/${endpoint}`, {
        method: "POST",
        body: form
      });
      const data = await res.json();
      if (data.success) {
        setShowModal(false);
        setFormData({ title: "", category_id: 0 });
        fetchSubcategories();
      } else {
        setError(data.message || "Failed to save subcategory");
      }
    } catch {
      setError("Failed to save subcategory");
    }
  };

  /** Handle delete */
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this subcategory?")) return;
    const form = new FormData();
    form.append("id", id.toString());

    try {
      const res = await fetch(`${API_BASE}/safaris/subcategories/delete_subcategory.php`, {
        method: "POST",
        body: form
      });
      const data = await res.json();
      if (data.success) {
        fetchSubcategories();
      } else {
        setError(data.message || "Failed to delete subcategory");
      }
    } catch {
      setError("Failed to delete subcategory");
    }
  };

  /** Open modal for edit */
  const openEditModal = (subcategory: Subcategory) => {
    setFormData({ id: subcategory.id, title: subcategory.title, category_id: subcategory.category_id });
    setShowModal(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold uppercase tracking-[0.05em] text-[#1A0A0B]">Subcategories</h2>
        <button
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => {
            setFormData({ title: "", category_id: categories[0]?.id || 0 });
            setShowModal(true);
          }}
        >
          + Add Subcategory
        </button>
      </div>

      {loading && <p>Loading subcategories...</p>}
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
                Category
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {subcategories.map((sub, idx) => (
              <tr key={sub.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 text-sm text-gray-800">{sub.title}</td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {categories.find((c) => c.id === sub.category_id)?.title || "-"}
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap gap-2 md:flex-nowrap">
                    <button
                      className="px-3 py-1 text-xs uppercase tracking-wide bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                      onClick={() => openEditModal(sub)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 text-xs uppercase tracking-wide bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      onClick={() => handleDelete(sub.id)}
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
            
            {/* Sticky Modal Header */}
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-lg font-medium">{formData.id ? "Edit" : "Add"} Subcategory</h3>
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

                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Category</label>
                  <select
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F5D547]"
                    value={formData.category_id}
                    onChange={(e) =>
                      setFormData({ ...formData, category_id: Number(e.target.value) })
                    }
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
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