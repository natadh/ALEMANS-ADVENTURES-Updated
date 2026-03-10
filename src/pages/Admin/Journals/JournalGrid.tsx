import type { JournalEntry } from "./hooks/useJournals";
import JournalCard from "./JournalCard";

interface Props {
  journals: JournalEntry[];
  onDelete: (id: number) => void;
}

export default function JournalGrid({ journals, onDelete }: Props) {
  if (journals.length === 0) {
    return (
      <p className="text-xs uppercase tracking-[0.15em] font-light text-gray-400 py-6">
        No journal entries yet.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
      {journals.map((journal) => (
        <JournalCard
          key={journal.id}
          journal={journal}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}