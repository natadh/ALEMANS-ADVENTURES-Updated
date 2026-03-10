export default function ReviewStep({ form, safari }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Review Your Booking</h2>

      {/* Safari Info */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {safari.images?.[0]?.src && (
          <img
            src={safari.images[0].src}
            alt={safari.images[0].alt || safari.title}
            className="w-full md:w-48 rounded object-cover shadow-sm"
          />
        )}

        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-medium">{safari.title}</h3>
          <p className="text-gray-600">{safari.destination} • {safari.durationLabel}</p>
          {safari.highlights && (
            <ul className="list-disc list-inside text-sm text-gray-700">
              {safari.highlights.slice(0, 5).map((h: string, idx: number) => (
                <li key={idx}>{h}</li>
              ))}
              {safari.highlights.length > 5 && <li>…</li>}
            </ul>
          )}
        </div>
      </div>

      {/* Form Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Info */}
        <div className="bg-white p-4 rounded shadow-sm space-y-1">
          <h4 className="font-medium">Personal Info</h4>
          <p><strong>Full Name:</strong> {form.fullName}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
          <p><strong>Nationality:</strong> {form.nationality}</p>
          {form.nationality === "United States" && (
            <p><strong>State:</strong> {form.state}</p>
          )}
        </div>

        {/* Travelers Info */}
        <div className="bg-white p-4 rounded shadow-sm space-y-1">
          <h4 className="font-medium">Travelers</h4>
          <p><strong>Adults:</strong> {form.adults}</p>
          {form.hasChildren && <p><strong>Children:</strong> {form.children}</p>}
        </div>

        {/* Travel Dates */}
        <div className="bg-white p-4 rounded shadow-sm space-y-1">
          <h4 className="font-medium">Travel Dates</h4>
          <p><strong>Arrival:</strong> {form.arrivalDate}</p>
          <p><strong>Departure:</strong> {form.departureDate}</p>
        </div>

        {/* Preferences */}
        <div className="bg-white p-4 rounded shadow-sm space-y-1">
          <h4 className="font-medium">Preferences</h4>
          <p><strong>Accommodation:</strong> {form.accommodation}</p>
          <p><strong>Transport:</strong> {form.transport}</p>
        </div>

        {/* Special Requests */}
        {form.message && (
          <div className="bg-white p-4 rounded shadow-sm space-y-1 md:col-span-2">
            <h4 className="font-medium">Special Requests</h4>
            <p>{form.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}