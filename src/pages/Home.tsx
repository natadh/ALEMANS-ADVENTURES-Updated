import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ScrollToTopFAB from "../components/ScrollToTopFAB";

export default function Home() {
  return (
    <Layout showHero={true} HeroComponent={<Hero />}>
      {/* Welcome Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <div className="w-12 h-px bg-[#F5D547] mx-auto mb-6"></div>
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-6">
          Welcome to Alemans Adventures
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 font-light leading-relaxed">
          Discover breathtaking safaris and unforgettable journeys across East Africa.
        </p>
      </section>

      {/* Featured Image Section */}
      <section className="mb-20">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&h=900&fit=crop"
            alt="East Africa Safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A0A0B] opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="/destinations"
              className="px-12 py-4 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547] hover:border-[#E8C93A]"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#FAFAF8] border-t border-b border-gray-200 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-8">
            Why Choose Us
          </h2>
          <div className="space-y-6 text-gray-700 font-light leading-relaxed">
            <p>
              After many years of expertise as an established Destination Management Company offering Adventure 
              and Holiday products in personalized and tailored itineraries — including incentives, special groups, 
              and programs — our safari transport is unmatched, ranging from Safari Land Cruisers and open 4x4s to 
              minibuses and coaches.
            </p>
            <p>
              We partner with the best hotels, lodges, and clubs across East Africa for comfortable and relaxing 
              accommodations. Our highly trained customer care department — including office sales representatives, 
              drivers, mountain guides, cooks, porters, and meet-and-greet staff at major airports, hotels, and towns — 
              ensures a seamless travel experience. We proudly offer foreign-language-speaking head guides, including 
              German and English-speaking driver and mountain guides.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          <div className="relative h-[300px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1535338454770-93e7ab994d98?w=800&h=600&fit=crop"
              alt="Wildlife Safari"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-[#1A0A0B] opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
              <p className="text-white uppercase tracking-wider text-sm font-medium">Wildlife Encounters</p>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=600&fit=crop"
              alt="Mountain Trekking"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-[#1A0A0B] opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
              <p className="text-white uppercase tracking-wider text-sm font-medium">Mountain Adventures</p>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
              alt="Cultural Experiences"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-[#1A0A0B] opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
              <p className="text-white uppercase tracking-wider text-sm font-medium">Cultural Journeys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Information Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-6">
            Traveler Information
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-12 uppercase tracking-wider font-medium">
            Kenya / Tanzania / Uganda / Rwanda / Zanzibar
          </p>

          <div className="space-y-12">
            {/* Section 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
                <h3 className="text-xl font-medium uppercase tracking-wider text-[#1A0A0B] mb-4">
                  Wildlife and Birds
                </h3>
                <div className="space-y-4 text-gray-700 font-light leading-relaxed text-sm">
                  <p>
                    The bizarre rock and coral formations under the waters are protected habitats for countless rare sea 
                    creatures and a fascinating variety of exotic fish. On land, visitors to the world-famous national parks 
                    and game reserves will see wild animals almost at arm's length — the Big Five (Elephant, Lion, Buffalo, 
                    Rhinoceros, and Leopard) as well as huge herds of zebra and wildebeest migrating yearly between the Serengeti 
                    in Tanzania and the Mara in Kenya.
                  </p>
                  <p>
                    Bird watchers can enjoy nearly a thousand species, from birds of prey to rainbow-colored songbirds, 
                    including over a million flamingos. This is the last paradise for animals and one of the most 
                    comprehensive ecosystems in the world.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&h=600&fit=crop"
                  alt="Wildlife in East Africa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2">
                <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
                <h3 className="text-xl font-medium uppercase tracking-wider text-[#1A0A0B] mb-4">
                  The Vegetation
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  Kenya's vegetation ranges from inhospitable desert and semi-desert through savannah to tropical rainforests. 
                  Fertile lands support large plantations of tea, coffee, flowers, and exotic fruits. Cities and towns boast 
                  colorful parks and gardens — a true delight to the eye.
                </p>
              </div>
              <div className="relative h-[300px] border border-gray-200 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop"
                  alt="Vegetation in East Africa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
                <h3 className="text-xl font-medium uppercase tracking-wider text-[#1A0A0B] mb-4">
                  Culture and Traditions
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  The African people come from many races, practice various religions, and belong to different tribes. 
                  Many still live as they did over a hundred years ago, maintaining their traditional culture and harmony 
                  with nature.
                </p>
              </div>
              <div className="relative h-[300px] border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1566375068224-459f1caf3aba?w=800&h=600&fit=crop"
                  alt="African Culture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2">
                <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
                <h3 className="text-xl font-medium uppercase tracking-wider text-[#1A0A0B] mb-4">
                  Land Formation and Topography
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm">
                  East Africa offers an incredible variety of geographical wonders — endless plains, the gigantic Rift Valley, 
                  snow-capped mountains, rolling hills, volcanic craters, hot springs, geysers, meandering rivers, waterfalls, 
                  lakes, and the Indian Ocean with its coral reefs and white sandy beaches.
                </p>
              </div>
              <div className="relative h-[300px] border border-gray-200 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&h=600&fit=crop"
                  alt="East Africa Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Section 5 */}
            <div className="border-t border-gray-200 pt-12">
              <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
              <h3 className="text-xl font-medium uppercase tracking-wider text-[#1A0A0B] mb-4">
                Accommodation, Transport, and Sports
              </h3>
              <div className="space-y-4 text-gray-700 font-light leading-relaxed text-sm">
                <p>
                  Transport by air, rail, and road is well developed and continually improving. Hotels provide warm hospitality, 
                  excellent service, and a range of cuisines. Fresh fish and exotic fruits are especially recommended. 
                  Sports and recreation options include tennis, surfing, snorkeling, diving, water-skiing, riding, and golf.
                </p>
                <p className="italic">
                  Whoever travels in East Africa will be captivated by its beauty — a symphony of people, scenery, flora, and fauna 
                  that will forever live in your memories. 
                </p>
                <p className="text-[#1A0A0B] font-medium uppercase tracking-wider pt-4 border-t border-gray-200">
                  Our Motto: "Take nothing but memories, leave nothing but footprints."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#1A0A0B] py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-[#F5D547] mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-gray-400 font-light mb-10 leading-relaxed">
            Discover your perfect East African adventure
          </p>
          <a
            href="/destinations"
            className="inline-block px-12 py-4 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547] hover:border-[#E8C93A]"
          >
            View All Destinations
          </a>
        </div>
      </section>
      <ScrollToTopFAB />
    </Layout>
  );
}