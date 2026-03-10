import type { Safari, Subcategory } from "./useSafaris";

interface Props {
  safaris: Safari[];
  subcategories: Subcategory[];
  onEdit: (safari: Safari) => void;
  onDelete: (id: string) => void;
  onManageItinerary: (safari: Safari) => void;
  onManageExtra: (safari: Safari) => void;
}

export default function SafarisTable({
  safaris,
  subcategories,
  onEdit,
  onDelete,
  onManageItinerary,
  onManageExtra,
}: Props) {
  return (
  <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
    {/* Fixed height container with scroll */}
    <div className="max-h-150 overflow-y-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Subcategory
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {safaris.map((s, idx) => (
            <tr key={s.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 text-sm text-gray-800">{s.title}</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                {subcategories.find((sc) => sc.id === s.subcategory_id)?.title || "-"}
              </td>
              <td className="px-4 py-2">
                <div className="flex flex-wrap gap-2 md:flex-nowrap">
                  <button
                    className="px-3 py-1 text-xs uppercase tracking-wide bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={() => onEdit(s)}
                  >
                    Edit
                  </button>

                  <button
                    className="px-3 py-1 text-xs uppercase tracking-wide bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                    onClick={() => onManageItinerary(s)}
                  >
                    Itinerary
                  </button>

                  <button
                    className="px-3 py-1 text-xs uppercase tracking-wide bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    onClick={() => onManageExtra(s)}
                  >
                    Extra
                  </button>

                  <button
                    className="px-3 py-1 text-xs uppercase tracking-wide bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    onClick={() => onDelete(s.id)}
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
  </div>
  );
}