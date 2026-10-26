import React, { useState } from 'react';
import { ArrowDown, FileText, Sparkles, Building2, GraduationCap, CheckCircle2, Eye, ZoomIn, X, SunMedium, ShieldCheck, MessageSquare, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenPdf: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPdf }) => {
  const [photoView, setPhotoView] = useState<'official' | 'document' | 'studio'>('official');
  const [colorGrade, setColorGrade] = useState<'natural' | 'warm' | 'bw'>('natural');
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);
  const [lightboxZoom, setLightboxZoom] = useState(false);

  const currentPhotoSrc =
    photoView === 'official'
      ? personalInfo.avatarImage
      : photoView === 'document'
      ? personalInfo.originalPdfPhoto
      : '/src/assets/images/salwa_portrait_avatar_1792954099456.jpg';

  const photoFilterClass =
    colorGrade === 'warm'
      ? 'contrast-[1.08] saturate-[1.15] sepia-[0.08] brightness-[1.02]'
      : colorGrade === 'bw'
      ? 'grayscale contrast-[1.22] brightness-[1.04]'
      : 'contrast-100 saturate-100';

  return (
    <section id="profil" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-linear-to-b from-blue-50/50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker (Clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-700 uppercase">
              <span>{personalInfo.major}</span>
              <span aria-hidden="true">·</span>
              <span>{personalInfo.university}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Menghubungkan proses bisnis nyata dengan arsitektur sistem yang tepat guna.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {personalInfo.profileStatement}
            </p>

            {/* Objective Note */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Tujuan Akademis & Profesional
              </div>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                {personalInfo.objective}
              </p>
            </div>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#karya"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0"
              >
                <span>Lihat Karya Terbaik</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Buka Portofolio PDF</span>
              </button>
            </div>

            {/* Metadata Contact Inline Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <span className="font-mono">{personalInfo.contact.email}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{personalInfo.contact.phone}</span>
              <span aria-hidden="true">·</span>
              <span>Instagram: {personalInfo.contact.instagram}</span>
            </div>
          </div>

          {/* Right Column (Visual Anchor & Profile Card) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Studio Backlight Glow */}
              <div
                className="absolute -inset-2 bg-linear-to-tr from-blue-600/20 via-orange-500/15 to-indigo-600/20 rounded-3xl blur-xl opacity-80 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Profile Card Container */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xl shadow-slate-200/50 space-y-5">
                {/* Visual Photo Display Frame */}
                <div className="space-y-3">
                  <div
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 cursor-pointer group shadow-xs select-none"
                    onClick={() => setIsPhotoLightboxOpen(true)}
                    title="Klik untuk memperbesar foto resmi"
                  >
                    {photoView === 'document' ? (
                      <div className="w-full h-full relative overflow-hidden bg-slate-900">
                        <img
                          src={personalInfo.originalPdfPhoto}
                          alt={personalInfo.name}
                          referrerPolicy="no-referrer"
                          className="absolute max-w-none object-cover"
                          style={{
                            width: '380%',
                            left: '-20%',
                            top: '-15%',
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        src={currentPhotoSrc}
                        alt={personalInfo.name}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover object-[center_16%] transition-all duration-300 group-hover:scale-[1.025] ${photoFilterClass}`}
                      />
                    )}

                    {/* Subtle Gradient Scrim at Top and Bottom */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-slate-950/40 pointer-events-none" />

                    {/* Floating Top Header Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-900 bg-white/90 backdrop-blur-md rounded-full shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Mahasiswa Aktif 2026</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPhotoLightboxOpen(true);
                        }}
                        className="pointer-events-auto inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-white bg-slate-950/60 backdrop-blur-md hover:bg-slate-900 rounded-full transition-colors"
                        title="Perbesar tampilan foto"
                      >
                        <ZoomIn className="w-3 h-3" />
                        <span>Zoom</span>
                      </button>
                    </div>

                    {/* Floating Bottom Card Over Photo */}
                    <div className="absolute bottom-3 left-3 right-3 space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-white bg-slate-950/80 backdrop-blur-md rounded-lg">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                        <span className="truncate">Jas Almamater Universitas Komputama</span>
                      </div>
                      <div className="text-[11px] text-white/80 px-1 font-mono">
                        Cilacap, Jawa Tengah · Foto Asli
                      </div>
                    </div>

                    {/* Hover Hint Overlay */}
                    <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4 text-blue-400" />
                        <span>Klik untuk Lihat Resolusi Penuh</span>
                      </span>
                    </div>
                  </div>

                  {/* Interactive Visual Preset Controls */}
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
                      <span>Efek Tampilan Foto:</span>
                      <span className="font-mono text-slate-400">Interaktif</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setColorGrade('natural')}
                        className={`px-2 py-1.5 text-xs font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1 ${
                          colorGrade === 'natural'
                            ? 'bg-white text-blue-700 shadow-2xs border border-blue-200'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-blue-600" />
                        <span>Asli HD</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setColorGrade('warm')}
                        className={`px-2 py-1.5 text-xs font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1 ${
                          colorGrade === 'warm'
                            ? 'bg-white text-orange-700 shadow-2xs border border-orange-200'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                        }`}
                      >
                        <SunMedium className="w-3 h-3 text-orange-500" />
                        <span>Warm Glow</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setColorGrade('bw')}
                        className={`px-2 py-1.5 text-xs font-semibold rounded-lg transition-all text-center flex items-center justify-center gap-1 ${
                          colorGrade === 'bw'
                            ? 'bg-white text-slate-900 shadow-2xs border border-slate-300'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                        }`}
                      >
                        <Eye className="w-3 h-3 text-slate-600" />
                        <span>Monokrom</span>
                      </button>
                    </div>

                    {/* Source toggle */}
                    <div className="pt-1 border-t border-slate-200/60 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500">Sumber:</span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setPhotoView('official')}
                          className={`px-2 py-0.5 text-[11px] font-medium rounded-md transition-colors ${
                            photoView === 'official'
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Foto Terbaru
                        </button>
                        <button
                          type="button"
                          onClick={() => setPhotoView('document')}
                          className={`px-2 py-0.5 text-[11px] font-medium rounded-md transition-colors ${
                            photoView === 'document'
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Klip PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Details & Quick Actions */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {personalInfo.role}
                      </p>
                    </div>
                    <div className="text-right text-xs text-slate-500 font-mono">
                      Angkatan 2026
                    </div>
                  </div>

                  {/* University info */}
                  <div className="flex items-center gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="truncate">{personalInfo.university}</span>
                  </div>

                  {/* Quick Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href={`https://wa.me/${personalInfo.contact.phoneClean}?text=${encodeURIComponent('Halo Salwa, saya melihat profil Anda di portofolio sistem informasi.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-xl transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={onOpenPdf}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 rounded-xl transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Dokumen PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Focus Strip (Below Hero Split as per guidelines) */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono font-medium text-blue-600">01. KARYA UTAMA</div>
            <div className="text-sm font-semibold text-slate-900">Analisis Toko Jalu Jaya</div>
            <div className="text-xs text-slate-500">Pemetaan bisnis toko kelontong & ikan segar</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono font-medium text-blue-600">02. KAJIAN AKADEMIS</div>
            <div className="text-sm font-semibold text-slate-900">Manajemen Informasi Islam</div>
            <div className="text-xs text-slate-500">Etika, amanah & tabayyun dalam tata kelola TI</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono font-medium text-blue-600">03. ALMAMATER</div>
            <div className="text-sm font-semibold text-slate-900">Univ. Komputama Cilacap</div>
            <div className="text-xs text-slate-500">Fokus terapan sistem informasi bisnis nyata</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono font-medium text-blue-600">04. METODOLOGI</div>
            <div className="text-sm font-semibold text-slate-900">TPS · MIS · DSS Architecture</div>
            <div className="text-xs text-slate-500">Matriks input, proses, output & alur aktor</div>
          </div>
        </div>
      </div>

      {/* Full Photo Lightbox Modal */}
      {isPhotoLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPhotoLightboxOpen(false)}
        >
          <div
            className={`relative w-full ${lightboxZoom ? 'max-w-4xl' : 'max-w-lg'} bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 transition-all duration-200`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Bar */}
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold tracking-tight">
                    {personalInfo.name}
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/60">
                    Foto Asli Mahasiswa
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {personalInfo.major} · {personalInfo.university}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLightboxZoom(!lightboxZoom)}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{lightboxZoom ? 'Tampilan Pas' : 'Perbesar 125%'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsPhotoLightboxOpen(false);
                    setLightboxZoom(false);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label="Tutup foto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Res Image View with Zoom State */}
            <div className={`p-4 bg-slate-950 flex items-center justify-center overflow-auto ${lightboxZoom ? 'max-h-[80vh]' : 'max-h-[70vh]'}`}>
              <img
                src={personalInfo.avatarImage}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className={`w-auto max-w-full rounded-xl transition-all duration-200 ${
                  lightboxZoom ? 'h-[78vh] object-cover' : 'max-h-[66vh] object-contain'
                } ${photoFilterClass}`}
              />
            </div>

            {/* Modal Bottom Strip */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Jas Almamater Universitas Komputama Cilacap (Angkatan 2026)</span>
              <a
                href={personalInfo.avatarImage}
                download="Foto_Salwa_Jihan_Aulia_Komputama.jpeg"
                className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Unduh Resolusi Penuh
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
