import React from 'react';
import { GraduationCap, BookOpen, Check, Award, Cpu, Code2, Database, Network, PenTool } from 'lucide-react';
import { skillsData, personalInfo } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getSkillIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Network className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Database className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 3:
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 4:
      default:
        return <PenTool className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="keahlian" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Kompetensi & Latar Belakang
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Keahlian Terapan dan Fondasi Pendidikan
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Kombinasi analisis proses bisnis di dunia nyata, kemampuan teknis rekayasa sistem informasi, dan ketelitian penyusunan dokumentasi ilmiah.
          </p>
        </div>

        {/* 2-Column Split: Left = Education & Profile, Right = 5 Core Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Education & Academic Profile (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-600 uppercase">
                    Pendidikan Formal
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {personalInfo.university}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Program Studi:</span>
                  <span className="font-semibold text-slate-900 text-right">{personalInfo.major}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Angkatan / Tahun:</span>
                  <span className="font-mono font-medium text-slate-900">{personalInfo.cohortYear}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Lokasi Kampus:</span>
                  <span className="text-slate-800">{personalInfo.location}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Mata Kuliah Unggulan Relevan
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">›</span>
                    <span className="font-medium text-slate-800">Komputer Bisnis</span>
                    <span className="text-slate-500">(Studi Kasus Toko Jalu Jaya)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">›</span>
                    <span className="font-medium text-slate-800">Pendidikan Agama</span>
                    <span className="text-slate-500">(Kajian Manajemen Informasi Islam)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">›</span>
                    <span className="font-medium text-slate-800">Analisis & Perancangan Sistem Informasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">›</span>
                    <span className="font-medium text-slate-800">Sistem Basis Data & Pemrograman Web</span>
                  </div>
                </div>
              </div>

              {/* Verified Commitment */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800 font-semibold">Filosofi Belajar:</strong> Menyelidiki alur nyata langsung ke lapangan pelaku usaha lokal dan mengonversinya menjadi cetak biru sistem informasi yang dapat diimplementasikan.
              </div>
            </div>
          </div>

          {/* 5 Core Competencies (Col 6-12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                5 Keahlian Inti (Berdasarkan Portofolio Resmi)
              </span>
              <span className="text-xs font-mono text-slate-400">Total 5 Bidang</span>
            </div>

            <div className="space-y-4">
              {skillsData.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs space-y-3 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 shrink-0 mt-0.5">
                      {getSkillIcon(idx)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900">
                          {skill.title}
                        </h4>
                        <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Competencies list (Unboxed with typographic markers) */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {skill.competencies.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables tags (Clean unboxed text) */}
                  <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
                    <span className="font-semibold text-slate-600">Penerapan Nyata:</span>
                    {skill.deliverableExamples.map((ex, exIdx) => (
                      <React.Fragment key={exIdx}>
                        {exIdx > 0 && <span aria-hidden="true">·</span>}
                        <span>{ex}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
