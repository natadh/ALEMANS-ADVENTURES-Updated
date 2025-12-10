import { motion } from "framer-motion";

export default function MobileSubmenu({
  items,
  onClick,
  setMenuOpen,
}: {
  items: string[];
  onClick?: (item: string) => void;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-[#0F0809] border-t border-[#F5D547]/10"
    >
      {items.map((item) => (
        <button
          key={item}
          onClick={() => {
            onClick?.(item);
            setMenuOpen(false);
          }}
          className="block w-full text-left px-10 py-3 text-[11px] text-[#F5D547]/70 hover:text-white hover:bg-[#F5D547]/10 tracking-widest border-l-2 border-transparent hover:border-[#F5D547] transition-all"
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
