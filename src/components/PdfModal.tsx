import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'embed' | 'image'>('embed');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
      <div
        className="relative w-full max-w-5xl h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Topbar */}
        <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                Portofolio_67c513ec.pdf
              </h3>
              <p className="text-xs text-slate-500">
                Dokumen Resmi Portofolio Salwa Jihan Aulia (2026)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle view if embed has iframe restrictions */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setViewMode('embed')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'embed' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                PDF Reader
              </button>
              <button
                type="button"
                onClick={() => setViewMode('image')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  viewMode === 'image' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Tampilan Gambar
              </button>
            </div>

            <a
              href={personalInfo.pdfPath}
              download="Portofolio_Salwa_Jihan_Aulia.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors ml-1"
              aria-label="Tutup pratinjau dokumen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Viewer */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-auto flex items-center justify-center">
          {viewMode === 'embed' ? (
            <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-inner border border-slate-200">
              <object
                data={personalInfo.pdfPath}
                type="application/pdf"
                className="w-full h-full min-h-[500px]"
              >
                <div className="p-8 text-center space-y-4">
                  <p className="text-slate-700 text-sm">
                    Browser Anda tidak mendukung preview PDF langsung. Anda dapat melihat gambar dokumen asli di bawah ini atau mengunduh PDF.
                  </p>
                  <button
                    onClick={() => setViewMode('image')}
                    className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
                  >
                    Buka Mode Gambar
                  </button>
                </div>
              </object>
            </div>
          ) : (
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-md overflow-hidden p-2 sm:p-4 border border-slate-200">
              <img
                src={personalInfo.originalPdfPhoto}
                alt="Dokumen Portofolio Salwa Jihan Aulia Asli"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg shadow-xs"
              />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <span>Universitas Komputama Cilacap · Program Studi Sistem Informasi</span>
          <span className="font-mono">© 2026 Salwa Jihan Aulia</span>
        </div>
      </div>
    </div>
  );
};
