import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import JournalForm from "./JournalForm";

interface Props {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateJournalModal({
  show,
  onClose,
  onSuccess,
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-lg border border-gray-200"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
              <h2 className="text-base uppercase tracking-[0.15em]">
                Create Journal Entry
              </h2>

              <button onClick={onClose}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <JournalForm onSuccess={onSuccess} onCancel={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}