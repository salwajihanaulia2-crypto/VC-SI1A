import React, { useState } from 'react';
import { ArrowRight, BookOpen, Layers, CheckCircle, ExternalLink, X, ChevronRight, FileSpreadsheet, ShieldCheck, Database, ShoppingBag } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const FeaturedWorks: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'architecture' | 'flow' | 'principles'>('overview');

  const openProjectModal = (proj: Project) => {
    setSelectedProject(proj);
    setActiveModalTab('overview');
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="karya" className="py-16 lg:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Karya Terbaik
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Dua studi komprehensif yang mewakili pemikiran analitis dan kapabilitas sistem informasi.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Masing-masing proyek dikembangkan dengan kedalaman peran, tujuan penyelesaian masalah nyata, serta hasil artefak terstruktur.
          </p>
        </div>

        {/* 2-Column Grid of Featured Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-50/60 rounded-2xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-all duration-200 shadow-2xs"
            >
              {/* Project Card Image */}
              <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Meta overlay (clean text) */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{project.course}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.year}</span>
                  </div>
                  <span className="text-white/80">{project.team}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      Peran: <span className="text-slate-800 font-semibold">{project.role}</span>
                    </p>
                  </div>

                  {/* Objective (Tujuan) */}
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Tujuan Analisis
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* Results (Hasil) */}
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Hasil & Luaran Sistem
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group/btn transition-colors"
                  >
                    <span>Pelajari Analisis Lengkap</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    {idx === 0 ? 'TPS / MIS / DSS' : 'Makalah & Slide'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/50">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <span>{selectedProject.course}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.role}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                onClick={closeProjectModal}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Tutup detail karya"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs (Zero-Pill: Segmented tabs) */}
            <div className="px-6 pt-3 border-b border-slate-200 bg-white flex items-center gap-2 overflow-x-auto text-sm">
              <button
                onClick={() => setActiveModalTab('overview')}
                className={`py-2 px-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
                  activeModalTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Ikhtisar & Masalah
              </button>

              {selectedProject.details.systemArchitecture && (
                <button
                  onClick={() => setActiveModalTab('architecture')}
                  className={`py-2 px-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeModalTab === 'architecture'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Arsitektur TPS · MIS · DSS
                </button>
              )}

              {selectedProject.id === 'toko-jalu-jaya' && (
                <button
                  onClick={() => setActiveModalTab('flow')}
                  className={`py-2 px-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeModalTab === 'flow'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Diagram Alur Pesanan s/d Belanja
                </button>
              )}

              {selectedProject.details.islamicPrinciples && (
                <button
                  onClick={() => setActiveModalTab('principles')}
                  className={`py-2 px-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeModalTab === 'principles'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pilar Etika Informasi Islam
                </button>
              )}
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              {/* Tab: Overview */}
              {activeModalTab === 'overview' && (
                <div className="space-y-6">
                  {/* Context of Problem */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900">
                      Latar Belakang & Analisis Masalah di Lapangan
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProject.details.problemContext}
                    </p>
                  </div>

                  {/* Objective & Results Recall */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Tujuan Utama
                      </div>
                      <p className="text-slate-800 font-medium">
                        {selectedProject.objective}
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Hasil Akhir Analisis
                      </div>
                      <p className="text-slate-800 font-medium">
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900">
                      Artefak & Luaran yang Disusun
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.details.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="text-slate-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200/60 space-y-1">
                    <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                      Dampak Usulan Sistem
                    </div>
                    <p className="text-slate-800">
                      {selectedProject.details.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab: Architecture (TPS, MIS, DSS) */}
              {activeModalTab === 'architecture' && selectedProject.details.systemArchitecture && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">
                      Rancangan Arsitektur 3 Tingkat Sistem Informasi
                    </h4>
                    <p className="text-slate-600">
                      Pemisahan tanggung jawab sistem dari level transaksi kasir kasat mata, rekapitulasi manajerial, hingga penunjang keputusan strategis belanja.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {selectedProject.details.systemArchitecture.map((arch, idx) => (
                      <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                            {arch.level}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">Tier {idx + 1}</span>
                        </div>
                        <h5 className="text-base font-bold text-slate-900">
                          {arch.name}
                        </h5>
                        <p className="text-slate-600">
                          {arch.description}
                        </p>

                        <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                          <div className="text-xs font-semibold text-slate-500">Fitur & Modul Utama:</div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                            {arch.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">›</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Flow Diagram (Toko Jalu Jaya) */}
              {activeModalTab === 'flow' && selectedProject.id === 'toko-jalu-jaya' && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">
                      Diagram Alur: Dari Pesanan Pelanggan Sampai Keputusan Belanja
                    </h4>
                    <p className="text-slate-600">
                      Pemetaan visual transisi data di Toko Jalu Jaya yang dirancang oleh Salwa Jihan Aulia untuk mengatasi inkonsistensi operasional.
                    </p>
                  </div>

                  {/* Visual Step-by-Step Sequence */}
                  <div className="space-y-3">
                    {[
                      {
                        step: '01',
                        role: 'Pelanggan & Admin Pesanan',
                        title: 'Penerimaan Pesanan Antar & Validasi Stok',
                        desc: 'Pelanggan memesan via saluran chat/telepon. Admin menginput pesanan ke modul TPS kasir; sistem secara otomatis memvalidasi sisa timbangan ikan segar dan ketersediaan sembako di rak.',
                        output: 'Nomor Order Antar & Status "Menunggu Penyiapan"',
                      },
                      {
                        step: '02',
                        role: 'Petugas Timbang & Packing',
                        title: 'Penimbangan Presisi & Cetak Nota Kurir',
                        desc: 'Ikan segar ditimbang dengan timbangan digital terhubung atau diinput ke TPS kasir untuk mendapatkan nominal eksak. TPS mencetak nota kurir berisi rincian barang, total bayar COD/Transfer, dan peta alamat.',
                        output: 'Struk Pengiriman & Pemotongan Stok Sementara',
                      },
                      {
                        step: '03',
                        role: 'Kurir Delivery',
                        title: 'Pengantaran & Pelunasan Kas',
                        desc: 'Kurir mengantar barang ke alamat pelanggan, menerima pembayaran (tunai/transfer), dan mengonfirmasi status "Terkirim & Lunas" ke sistem saat kembali ke toko.',
                        output: 'Kas Masuk di TPS & Order Selesai',
                      },
                      {
                        step: '04',
                        role: 'Sistem MIS (Toko Malam Hari)',
                        title: 'Rekapitulasi Omzet & Perhitungan Sisa Persediaan',
                        desc: 'Pada penutupan toko pukul 20:00, MIS mengagregasi total transaksi fisik + antar, memisahkan omzet sembako vs ikan, dan mencatat sisa stok ikan yang belum terjual.',
                        output: 'Laporan Laba Kotor Harian & Log Stok Akhir',
                      },
                      {
                        step: '05',
                        role: 'DSS & Pemilik Toko (Subuh Hari)',
                        title: 'Rekomendasi Belanja Kulakan ke Pasar Lelang',
                        desc: 'Pukul 04:00 subuh, DSS memproses rata-rata penjualan 3 hari terakhir, sisa ikan kemarin, dan kalender pasar untuk memunculkan rekomendasi kilogram ikan yang harus dibeli agar minim sisa busuk.',
                        output: 'Daftar Kuantitas Belanja Ikan Subuh yang Presisi',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-sm font-mono font-bold text-blue-600 shrink-0 pt-0.5">
                          {item.step}
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>Aktor: {item.role}</span>
                          </div>
                          <div className="text-sm font-bold text-slate-900">
                            {item.title}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                          <div className="text-xs text-blue-700 font-medium pt-1">
                            Output: {item.output}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Islamic Principles */}
              {activeModalTab === 'principles' && selectedProject.details.islamicPrinciples && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900">
                      Nilai Etika Islam dalam Tata Kelola Informasi Modern
                    </h4>
                    <p className="text-slate-600">
                      Kajian teoritis dan terapan bagaimana prinsip moralitas Islam membentuk sistem informasi yang kredibel, terpercaya, dan amanah.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.details.islamicPrinciples.map((principle, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="text-base font-bold text-slate-900">
                            {principle.name}
                          </h5>
                          {principle.arabic && (
                            <span className="text-sm text-slate-500 font-serif" dir="rtl">
                              {principle.arabic}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 italic">
                          "{principle.meaning}"
                        </p>
                        <div className="pt-2 border-t border-slate-200/80">
                          <div className="text-xs font-semibold text-slate-500 mb-1">
                            Implementasi dalam Sistem Informasi:
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">
                            {principle.applicationInIT}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span>Mata Kuliah: {selectedProject.course} ({selectedProject.year})</span>
              <button
                onClick={closeProjectModal}
                className="px-4 py-2 font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
