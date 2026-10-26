import React, { useState } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPdf: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPdf }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Profil', href: '#profil' },
    { label: 'Karya Unggulan', href: '#karya' },
    { label: 'Simulasi Sistem', href: '#simulasi' },
    { label: 'Kebutuhan Informasi', href: '#kebutuhan-informasi' },
    { label: 'Keahlian & Studi', href: '#keahlian' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors"
          >
            Salwa Jihan Aulia
          </a>

          {/* Zone 2: Nav Links (Clean single-line text links) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-slate-950 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPdf}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Portofolio PDF Asli</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdf();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>Buka Portofolio PDF Asli</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
