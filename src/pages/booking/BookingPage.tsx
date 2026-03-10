import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Safari } from "../Destinations/kenya/Safaris/types/safari";
import { getNames } from "country-list";
import ContactStep from "./steps/ContactStep";
import TravelStep from "./steps/TravelStep";
import PreferencesStep from "./steps/PreferencesStep";
import ReviewStep from "./steps/ReviewStep";
import Layout from "../../components/Layout";

export default function BookingPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const safari = state?.safari as Safari | undefined;
    const countryOptions = getNames().map((country : string) => ({
    value: country,
    label: country,
    }));
    if (!safari) {
        return <div className="p-10">No safari selected</div>;
    }

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",

        nationality: "",
        state: "",

        adults: 2,
        hasChildren: false,
        children: 0,

        arrivalDate: "",
        departureDate: "",

        accommodation: "",
        transport: "",

        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
        ) => {
        const { name, value, type } = e.target;

        const newValue =
            type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : type === "number"
            ? Number(value)
            : value;
        if (name === "hasChildren" && !newValue) {
          setForm((prev) => ({
            ...prev,
            hasChildren: false,
            children: 0,
          }));
          return;
        }

        setForm((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
        safariId: safari.id,
        safariTitle: safari.title,
        safariImages: safari.images?.map(img => img.src) || [], // only URLs
        ...form,
    };

    try {
        const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/booking/store.php`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
        );

        const data = await res.json();
        console.log("Saved:", data);

        // Optional: trigger email endpoint
        await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/email/booking.php`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
        );

        alert("Booking request sent!");
    } catch (err) {
        console.error(err);
        alert("Failed to send booking");
    }
    };
  const validateStep = () => {
    if (step === 1) {
      return form.fullName && form.email && form.phone && form.nationality;
    }

    if (step === 2) {
      return form.arrivalDate && form.departureDate && form.adults > 0;
    }

    if (step === 3) {
      return form.accommodation && form.transport;
    }

    return true;
  };
  return (
    <Layout>
    <div className="min-h-screen px-6 py-12 mt-10 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm underline"
      >
        ← Back
      </button>

      {/* SAFARI INFO */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">{safari.title}</h1>
        <p className="text-gray-500">Code: {safari.id}</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6 text-sm text-gray-500">
        Step {step} of 4
      </div>

      <div className="w-full bg-gray-200 h-2 rounded mb-6">
        <div
          className="bg-black h-2 rounded"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>
        {step === 1 && (
          <ContactStep
            form={form}
            setForm={setForm}
            handleChange={handleChange}
            countryOptions={countryOptions}
          />
        )}

        {step === 2 && (
          <TravelStep form={form} handleChange={handleChange} />
        )}

        {step === 3 && (
          <PreferencesStep form={form} handleChange={handleChange} />
        )}

        {step === 4 && (
          <ReviewStep form={form} safari={safari} />
        )}

        {/* NAVIGATION */}
        <div className="flex justify-between">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => {
                if (!validateStep()) {
                  alert("Please fill all required fields");
                  return;
                }
                setStep(step + 1);
              }}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="bg-black text-white px-6 py-2 rounded">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
    </Layout>
  );
}

