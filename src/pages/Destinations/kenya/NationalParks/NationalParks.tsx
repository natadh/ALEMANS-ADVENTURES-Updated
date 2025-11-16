// export default function NationalParks(){
//     return (
//         <>
//         </>
//     )
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nationalParksData } from "./NationalParksInfo";
import type { ParkSection } from "./NationalParksInfo";

export default function NationalParks() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      {nationalParksData.map((section, index) => (
        <ParkBlock
          key={index}
          section={section}
          isOpen={openIndex === index}
          onToggle={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}

function ParkBlock({
  section,
  isOpen,
  onToggle,
}: {
  section: ParkSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <section className="space-y-4">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between"
      >
        <h2 className="text-2xl font-light uppercase tracking-wide text-[#1A0A0B]">
          {section.header}
        </h2>

        <span className="text-xl text-[#1A0A0B]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pl-4 border-l border-gray-200 pt-2 pb-4">
              {section.content && (
                <p className="text-gray-700">{section.content}</p>
              )}

              {section.subsections.length > 0 && (
                <div className="space-y-4">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="space-y-1">
                      <h3 className="font-semibold text-[#1A0A0B]">
                        {sub.subheader}
                      </h3>

                      {sub.content && (
                        <p className="text-gray-700">{sub.content}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <hr className="border-gray-200" />
    </section>
  );
}
