import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [messageTopic, setMessageTopic] = useState('Diskusi Kolaborasi Sistem Informasi');
  const [messageText, setMessageText] = useState(
    'Halo Salwa, saya tertarik dengan karya analisis sistem informasi Anda di Toko Jalu Jaya. Apakah ada waktu untuk berdiskusi?'
  );

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Generate WhatsApp message URL
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Halo Salwa Jihan Aulia,\n\nNama: ${senderName || 'Pengunjung Portofolio'}${senderOrg ? ` (${senderOrg})` : ''}\nTopik: ${messageTopic}\n\nPesan:\n${messageText}`;
    const url = `https://wa.me/${personalInfo.contact.phoneClean}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Generate Email mailto
  const handleSendEmail = () => {
    const subject = encodeURIComponent(`[Portofolio SI] ${messageTopic} - ${senderName || 'Inquiry'}`);
    const body = encodeURIComponent(
      `Halo Salwa,\n\nNama: ${senderName || '-'}\nInstansi: ${senderOrg || '-'}\n\nPesan:\n${messageText}\n\nSalam hormat.`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Hubungi Salwa
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Mari Berdiskusi atau Berkolaborasi dalam Analisis Sistem
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Terbuka untuk diskusi akademik, kesempatan magang (internship), proyek analisis proses bisnis, atau kolaborasi pengembangan perangkat lunak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Contact Cards (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Email Resmi
                    </div>
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      {personalInfo.contact.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.contact.email, 'email')}
                  className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors"
                  title="Salin alamat email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Kirim email langsung</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* WhatsApp Phone Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      WhatsApp / Telepon
                    </div>
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      {personalInfo.contact.phone}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.contact.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors"
                  title="Salin nomor WhatsApp"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <a
                  href={`https://wa.me/${personalInfo.contact.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5"
                >
                  <span>Chat langsung di WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Instagram
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {personalInfo.contact.instagram}
                    </div>
                  </div>
                </div>

                <a
                  href={personalInfo.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                  title="Buka Instagram"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-xs text-slate-500">
                  Media sosial pribadi & aktivitas perkuliahan
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Message Composer (Col 6-12) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                Formulir Komunikasi
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Kirim Pesan Langsung ke Salwa
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pesan akan langsung diarahkan ke nomor WhatsApp resmi atau aplikasi email Anda.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Contoh: Bpk. Kurniawan"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-hidden focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Instansi / Perusahaan (Opsional)
                  </label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="Contoh: PT Solusi Digital / Dosen Pembimbing"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-hidden focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Topik Bahasan
                </label>
                <select
                  value={messageTopic}
                  onChange={(e) => setMessageTopic(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-hidden focus:border-blue-600"
                >
                  <option value="Diskusi Kolaborasi Sistem Informasi">Diskusi Kolaborasi Sistem Informasi</option>
                  <option value="Tanya Analisis Kasus Toko Jalu Jaya">Tanya Analisis Kasus Toko Jalu Jaya</option>
                  <option value="Tawaran Magang / Internship">Tawaran Magang / Internship</option>
                  <option value="Kajian Manajemen Informasi Islam">Kajian Manajemen Informasi Islam</option>
                  <option value="Pertanyaan Akademik Lainnya">Pertanyaan Akademik Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Isi Pesan
                </label>
                <textarea
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan ke WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Kirim via Email Client</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
