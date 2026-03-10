export default function FormSelect({ label, options, ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <select {...props} className="w-full border rounded p-3">
        <option value="">Select...</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}