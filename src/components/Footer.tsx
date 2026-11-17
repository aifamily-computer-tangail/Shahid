import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            {/* Brand and identity */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                S
              </span>
              <div>
                <span className="text-white font-bold text-base tracking-tight">
                  M Shahid Islam
                </span>
                <span className="text-xs text-slate-500 block">
                  Sales Engineer · Business Developer · Brainchild BD
                </span>
              </div>
            </div>

            {/* Quick footer navigation links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#speciality" className="hover:text-white transition-colors">Speciality</a>
              <a href="#business" className="hover:text-white transition-colors">Business</a>
              <a href="#prices" className="hover:text-white transition-colors">Prices</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#profiles" className="hover:text-white transition-colors">Profiles</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copyright & Legal Row (Exact Prompt Text) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left">
              Copyright &copy; 2026 | M Shahid - Brainchild | All Rights Reserved
            </p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-slate-700">·</span>
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Privacy Dialog Modal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-300 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  {modalType === 'terms' ? (
                    <FileText className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  )}
                  <h3 className="text-lg font-bold text-white">
                    {modalType === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {modalType === 'terms' ? (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <h4 className="font-bold text-white">1. Milestone-Based Project Delivery</h4>
                  <p>
                    All web development, online business setups, and sales engineering works delivered by M Shahid Islam / Brainchild BD are structured strictly on milestone-based agreements. Each phase (Architecture, Layout, Implementation, Google Console Verification) requires client review and acceptance before milestone payment release.
                  </p>

                  <h4 className="font-bold text-white">2. Scope and Customizations</h4>
                  <p>
                    Clients retain 100% full ownership of all custom themes, codebases, domains, hosting setups, and graphics produced upon final payment completion. Systems are engineered to allow self-serve modification and customization.
                  </p>

                  <h4 className="font-bold text-white">3. After-Sales Support</h4>
                  <p>
                    After completing the project, clients receive dedicated after-sales support covering security updates, theme and plugin stability, and Google Console verification as specified in the agreed plan terms.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <h4 className="font-bold text-white">1. Client Data Confidentiality</h4>
                  <p>
                    We respect your enterprise privacy. All business data, customer records, proprietary sales figures, and domain access credentials shared during the consulting or development lifecycle are kept strictly confidential.
                  </p>

                  <h4 className="font-bold text-white">2. Contact Form & Communication</h4>
                  <p>
                    Contact information submitted through this website is used solely to respond to project inquiries, provide quotations, and coordinate project deliverables. We never sell, rent, or lease client contacts.
                  </p>

                  <h4 className="font-bold text-white">3. Platform Security</h4>
                  <p>
                    Every web platform deployed is secured with industry-standard SSL certificates, Google Search Console authentication, and automated security hardening.
                  </p>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  I Understand & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
