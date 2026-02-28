import { Trash2 } from "lucide-react";

interface UploadItem {
  id: number;
  title: string;
  description?: string;
  footer_name: string;
  section: string;
  url: string;
}

interface UploadListProps {
  uploads: UploadItem[];
  onDelete: (id: number) => void;
}

export default function UploadList({ uploads, onDelete }: UploadListProps) {
  if (!uploads.length)
    return (
      <p className="text-xs uppercase tracking-[0.15em] font-light text-gray-400 py-6">
        No documents uploaded yet.
      </p>
    );

  return (
    <ul className="divide-y divide-gray-200 border border-gray-200">
      {uploads.map((file) => (
        <li
          key={file.id}
          className="flex items-start justify-between gap-6 px-6 py-5 bg-white hover:bg-[#FAFAF8] transition-colors duration-200"
        >
          {/* Info */}
          <div className="space-y-1 min-w-0">
            <p className="text-sm font-medium uppercase tracking-wider text-[#1A0A0B] truncate">
              {file.title}
            </p>
            <p className="text-xs font-light text-gray-400 tracking-wide">
              Section: <span className="text-gray-600">{file.section}</span>
              {" · "}
              Footer: <span className="text-gray-600">{file.footer_name}</span>
            </p>
            {file.description && (
              <p className="text-xs font-light text-gray-500 leading-relaxed">
                {file.description}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1A0A0B] text-[#1A0A0B] text-xs uppercase tracking-[0.2em] px-4 py-2 font-light hover:bg-[#1A0A0B] hover:text-white transition-colors duration-300"
            >
              View
            </a>
            <button
              onClick={() => onDelete(file.id)}
              className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-light text-red-400 hover:text-red-600 transition-colors duration-200 border border-red-200 hover:border-red-400 px-4 py-2"
            >
              <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}