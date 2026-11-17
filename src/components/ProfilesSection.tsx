import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';
import { PROFILES } from '../data/siteData.ts';

export const ProfilesSection: React.FC = () => {
  return (
    <section id="profiles" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Verified Global Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            International Profiles
          </h2>
          <p className="text-slate-400 text-base sm:text-lg italic">
            &ldquo;Your Trusted Market&rdquo;
          </p>
        </div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILES.map((profile, index) => {
            const isUpwork = profile.platform === 'Upwork';
            const isFacebook = profile.platform === 'Facebook';
            const isFreelancer = profile.platform === 'Freelancer';

            return (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between block cursor-pointer"
              >
                <div>
                  {/* Platform Brand Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {isUpwork && (
                        <div className="w-12 h-12 rounded-xl bg-[#14a800]/15 border border-[#14a800]/30 flex items-center justify-center text-[#14a800] font-black text-xl group-hover:scale-105 transition-transform">
                          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.722 0-5.753 2.503-6.425 4.975-1.468-2.261-2.584-4.739-2.658-4.975H6.262v8.665c0 1.956-1.587 3.543-3.543 3.543S-.824 15.625-.824 13.669V5.018H-4v8.651c0 3.708 3.016 6.724 6.724 6.724s6.724-3.016 6.724-6.724v-.868c.791 1.341 1.849 2.68 3.197 3.593l-1.921 9.043h3.292l1.378-6.486c.997.28 2.052.43 3.167.43 3.722 0 6.724-3.016 6.724-6.724 0-3.709-3.002-6.724-6.724-6.724z" />
                          </svg>
                        </div>
                      )}
                      {isFacebook && (
                        <div className="w-12 h-12 rounded-xl bg-[#1877F2]/15 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] font-black text-xl group-hover:scale-105 transition-transform">
                          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </div>
                      )}
                      {isFreelancer && (
                        <div className="w-12 h-12 rounded-xl bg-[#0089ff]/15 border border-[#0089ff]/30 flex items-center justify-center text-[#0089ff] font-black text-xl group-hover:scale-105 transition-transform">
                          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                            <path d="M14.09 0L9.98 4.28 12.87 7.2 16.98 2.92 14.09 0zm-4.32 4.52L5.66 8.8 8.55 11.72 12.66 7.44 9.77 4.52zm-4.32 4.52L1.34 13.32 4.23 16.24 8.34 11.96 5.45 9.04zm12.96-.24l-4.11 4.28 2.89 2.92 4.11-4.28-2.89-2.92zm-4.32 4.52l-4.11 4.28 2.89 2.92 4.11-4.28-2.89-2.92z" />
                          </svg>
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors">
                          {profile.title}
                        </h3>
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified Identity
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Handle */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 mb-4 text-xs font-mono text-slate-300">
                    {profile.handle}
                  </div>

                  {/* Highlight */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {profile.highlight}
                  </p>
                </div>

                {/* Subtitle / CTA (Prompt exact wording: "View Profile and Hire") */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span>{profile.subtitle}</span>
                  <span className="text-xs uppercase tracking-wider text-slate-500 group-hover:text-slate-300">
                    Open Platform &rarr;
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Global Escrow Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>
              All international client agreements support Upwork & Freelancer escrow milestone payments.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
