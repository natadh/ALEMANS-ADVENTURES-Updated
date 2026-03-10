import { Trash2 } from "lucide-react";
import type { JournalEntry } from "./hooks/useJournals";

interface Props {
  journal: JournalEntry;
  onDelete: (id: number) => void;
}

export default function JournalCard({ journal, onDelete }: Props) {
    console.log(journal)
  return (
    <div className="bg-white hover:bg-[#FAFAF8] transition-colors duration-200 overflow-hidden flex flex-col">

      {/* Image */}
      {journal.imageUrl && (
        <div className="w-full h-52 overflow-hidden">
          <img
            src={journal.imageUrl}
            alt={journal.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-8 flex flex-col gap-4">

        {/* Meta */}
        <div className="text-xs font-light text-gray-400 tracking-widest uppercase flex justify-between">
          <span>{journal.date}</span>
          <span>{journal.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="font-medium text-base uppercase tracking-wider text-[#1A0A0B]">
          {journal.title}
        </h2>

        {/* Destination */}
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
          {journal.destination}
        </p>

        {/* Excerpt */}
        <p className="text-sm font-light text-gray-600 leading-relaxed line-clamp-3">
          {journal.excerpt}
        </p>

        {/* Author + Delete */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-xs text-gray-400 font-light">
            By {journal.author}
          </span>

          <button
            onClick={() => onDelete(journal.id)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-light text-red-400 hover:text-red-600 transition-colors duration-200"
          >
            <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}