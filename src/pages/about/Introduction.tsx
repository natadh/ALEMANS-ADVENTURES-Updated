import { Globe, Map, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#fdfaf7] text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#340608] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#E4C73F]">
            About Alemans Adventures
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Explore East Africa’s breathtaking safaris, mountain treks, and
            unforgettable cultural journeys with a trusted local expert since
            2000.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#340608] mb-4">
            Introduction — About Us
          </h2>
          <p className="leading-relaxed text-gray-700">
            Alemans Adventures Ltd was established on the 10th October 2000 as a
            limited Holiday Destinations Management Company headquartered in
            Nairobi, Kenya. We offer Kenya and East Africa’s best Wildlife, Game
            Parks and Reserves, dazzling white sandy beaches, towering
            mountains, archaeological and cultural sites, water adventures, hot
            air balloon safaris, and more.
          </p>
          <p className="leading-relaxed text-gray-700 mt-4">
            We specialize in personalized, tailor-made safaris to meet your
            needs — from luxury lodge tours and adventure camping to hiking,
            biking, and cultural expeditions across East Africa. Our goal is to
            make every journey memorable, comfortable, and authentic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <Globe className="w-10 h-10 text-[#E4C73F] mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-[#340608]">
              East Africa Experts
            </h3>
            <p className="text-gray-600">
              Discover Kenya, Tanzania, Uganda, Rwanda, and Zanzibar with local
              guides who know every hidden gem.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <Map className="w-10 h-10 text-[#E4C73F] mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-[#340608]">
              Tailored Experiences
            </h3>
            <p className="text-gray-600">
              We design safaris and treks based on your interests, comfort, and
              adventure level — from serene to extreme.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <Users className="w-10 h-10 text-[#E4C73F] mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-[#340608]">
              Professional Team
            </h3>
            <p className="text-gray-600">
              Our dedicated staff, from guides to cooks, ensure your journey is
              safe, comfortable, and truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f9f5ef] border-t border-gray-200 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#340608] mb-4">
            Why Choose Us?
          </h2>

          <p className="leading-relaxed text-gray-700">
            With over two decades of expertise, Alemans Adventures is a trusted
            Destination Management Company specializing in tailor-made adventure
            and holiday experiences. We partner with top hotels, lodges, and
            clubs across East Africa to ensure your comfort.
          </p>
          <p className="leading-relaxed text-gray-700">
            Our highly trained customer care team includes multilingual guides
            (English and German), drivers, mountain guides, cooks, and meet-and-greet
            representatives in major airports and towns. We also partner with
            Flying Doctors Rescue Services and Tropic Air for emergency missions.
          </p>
          <p className="leading-relaxed text-gray-700">
            We take pride in our commitment to environmental conservation and
            sustainable tourism — ensuring Africa’s beauty endures for
            generations to come.
          </p>
        </div>
      </section>
    </main>
  );
}
