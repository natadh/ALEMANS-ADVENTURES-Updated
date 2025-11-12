import { useState, useEffect } from "react";

// Placeholder images - replace with your actual imports
const kenyaImg = "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&h=1080&fit=crop";
const tanzaniaImg = "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1920&h=1080&fit=crop";
const ugandaImg = "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&h=1080&fit=crop";
const zanzibarImg = "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=1920&h=1080&fit=crop";
const rwandaImg = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop";

const images = [kenyaImg, tanzaniaImg, ugandaImg, zanzibarImg, rwandaImg];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: current === index ? 1 : 0 }}
        >
          <img
            src={image}
            alt={`East Africa destination ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Darker overlay for better contrast */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12">
        {/* Minimalist accent line */}
        <div className="w-16 h-1 bg-[#F5D547] mb-8"></div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light uppercase tracking-[0.3em] mb-6">
          ALEMANS
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-[#F5D547] font-light uppercase tracking-[0.2em] mb-12">
          ADVENTURES
        </h2>
        
        <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl font-light leading-relaxed mb-12 tracking-wide opacity-90">
          Explore Kenya, Tanzania, Uganda, Zanzibar, and Rwanda with us. 
          Discover unforgettable experiences and adventure tours across East Africa.
        </p>
        
        <a
          href="/tours"
          className="px-12 py-4 bg-[#F5D547] text-[#1A0A0B] font-medium uppercase tracking-widest hover:bg-[#E8C93A] transition-all duration-300 text-sm md:text-base border-2 border-[#F5D547] hover:border-[#E8C93A]"
        >
          Explore Tours
        </a>
      </div>

      {/* Minimal pagination dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-10 h-1 transition-all duration-300 ${
              current === index ? "bg-[#F5D547]" : "bg-white opacity-40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}