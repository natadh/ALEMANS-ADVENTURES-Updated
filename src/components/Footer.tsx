import { useEffect, useState } from "react";
import { Phone, Mail, Facebook, Instagram, Twitter, Lock } from "lucide-react";

interface FooterLinksData {
  [footerName: string]: string[]; // footer_name => array of sections
}

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState<FooterLinksData>({});
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchFooterLinks = async () => {
      try {
        const res = await fetch(`${API_BASE}/adminUploads/links.php`);
        if (!res.ok) throw new Error("Failed to fetch footer links");
        const data = await res.json();
        setFooterLinks(data.footer_links || {});
      } catch (error) {
        console.error("Failed to fetch footer links:", error);
      }
    };

    fetchFooterLinks();
  }, []);

  return (
    <footer className="bg-[#1A0A0B] text-[#F5D547]/90 border-t border-[#F5D547]/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Contact Info */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-4">
            Contact Us
          </h2>
          <div className="space-y-6 text-sm text-gray-300">
            <div className="space-y-2 pb-4 border-b border-[#F5D547]/20">
              <h3 className="text-[#F5D547] text-xs uppercase tracking-wider font-semibold">
                Kenya (Head Office)
              </h3>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5D547]" /> +254 700 012 344
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5D547]" /> +254 713 491 692
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5D547]" /> info@alemansadventures.com
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Destinations", href: "/destinations" },
              { label: "Safaris", href: "/safaris" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative group transition-colors duration-200 hover:text-[#F5D547]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#F5D547] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / Footer Links */}
        <div className="flex flex-col gap-6 md:max-h-[600px] overflow-hidden md:overflow-auto">
          {Object.entries(footerLinks).map(([footerName, sections]) => (
            <div key={footerName}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-2">
                {footerName}
              </h2>
              <ul className="space-y-1 text-sm text-gray-300">
                {sections.map((section) => (
                  <li key={section}>
                    <a
                      href={`/${encodeURIComponent(section)}/${encodeURIComponent(footerName)}`}
                      className="block relative transition-colors duration-200 hover:text-[#F5D547]"
                    >
                      {section}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#F5D547] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Security */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-4">
            Pay Safely With Us
          </h2>
          <p className="text-xs text-gray-400 mb-4 flex items-start gap-2 leading-relaxed">
            <Lock className="w-4 h-4 text-[#F5D547] shrink-0 mt-0.5" />
            <span>Your payment is encrypted and securely transmitted using SSL.</span>
          </p>
          <div className="flex items-center gap-4 text-[#F5D547] opacity-90">
            <img src="/visa.svg" alt="Visa" className="w-11 h-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/mastercard.svg" alt="Mastercard" className="w-11 h-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/amex.svg" alt="American Express" className="w-11 h-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#F5D547]/20 my-6" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-[0.1em]">
        <p>
          © 2022–2025{" "}
          <span className="text-[#F5D547] font-medium">
            Alemans Adventures
          </span>{" "}
          — All Rights Reserved.
        </p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-[#F5D547] transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#F5D547] transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#F5D547] transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}