import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zanzibarTravelInfoData } from "./TravelInfoData";
import type { TravelSection } from "./TravelInfoData";

export default function ZanzibarTravelInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    // mt-24 offsets sticky header
    <div className="mt-24 space-y-6 text-gray-700 leading-relaxed">
      {zanzibarTravelInfoData.map((section, index) => (
        <SectionBlock
          key={index}
          section={section}
          isOpen={openIndex === index}
          onToggle={() => toggleSection(index)}
        />
      ))}
    </div>
  );
}

function SectionBlock({
  section,
  isOpen,
  onToggle,
}: {
  section: TravelSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <section
      className="
        max-w-5xl mx-auto space-y-4
        px-4 sm:px-6 lg:px-0
        scroll-mt-24
      "
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between gap-4"
      >
        <h2 className="text-2xl font-light uppercase tracking-wide text-[#1A0A0B]">
          {section.header}
        </h2>

        <span className="text-xl text-[#1A0A0B] shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Sliding Content */}
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