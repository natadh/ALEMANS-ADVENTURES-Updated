import { motion } from "framer-motion";

export default function MobileSections({
  sections,
  onNavigate,
  setMenuOpen,
}: {
  sections: string[];
  onNavigate: (section: string) => void;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="md:hidden border-t border-[#F5D547]/20 bg-[#120809]/95 overflow-hidden"
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => {
            onNavigate(section);
            setMenuOpen(false);
          }}
          className="w-full text-left py-3 px-6 text-xs text-[#F5D547]/80 hover:text-white hover:bg-[#F5D547]/10 uppercase tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all"
        >
          {section}
        </button>
      ))}
    </motion.div>
  );
}
