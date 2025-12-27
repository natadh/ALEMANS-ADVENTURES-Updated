export default function DesktopSections({
  sections,
  onNavigate,
  pathname,
  basePath,
}: {
  sections: string[];
  onNavigate: (section: string) => void;
  pathname: string;
  basePath: string;
}) {
  return (
    <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest relative">
      {sections.map((section) => {
        const isActive = pathname.startsWith(
          `${basePath}/${section.toLowerCase().replace(/\s+/g, "-")}`
        );

        return (
          <div key={section} className="relative group">
            <button
              onClick={() => onNavigate(section)}
              className={`relative pb-1 transition-colors duration-200 ${
                isActive ? "text-white" : "hover:text-white"
              }`}
            >
              {section}

              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F5D547] transition-transform duration-300 origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
