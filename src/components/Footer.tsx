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

        <div className="space-y-6 text-sm text-gray-300">

          {/* Kenya */}
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

          {/* UK */}
          {/* <div className="space-y-2 pb-4 border-b border-[#F5D547]/20">
            <h3 className="text-[#F5D547] text-xs uppercase tracking-wider font-semibold">
              United Kingdom
            </h3>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F5D547]" /> +44 7488 532906
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F5D547]" /> uk@alemansadventures.com
            </p>
          </div> */}

          {/* Germany */}
          {/* <div className="space-y-2 pb-4 border-b border-[#F5D547]/20">
            <h3 className="text-[#F5D547] text-xs uppercase tracking-wider font-semibold">
              Germany
            </h3>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F5D547]" /> de@alemansadventures.com
            </p>
          </div> */}

          {/* USA */}
          {/* <div className="space-y-2">
            <h3 className="text-[#F5D547] text-xs uppercase tracking-wider font-semibold">
              United States
            </h3>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F5D547]" /> +1 818 523-7781
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F5D547]" /> us@alemansadventures.com
            </p>
          </div> */}

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

        {/* Payment Security */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5D547] mb-4">
            Pay Safely With Us
          </h2>
          <p className="text-xs text-gray-400 mb-4 flex items-start gap-2 leading-relaxed">
            <Lock className="w-4 h-4 text-[#F5D547] shrink-0 mt-0.5" />
            <span>Your payment is encrypted and securely transmitted using SSL.</span>
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
          <span className="text-[#F5D547] font-medium">Alemans Adventures</span>{" "}
          — All Rights Reserved.
        </p>

        {/* Socials */}
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
