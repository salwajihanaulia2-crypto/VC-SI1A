import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenPdf: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdf }) => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-slate-900 tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs text-slate-500">
              {personalInfo.major} · {personalInfo.university}
            </div>
          </div>

          {/* Clean text navigation links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
            <a href="#profil" className="hover:text-blue-600 transition-colors">
              Profil
            </a>
            <a href="#karya" className="hover:text-blue-600 transition-colors">
              Karya Terbaik
            </a>
            <a href="#simulasi" className="hover:text-blue-600 transition-colors">
              Simulasi Alur Sistem
            </a>
            <a href="#kebutuhan-informasi" className="hover:text-blue-600 transition-colors">
              Matriks Kebutuhan
            </a>
            <a href="#keahlian" className="hover:text-blue-600 transition-colors">
              Keahlian
            </a>
            <a href="#kontak" className="hover:text-blue-600 transition-colors">
              Kontak
            </a>
            <button
              onClick={onOpenPdf}
              className="hover:text-blue-600 transition-colors font-semibold text-blue-700"
            >
              PDF Asli
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono text-center md:text-right">
            © 2026 Salwa Jihan Aulia
          </div>
        </div>
      </div>
    </footer>
  );
};
