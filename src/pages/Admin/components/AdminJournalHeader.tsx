import { Plus } from "lucide-react";

interface Props {
  onAdd: () => void;
}

export default function AdminJournalHeader({ onAdd }: Props) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between md:gap-0 gap-4">
      {/* Title */}
      <div>
        <div className="w-12 h-px bg-[#F5D547] mb-4 md:mb-6"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-widest sm:tracking-[0.15em] text-[#1A0A0B]">
          Journal Management
        </h1>
      </div>

      {/* Add Button */}
      <button
        onClick={onAdd}
        className="flex items-center gap-2 border border-[#1A0A0B] text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-3 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
      >
        <Plus className="w-4 h-4" strokeWidth={1.5} />
        Add Entry
      </button>
    </div>
  );
}