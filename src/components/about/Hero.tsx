export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop"
          alt="About Alemans Adventures"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1A0A0B] opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="w-16 h-px bg-[#F5D547] mb-8"></div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.2em] text-white mb-6">
          ABOUT US
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl max-w-3xl font-light leading-relaxed text-gray-200 tracking-wide">
          Explore East Africa's breathtaking safaris, mountain treks, and
          unforgettable cultural journeys with a trusted local expert since
          2000.
        </p>

        <div className="w-16 h-px bg-[#F5D547] mt-8"></div>
      </div>
    </section>
  );
}