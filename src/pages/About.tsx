import { Globe, Map, Users } from "lucide-react";
import Layout from "../components/Layout";
import Hero from "../components/about/Hero";
export default function AboutPage() {
  const team = [
    {
      name: "Sharon Maina",
      role: "Sales & Marketing Manager",
      image: "/images/team1.jpeg"
    },
    {
      name: "Jackson Miano",
      role: "Regional Director East Africa",
      image: "/images/team2.jpeg"
    },
    {
      name: "Alex Murimi",
      role: "Operations Manager",
      image: "/images/team3.jpeg"
    },
    {
      name: "Cris Maina",
      role: "Travel Consultant",
      image: "/images/team4.jpeg"
    }
  ];

  return (
    <Layout showHero={true} HeroComponent={<Hero />}>
    <main className="bg-white text-gray-800">
      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="mb-16">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-8">
            About Us
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed font-light">
            <p>
              Alemans Adventures Ltd was established on the 10th October 2000 as a
              limited Holiday Destinations Management Company headquartered in
              Nairobi, Kenya. We offer Kenya and East Africa's best Wildlife, Game
              Parks and Reserves, dazzling white sandy beaches, towering
              mountains, archaeological and cultural sites, water adventures, hot
              air balloon safaris, and more.
            </p>
            <p>
              We specialize in personalized, tailor-made safaris to meet your
              needs — from luxury lodge tours and adventure camping to hiking,
              biking, and cultural expeditions across East Africa. Our goal is to
              make every journey memorable, comfortable, and authentic.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          <div className="bg-white p-8 hover:bg-[#FAFAF8] transition-colors duration-300">
            <Globe className="w-8 h-8 text-[#F5D547] mb-4" strokeWidth={1.5} />
            <h3 className="font-medium text-base mb-3 text-[#1A0A0B] uppercase tracking-wider">
              East Africa Experts
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Discover Kenya, Tanzania, Uganda, Rwanda, and Zanzibar with local
              guides who know every hidden gem.
            </p>
          </div>

          <div className="bg-white p-8 hover:bg-[#FAFAF8] transition-colors duration-300">
            <Map className="w-8 h-8 text-[#F5D547] mb-4" strokeWidth={1.5} />
            <h3 className="font-medium text-base mb-3 text-[#1A0A0B] uppercase tracking-wider">
              Tailored Experiences
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              We design safaris and treks based on your interests, comfort, and
              adventure level — from serene to extreme.
            </p>
          </div>

          <div className="bg-white p-8 hover:bg-[#FAFAF8] transition-colors duration-300">
            <Users className="w-8 h-8 text-[#F5D547] mb-4" strokeWidth={1.5} />
            <h3 className="font-medium text-base mb-3 text-[#1A0A0B] uppercase tracking-wider">
              Professional Team
            </h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Our dedicated staff, from guides to cooks, ensure your journey is
              safe, comfortable, and truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#FAFAF8] border-t border-b border-gray-200 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-8">
            Why Choose Us
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed font-light">
            <p>
              With over two decades of expertise, Alemans Adventures is a trusted
              Destination Management Company specializing in tailor-made adventure
              and holiday experiences. We partner with top hotels, lodges, and
              clubs across East Africa to ensure your comfort.
            </p>
            <p>
              Our highly trained customer care team includes multilingual guides
              (English and German), drivers, mountain guides, cooks, and meet-and-greet
              representatives in major airports and towns. We also partner with
              Flying Doctors Rescue Services and Tropic Air for emergency missions.
            </p>
            <p>
              We take pride in our commitment to environmental conservation and
              sustainable tourism — ensuring Africa's beauty endures for
              generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {team.map((member, index) => (
            <div key={index} className="bg-white group overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 bg-white group-hover:bg-[#FAFAF8] transition-colors duration-300">
                <h3 className="font-medium text-base uppercase tracking-wider text-[#1A0A0B] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-light tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    </Layout>
  );
}