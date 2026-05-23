import { Link } from "wouter";
import { MapPin, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About and Legal", href: "#about-legal" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Procurement Categories", href: "#services" },
    { label: "Compliance", href: "#compliance" },
    { label: "Capability Statement", href: "/capability-statement.pdf" },
  ],
  Resources: [
    { label: "Vendor Readiness Docs", href: "#" },
    { label: "SAM / NCAGE Tracker", href: "#" },
    { label: "Opportunity Log", href: "#" },
  ],
};

export default function Footer() {
  const handleClick = (href: string) => {
    if (href === "#") {
      return;
    }
    if (href.endsWith(".pdf")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080A12] border-t border-white/[0.04]">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-sm font-[Montserrat]">AD</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight font-[Montserrat]">
                ADEVE<span className="text-[#3B82F6]"> Creations</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-5">
              Local supplier and service partner preparing for U.S. Embassy Zimbabwe procurement opportunities with compliance-ready operations.
            </p>

            <div className="flex items-start gap-2 mb-2">
              <MapPin className="w-4 h-4 text-white/30 mt-0.5 shrink-0" />
              <p className="text-white/35 text-xs leading-relaxed">
                Harare<br />
                Zimbabwe
              </p>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-4 h-4 text-white/30 shrink-0" />
              <a
                href="mailto:procurement@adevecreations.com"
                className="text-white/35 text-xs hover:text-white/60 transition-colors"
              >
                procurement@adevecreations.com
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white font-[Montserrat] mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ADEVE Creations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-white/50 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
