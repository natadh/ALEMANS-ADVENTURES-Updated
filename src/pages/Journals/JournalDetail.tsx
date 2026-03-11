import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

interface Journal {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  destination: string;
  date: string;
  imageUrl: string;
  author: string;
  readTime: string;
}

export default function JournalDetail() {
  const { id } = useParams<{ id: string }>();
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const [journal, setJournal] = useState<Journal | null>(null);
  const [relatedJournals, setRelatedJournals] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJournal = async () => {
      try {
        const res = await fetch(`${API_BASE}/journals/getJournals.php`);
        const data = await res.json();

        if (!data.success) throw new Error(data.message || "Failed to fetch journals");

        // Format journals and prepend API_BASE to local image paths
        const formatted: Journal[] = data.journals.map((j: Journal) => {
          let imgUrl = j.imageUrl;
          if (imgUrl.startsWith("/uploads/")) imgUrl = API_BASE + imgUrl;
          return { ...j, imageUrl: imgUrl };
        });

        const currentJournal = formatted.find((j) => j.id === Number(id));
        if (!currentJournal) {
          setError("Journal not found");
        } else {
          setJournal(currentJournal);
          setRelatedJournals(formatted.filter((j) => j.id !== currentJournal.id).slice(0, 3));
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchJournal();
  }, [API_BASE, id]);

  if (loading) return <Layout><p className="text-center py-20">Loading journal...</p></Layout>;
  if (error) return <Layout><p className="text-center py-20 text-red-500">{error}</p></Layout>;
  if (!journal) return null;

  const paragraphs = journal.content.split("\n\n").filter((p) => p.trim());

  return (
    <Layout>
      {/* Hero image */}
      <div className="relative h-[55vh] overflow-hidden">
        <img src={journal.imageUrl} alt={journal.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A0A0B] opacity-55 pointer-events-none"></div>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
          <div className="max-w-4xl">
            <div className="mb-3">
              <span className="text-xs uppercase tracking-widest bg-[#F5D547] text-[#1A0A0B] px-3 py-1 font-medium">
                {journal.destination}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-widest text-white mb-4 leading-tight">
              {journal.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-gray-300 uppercase tracking-wider">
              <span>{journal.author}</span>
              <span>·</span>
              <span>{journal.date}</span>
              <span>·</span>
              <span>{journal.readTime}</span>
            </div>
          </div>
        </div>

        {/* Back link */}
        <a
          href="/journals"
          className="absolute top-24 left-6 z-10 text-[#F5D547] text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
        >
          ← All Journals
        </a>
      </div>

      {/* Article content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <div className="w-12 h-px bg-[#F5D547] mb-10"></div>
        <div className="space-y-6 text-gray-700 font-light leading-relaxed">
          {paragraphs.map((para, idx) => (
            <p key={idx} className={idx === 0 ? "text-lg" : "text-base"}>{para}</p>
          ))}
        </div>

        {/* Author block */}
        <div className="mt-16 pt-10 border-t border-gray-200 flex items-center gap-4">
          <div className="w-10 h-10 bg-[#1A0A0B] text-[#F5D547] flex items-center justify-center text-sm font-medium uppercase shrink-0">
            A
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#1A0A0B]">{journal.author}</p>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Published {journal.date}</p>
          </div>
        </div>
      </article>

      {/* Related journals */}
      {relatedJournals.length > 0 && (
        <section className="bg-[#FAFAF8] border-t border-gray-200 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="w-8 h-px bg-[#F5D547] mb-4"></div>
            <h2 className="text-2xl font-light uppercase tracking-[0.15em] text-[#1A0A0B] mb-10">More Stories</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedJournals.map((related) => (
                <a
                  key={related.id}
                  href={`/journals/${related.id}`}
                  className="group block border border-gray-200 hover:border-[#F5D547]/50 transition-colors overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={related.imageUrl}
                      alt={related.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-[#1A0A0B] opacity-30"></div>
                    <span className="absolute top-3 left-3 text-xs bg-[#F5D547] text-[#1A0A0B] px-2 py-0.5 uppercase tracking-wider">
                      {related.destination}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="w-4 h-px bg-[#F5D547] mb-2"></div>
                    <p className="text-sm font-medium uppercase tracking-wider text-[#1A0A0B] line-clamp-2">
                      {related.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">{related.date}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#1A0A0B] py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-px bg-[#F5D547] mx-auto mb-8"></div>
          <h2 className="text-3xl font-light uppercase tracking-[0.15em] text-white mb-4">Inspired to Explore?</h2>
          <a
            href="/destinations"
            className="inline-block px-12 py-4 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm border-2 border-[#F5D547]"
          >
            View Destinations
          </a>
        </div>
      </section>
    </Layout>
  );
}