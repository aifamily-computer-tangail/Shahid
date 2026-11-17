import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Layers,
  Code2,
  TrendingUp,
} from 'lucide-react';

const HERO_PORTRAIT = '/assets/aistudio/571768317_25007464718919034_4738123983032043880_n_887e713a.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background Decorative Mesh & Lights */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Credibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Editorial Lead-in */}
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <span className="w-8 h-px bg-blue-400" />
              <span>Who is M Shahid Islam</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              M Shahid <span className="text-blue-500">Islam</span>
            </h1>

            {/* Triple Role Badges / Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Sales Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Layers className="w-4 h-4 text-indigo-400" />
                Business Developer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Code2 className="w-4 h-4 text-sky-400" />
                Website Developer
              </span>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Empowering traditional offline enterprises and innovative startups
              with revenue-driven web architecture, Google Console verification,
              and AI workflows. Operating under{' '}
              <span className="text-white font-medium">Brainchild BD</span> with
              milestone-based payment security.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>Hire M Shahid Islam</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#speciality"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Speciality</span>
              </a>

              <a
                href="https://wa.me/8801760443030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-semibold text-sm transition-all"
                title="Direct WhatsApp Consultation"
              >
                <span>WhatsApp: +8801760443030</span>
              </a>
            </div>

            {/* Quick Trust Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Milestone Basis Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Google Console Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AI Workflow Integration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Outer Decorative Glow & Borders */}
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-xl animate-pulse"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                {/* Fallback pattern + Image */}
                <div className="aspect-[3/4] w-full overflow-hidden relative bg-slate-950">
                  <img
                    src={HERO_PORTRAIT}
                    alt="M Shahid Islam – Sales Engineer and Business Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Overlay Card */}
                <div className="p-5 bg-slate-900/95 border-t border-slate-800/90 flex items-center justify-between">
                  <div>
                    <h2 className="text-white font-bold text-base">M Shahid Islam</h2>
                    <p className="text-slate-400 text-xs">Sales Engineer & Business Developer</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Projects
                  </span>
                </div>
              </div>

              {/* Floating Stat Card 1 - Experience & Upwork */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl shadow-xl flex items-center gap-3 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-base tracking-tight tabular-nums">
                  8+
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Years Experience</div>
                  <div className="text-[11px] text-slate-400">Web & Business Dev</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 - Google Console Verified */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl shadow-xl flex items-center gap-3 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Google Supported</div>
                  <div className="text-[11px] text-slate-400">Console Verified</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
