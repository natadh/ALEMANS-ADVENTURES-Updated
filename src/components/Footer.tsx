import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Lock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A0B] text-[#F5D547]/90 border-t border-[#F5D547]/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-4">
            Contact Us
          </h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <Phone className="text-[#F5D547] w-4 h-4 shrink-0" />
              <span>Kenya +254 700 012 344</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#F5D547] w-4 h-4 shrink-0" />
              <span>booking@alemansadventures.com</span>
            </li>
          </ul>
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

        {/* Payment & Security */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-4">
            Pay Safely With Us
          </h2>
          <p className="text-xs text-gray-400 mb-4 flex items-start gap-2 leading-relaxed">
            <Lock className="w-4 h-4 text-[#F5D547] shrink-0 mt-0.5" />
            <span>
              Your payment is encrypted and transmitted securely with an SSL
              protocol.
            </span>
          </p>

          {/* Payment Logos */}
          <div className="flex items-center gap-4 text-[#F5D547] opacity-90">
            <img
              src="/visa.svg"
              alt="Visa"
              className="w-11 h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/mastercard.svg"
              alt="Mastercard"
              className="w-11 h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/amex.svg"
              alt="American Express"
              className="w-11 h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#F5D547]/20 my-6" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-[0.1em]">
        <p>
          © 2022–2025{" "}
          <span className="text-[#F5D547] font-medium">
            Alemans Adventures
          </span>{" "}
          — All Rights Reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-[#F5D547] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="hover:text-[#F5D547] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="hover:text-[#F5D547] transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
