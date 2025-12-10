export default function DesktopSections({
  sections,
  onSectionChange,
}: {
  sections: string[];
  onSectionChange?: (section: string) => void;
}) {

  

  return (
    <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest relative">
      {sections.map((section) => {

        return (
          <div key={section} className="relative group">
            <button
              onClick={() => {
                  onSectionChange?.(section);
              }}
              className="relative hover:text-white transition-colors duration-200 pb-1"
            >
              {section}

              {/* hover underline (KEPT) */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5D547] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

            
          </div>
        );
      })}
    </div>
  );
}
