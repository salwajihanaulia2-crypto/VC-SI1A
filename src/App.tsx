/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWorks } from './components/FeaturedWorks';
import { StoreSystemSimulator } from './components/StoreSystemSimulator';
import { RequirementsMatrix } from './components/RequirementsMatrix';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PdfModal } from './components/PdfModal';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 3-Zone Navigation */}
      <Navbar onOpenPdf={() => setIsPdfModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenPdf={() => setIsPdfModalOpen(true)} />

        {/* 2 Featured Case Studies */}
        <FeaturedWorks />

        {/* Interactive Systems Simulation (TPS, MIS, DSS) */}
        <StoreSystemSimulator />

        {/* Searchable Information Requirements Matrix */}
        <RequirementsMatrix />

        {/* Skills & Academic Education */}
        <SkillsSection />

        {/* Direct Contact & Interaction */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPdf={() => setIsPdfModalOpen(true)} />

      {/* Original PDF Reader & Download Modal */}
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
