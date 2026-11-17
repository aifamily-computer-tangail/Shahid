import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Store,
  TrendingUp,
  Megaphone,
  Binary,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_TRACKS } from '../data/siteData.ts';

interface ChooseBusinessSectionProps {
  onSelectTrack?: (trackTitle: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'start-work': Briefcase,
  'online-business': Store,
  'offline-business-scalling': TrendingUp,
  'marketing-branding': Megaphone,
  'sales-engineering': Binary,
};

export const ChooseBusinessSection: React.FC<ChooseBusinessSectionProps> = ({
  onSelectTrack,
}) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(
    BUSINESS_TRACKS[0].id
  );

  const currentTrack =
    BUSINESS_TRACKS.find((t) => t.id === selectedTrackId) ||
    BUSINESS_TRACKS[0];

  const handleTrackAction = (title: string) => {
    if (onSelectTrack) {
      onSelectTrack(title);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="business" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Tailored Engagement Models
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Choose Your Business
          </h2>
          <p className="text-slate-400 text-base sm:text-lg italic">
            &ldquo;Check, Find and Try Our Speciality&rdquo;
          </p>
        </div>

        {/* Category Pills/Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {BUSINESS_TRACKS.map((track) => {
            const Icon = CATEGORY_ICONS[track.id] || Briefcase;
            const isSelected = track.id === selectedTrackId;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrackId(track.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/40'
                    : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                <span>{track.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Showcase Card */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrack.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Track Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-wide">
                    {currentTrack.badge} Track
                  </span>
                  <span className="text-xs text-slate-400">
                    Target: {currentTrack.bestFor}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {currentTrack.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-4">
                  {currentTrack.subtitle}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {currentTrack.summary}
                </p>

                {/* Outcomes list */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Outcomes & Architecture Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentTrack.outcomes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleTrackAction(currentTrack.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Choose {currentTrack.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/8801760443030?text=${encodeURIComponent(
                      `Hello Shahid, I am interested in your ${currentTrack.title} service track for my business.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-semibold text-xs sm:text-sm transition-all"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Key Takeaway Box */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-800 shadow-xl relative">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Choose This Speciality</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    Every project undertaken under this category includes complete handover, administrative control, and clear milestone steps.
                  </p>

                  <div className="space-y-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Contract Basis:</span>
                      <span className="text-white font-medium">Milestone Payments</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Search Engine:</span>
                      <span className="text-white font-medium">Google Console Setup</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Maintenance:</span>
                      <span className="text-white font-medium">Auto-Updates & Terms Support</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Lead Consultant:</span>
                      <span className="text-blue-400 font-semibold">M Shahid Islam</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
