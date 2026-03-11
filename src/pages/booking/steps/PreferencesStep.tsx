import FormSelect from "../components/FormSelect";

export default function PreferencesStep({ form, handleChange }: any) {
  return (
    <div className="space-y-6">
      <FormSelect
        label="Accommodation Preference"
        name="accommodation"
        value={form.accommodation}
        onChange={handleChange}
        options={["Budget", "Mid-range", "Luxury"]}
      />

      <FormSelect
        label="Transport Preference"
        name="transport"
        value={form.transport}
        onChange={handleChange}
        options={["4x4 Land Cruiser", "Safari Van"]}
      />

      <div>
        <label className="block text-sm mb-1">Special Requests</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded p-3"
          rows={4}
        />
      </div>
    </div>
  );
}