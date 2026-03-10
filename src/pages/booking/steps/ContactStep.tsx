import Input from "../components/Input";
import Select from "react-select";

export default function ContactStep({ form, setForm, handleChange, countryOptions }: any) {
  return (
    <div className="space-y-6">
      <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required />
      <Input label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Input label="Phone Number (WhatsApp preferred)" name="phone" value={form.phone} onChange={handleChange} required />

      <div>
        <label className="block text-sm mb-1">Nationality</label>
        <Select
          options={countryOptions}
          value={countryOptions.find((c: any) => c.value === form.nationality)}
          onChange={(selected) =>
            setForm((prev: any) => ({
              ...prev,
              nationality: selected?.value || "",
            }))
          }
        />
      </div>

      {form.nationality === "United States" && (
        <Input
          label="State (USA)"
          name="state"
          value={form.state}
          onChange={handleChange}
        />
      )}
    </div>
  );
}