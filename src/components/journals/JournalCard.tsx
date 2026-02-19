// JournalCard is a PREVIEW card — it shows enough info to make you want to click.
// It does NOT show the full journal. That willbe the JournalDetail's job.
// When clicked, it navigates to /journals/:id


export interface Journal {
  id: number;
  title: string;
  excerpt: string;       // a short preview of the content
  content: string;       // the full text (used in JournalDetail)
  destination: string;   // e.g. "Kenya"
  date: string;
  imageUrl: string;
  author: string;
  readTime: string;      // e.g. "5 min read"
}

interface JournalCardProps {
  journal: Journal;
}

export default function JournalCard({ journal }: JournalCardProps) {
  return (
    // Clicking anywhere on the card goes to the detail page
    <a
      href={`/journals/${journal.id}`}
      className="group block bg-white border border-gray-200 hover:border-[#F5D547]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={journal.imageUrl}
          alt={journal.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1A0A0B] opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
        {/* Destination badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs uppercase tracking-widest bg-[#F5D547] text-[#1A0A0B] px-3 py-1 font-medium">
            {journal.destination}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="w-6 h-px bg-[#F5D547] mb-3"></div>
        <h3 className="text-lg font-medium uppercase tracking-wider text-[#1A0A0B] mb-3 group-hover:text-[#1A0A0B]/70 transition-colors line-clamp-2">
          {journal.title}
        </h3>
        <p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-3 mb-4">
          {journal.excerpt}
        </p>

        {/* Footer: author + date + read time */}
        <div className="flex items-center justify-between text-xs text-gray-400 uppercase tracking-wider border-t border-gray-100 pt-4">
          <span>{journal.author}</span>
          <span>{journal.date}</span>
          <span>{journal.readTime}</span>
        </div>
      </div>
    </a>
  );
}
