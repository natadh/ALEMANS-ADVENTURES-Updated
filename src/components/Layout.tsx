import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopFAB from "./ScrollToTopFAB";
interface LayoutProps {
  children: React.ReactNode;
  showHero?: boolean;
  HeroComponent?: React.ReactNode;
}

export default function Layout({
  children,
  showHero = false,
  HeroComponent,
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf3] text-[#340608]">
      {/* Header */}
      <Header />

      {/* Optional Hero Section */}
      {showHero && HeroComponent && <div>{HeroComponent}</div>}

      {/* Main Content */}
      <main className="grow w-full ">
        {children}
      </main>

      {/* Footer */}
      <Footer />
      <ScrollToTopFAB />
    </div>
  );
}
