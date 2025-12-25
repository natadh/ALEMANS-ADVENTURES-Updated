import { useEffect, useState } from "react";

export default function ScrollToTopFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-[#1A0A0B]
        border border-gray-200
        shadow-lg shadow-black/10
        text-white
        hover:text-[#F5D547] hover:shadow-xl hover:border-[#F5D547]
        transition-all
      "
    >
      ↑
    </button>
  );
}
