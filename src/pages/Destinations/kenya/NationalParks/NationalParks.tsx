import { useState } from "react";
import { nationalParksData } from "./NationalParksInfo";
import { popularParksData } from "./PopularParksInfo";
import { conservanciesData } from "./ConservanciesInfo";
import type { ParkSection } from "./NationalParksInfo";
type ParkCategory = "national" | "popular" | "conservancies";

export default function NationalParks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState<ParkCategory>("national");  
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const data =
    category === "national"
      ? nationalParksData
      : category === "popular"
      ? popularParksData
      : conservanciesData;

  const activePark = data[activeIndex];

  const handleParkSelect = (index: number) => {
    setActiveIndex(index);
    setIsSidebarOpen(false);
  };

  const handleCategoryChange = (newCategory: ParkCategory) => {
    setCategory(newCategory);
    setActiveIndex(0);
    setShowDropdown(false);
  };
  const CATEGORY_OPTIONS: { label: string; value: ParkCategory }[] = [
    { label: "National Parks", value: "national" },
    { label: "Popular Parks", value: "popular" },
    { label: "Conservancies", value: "conservancies" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex min-h-screen mt-14">

      {/* Mobile backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile pull-out tab */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed top-1/2 z-30 p-2 rounded-r-lg shadow-lg bg-[#1A0A0B] text-white transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-64" : "translate-x-0"
        }`}
        style={{ left: -1, width: "40px" }}
      >
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isSidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          )}
        </svg>
      </button>

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-40 z-30 w-64 bg-white border-r border-gray-200 p-4 
        h-[calc(100vh-4rem)] overflow-y-auto transform transition-transform duration-300 
        ease-in-out md:relative md:top-0 md:h-screen md:translate-x-0 
        ${isSidebarOpen ? "translate-x-0 shadow-xl" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-xl font-semibold mb-6 text-[#1A0A0B]">
          {category === "national"
            ? "National Parks"
            : category === "popular"
            ? "Popular Parks"
            : "Conservancies"}
        </h2>

        {/* Sidebar list for all categories */}
        <ul className="space-y-1 pb-6">
          {data.map((park, index) => (
            <li
              key={park.id}
              onClick={() => handleParkSelect(index)}
              className={`cursor-pointer px-3 py-2 transition-all duration-300 ${
                index === activeIndex ? "bg-[#1A0A0B] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-sm tracking-wide">{park.header}</span>
            </li>
          ))}
        </ul>
        
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 space-y-10 pb-10 px-4 md:px-4 md:ml-8 lg:ml-12 animate-fadeIn min-w-0 mt-10">

      {/* HEADER + DROPDOWN */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="
            flex items-center gap-3
            text-[#1A0A0B]
            px-4 py-2
            bg-transparent
            focus:outline-none
            transition-colors
            hover:bg-[#1A0A0B]
            hover:text-white
          "
          aria-haspopup="true"
          aria-expanded={showDropdown}
        >
          <h1 className="text-3xl uppercase tracking-wider font-light">
            {category === "national"
              ? "National Parks"
              : category === "popular"
              ? "Popular Parks"
              : "Conservancies"}
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`w-6 h-6 transition-transform ${
              showDropdown ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* DROPDOWN MENU */}
        {showDropdown && (
          <div className="
            absolute top-14 left-0
            w-52
            bg-[#1A0A0B]
            border border-[#1A0A0B]
            shadow-lg
            z-50
          ">
            {CATEGORY_OPTIONS.map((item) => (
              <button
                key={item.value}
                onClick={() => handleCategoryChange(item.value)}
                className="w-full text-left px-4 py-3 text-white uppercase tracking-wide text-sm
                          border-b border-white/10 transition-colors
                          hover:bg-white hover:text-[#1A0A0B]"
              >
                {item.label}
              </button>
            ))}

          </div>
        )}
      </div>



        <ParkDetails section={activePark} />
      </main>
    </div>
  );
}

function ParkDetails({ section }: { section: ParkSection }) {
  return (
    <div className="space-y-10">
      {/* SECTION HEADER */}
      <h1 className="
        text-3xl uppercase tracking-widest font-light
        text-[#1A0A0B]
        border-b border-[#1A0A0B]
        pb-3
      ">
        {section.header}
      </h1>

      {/* HERO IMAGE */}
      {section.image && (
        <div className="w-full h-[360px] overflow-hidden border border-[#1A0A0B]">
          <img
            src={section.image}
            alt={section.header}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>
      )}

      {/* MAIN CONTENT */}
      {section.content && (
        <div className="max-w-4xl space-y-5">
          <p className="
            text-[#1A0A0B]/85
            text-[16px]
            leading-[1.9]
            text-justify
          ">
            {section.content}
          </p>
        </div>
      )}

      {/* GALLERY */}
      {section.gallery && section.gallery.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {section.gallery.map((img, i) => (
            <div
              key={i}
              className="h-44 overflow-hidden border border-[#1A0A0B] hover:opacity-90 transition-opacity"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      )}

      {/* SUBSECTIONS */}
      {section.subsections?.length > 0 && (
        <div className="space-y-12 max-w-4xl">
          {section.subsections.map((sub, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#1A0A0B] pl-5 space-y-4"
            >
              <h3 className="
                text-lg uppercase tracking-wide font-medium
                text-[#1A0A0B]
              ">
                {sub.subheader}
              </h3>

              {sub.content && (
                <p className="
                  text-[#1A0A0B]/85
                  text-[16px]
                  leading-[1.9]
                  text-justify
                ">
                  {sub.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


