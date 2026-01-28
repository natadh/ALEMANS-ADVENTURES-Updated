export default function SafariInclusions({ 
  includes, 
  excludes 
}: { 
  includes?: string[], 
  excludes?: string[] 
}) {
  if (!includes && !excludes) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-6 text-sm">
      {includes && (
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Included</h4>
          <ul className="space-y-2">
            {includes.slice(0, 5).map((inc, i) => (
              <li key={i} className="flex items-start text-gray-600">
                <span className="text-green-500 mr-2">✓</span> {inc}
              </li>
            ))}
          </ul>
        </div>
      )}
      {excludes && (
        <div>
          <h4 className="font-semibold mb-3">Excluded</h4>
          <ul className="space-y-2">
            {excludes.slice(0, 5).map((exc, i) => (
              <li key={i} className="flex items-start text-gray-600">
                <span className="text-red-400 mr-2">✕</span> {exc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}