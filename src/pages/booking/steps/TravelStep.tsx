import Input from "../components/Input";

export default function TravelStep({ form, handleChange }: any) {
  return (
    <div className="space-y-6">
      <Input label="Number of Adults" name="adults" type="number" value={form.adults} onChange={handleChange} />

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="hasChildren"
          checked={form.hasChildren}
          onChange={handleChange}
        />
        <label>Traveling with children?</label>
      </div>

      {form.hasChildren && (
        <Input
          label="Number of Children"
          name="children"
          type="number"
          value={form.children}
          onChange={handleChange}
        />
      )}

      <Input label="Arrival Date" name="arrivalDate" type="date" value={form.arrivalDate} onChange={handleChange} />
      <Input label="Departure Date" name="departureDate" type="date" value={form.departureDate} onChange={handleChange} />
    </div>
  );
}