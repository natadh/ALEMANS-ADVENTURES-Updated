import Layout from "../../components/Layout";
import JournalCard from "../../components/journals/JournalCard";
import { MOCK_JOURNALS } from "../../data/mockJournals";

// This is the LISTING page — /journals
// It shows all journals as cards in a grid.
// Clicking a card navigates to /journals/:id (the detail page).
//
// NOTE: Right now data comes from MOCK_JOURNALS (the fake data file).
// When the backend is ready, replace MOCK_JOURNALS with:
//
//   const [journals, setJournals] = useState([]);
//   useEffect(() => {
//     fetch("https://your-api.com/journals")
//       .then(res => res.json())
//       .then(data => setJournals(data));
//   }, []);
//
// The rest of the component stays the same

export default function JournalsPage() {
  const journals = MOCK_JOURNALS;

  return (
    <Layout>
      {/* Page Banner — dark header consistent with rest of site */}
      <section className="relative bg-[#1A0A0B] pt-32 pb-16 px-6 border-b border-[#F5D547]/20">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-px bg-[#F5D547] mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.15em] text-white mb-4">
            Field Journals
          </h1>
          <p className="text-gray-400 font-light max-w-xl leading-relaxed">
            Stories from the field — written by our guides and travellers who 
            have walked, tracked, and explored across East Africa.
          </p>
        </div>
      </section>

      {/* Featured Journal — first entry gets a big hero treatment */}
      {journals.length > 0 && (
        <section className="max-w-7xl mx-auto py-16 px-6">
          <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">Featured Story</p>

          <a
            href={`/journals/${journals[0].id}`}
            className="group block relative overflow-hidden border border-gray-200 hover:border-[#F5D547]/50 transition-colors duration-300"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={journals[0].imageUrl}
                  alt={journals[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1A0A0B] opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs uppercase tracking-widest bg-[#F5D547] text-[#1A0A0B] px-3 py-1 font-medium">
                    {journals[0].destination}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-10 bg-[#FAFAF8] flex flex-col justify-center">
                <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
                <h2 className="text-2xl md:text-3xl font-light uppercase tracking-[0.1em] text-[#1A0A0B] mb-4 leading-snug">
                  {journals[0].title}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed text-sm mb-6">
                  {journals[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 uppercase tracking-wider mb-6">
                  <span>{journals[0].date}</span>
                  <span>·</span>
                  <span>{journals[0].readTime}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#1A0A0B] border-b border-[#F5D547] pb-0.5 inline-block w-fit group-hover:text-[#1A0A0B]/60 transition-colors">
                  Read Full Story →
                </span>
              </div>
            </div>
          </a>
        </section>
      )}

      {/* Rest of journals in a 3-column grid */}
      {journals.length > 1 && (
        <section className="max-w-7xl mx-auto pb-20 px-6">
          <div className="border-t border-gray-200 pt-12">
            <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
            <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-10">
              More Stories
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {journals.slice(1).map((journal) => (
                <JournalCard key={journal.id} journal={journal} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#1A0A0B] py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-[#F5D547] mx-auto mb-8"></div>
          <h2 className="text-3xl font-light uppercase tracking-[0.15em] text-white mb-4">
            Write Your Own Story
          </h2>
          <p className="text-gray-400 font-light mb-8">
            Every journey with Alemans becomes a memory worth sharing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/destinations"
              className="inline-block px-10 py-3 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547]"
            >
              Explore Destinations
            </a>
            <a
              href="/reviews"
              className="inline-block px-10 py-3 bg-transparent text-[#F5D547] font-medium uppercase tracking-widest hover:bg-[#F5D547]/10 transition-all duration-300 text-sm border-2 border-[#F5D547]"
            >
              Read Reviews
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
