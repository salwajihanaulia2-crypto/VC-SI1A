import React, { useState } from 'react';
import { Search, Filter, Database, CheckCircle, Table } from 'lucide-react';
import { informationRequirementsData } from '../data/portfolioData';
import { InformationRequirement } from '../types';

export const RequirementsMatrix: React.FC = () => {
  const [filterSubsystem, setFilterSubsystem] = useState<'ALL' | 'TPS' | 'MIS' | 'DSS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRequirements = informationRequirementsData.filter((item) => {
    const matchesFilter = filterSubsystem === 'ALL' || item.subsystem === filterSubsystem;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.input.toLowerCase().includes(query) ||
      item.process.toLowerCase().includes(query) ||
      item.output.toLowerCase().includes(query) ||
      item.users.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="kebutuhan-informasi" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Artefak Analisis Sistem
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Tabel Matriks Kebutuhan Informasi Toko Jalu Jaya
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Pemetaan lengkap komponen input, proses pemrosesan, output yang dihasilkan, dan aktor pengguna pada setiap subsistem operasional.
            </p>
          </div>

          {/* Interactive Filter Buttons (Functional Buttons Allowed per Constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            {(['ALL', 'TPS', 'MIS', 'DSS'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterSubsystem(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filterSubsystem === cat
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'ALL' ? 'Semua Tingkat' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kebutuhan informasi (contoh: kasir, ikan, struk, moving-average, omzet)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-600 focus:bg-white transition-all"
          />
        </div>

        {/* Table Container */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 font-mono w-20">Tier</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Kebutuhan & Komponen</th>
                  <th className="py-3.5 px-4 min-w-[220px]">Input Data</th>
                  <th className="py-3.5 px-4 min-w-[240px]">Proses Komputasi</th>
                  <th className="py-3.5 px-4 min-w-[200px]">Output Informasi</th>
                  <th className="py-3.5 px-4 min-w-[160px]">Pengguna / Aktor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredRequirements.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-400">
                      Tidak ada kebutuhan sistem yang cocok dengan kata kunci "{searchQuery}".
                    </td>
                  </tr>
                ) : (
                  filteredRequirements.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-4 align-top">
                        <span className="font-mono font-bold text-xs text-blue-700">
                          {row.subsystem}
                        </span>
                      </td>
                      <td className="py-4 px-4 align-top font-semibold text-slate-900">
                        {row.name}
                      </td>
                      <td className="py-4 px-4 align-top text-xs leading-relaxed text-slate-600">
                        {row.input}
                      </td>
                      <td className="py-4 px-4 align-top text-xs leading-relaxed text-slate-600">
                        {row.process}
                      </td>
                      <td className="py-4 px-4 align-top text-xs leading-relaxed text-slate-800 font-medium">
                        {row.output}
                      </td>
                      <td className="py-4 px-4 align-top text-xs text-slate-500 font-mono">
                        {row.users}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Menampilkan {filteredRequirements.length} dari {informationRequirementsData.length} baris matriks kebutuhan</span>
            <span className="font-mono">Sumber: Tugas Individu Komputer Bisnis (2026)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
