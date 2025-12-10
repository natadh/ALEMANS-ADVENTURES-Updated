export default function CountrySelector({
  countries,
  currentCountry,
  onChange,
}: {
  countries: string[];
  currentCountry: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-xs uppercase tracking-widest text-[#F5D547]/60 font-medium">
        Country:
      </label>

      <select
        className="bg-[#0F0809] border border-[#F5D547]/40 text-[#F5D547] text-sm px-4 py-2 rounded-md focus:outline-none focus:border-[#F5D547] hover:border-[#F5D547] transition cursor-pointer"
        value={currentCountry}
        onChange={(e) => onChange(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country} value={country} className="bg-[#0F0809]">
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
