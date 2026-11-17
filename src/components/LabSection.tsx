import React from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Cpu,
  Search,
  CheckCircle,
  Zap,
  Activity,
  Shield,
  Layers,
} from 'lucide-react';

const LAB_IMAGE = '/assets/aistudio/571768317_25007464718919034_4738123983032043880_n_887e713a.jpg';

export const LabSection: React.FC = () => {
  const labExperiments = [
    {
      title: 'AI Workflow Integration',
      desc: 'Developing automated consumer inquiry funnels that qualify inbound leads directly to WhatsApp.',
      icon: Cpu,
      status: 'Active Pipeline',
    },
    {
      title: 'Google Search Console Verification',
      desc: 'Standardized automated indexing, XML sitemap verification, and core web vitals optimization.',
      icon: Search,
      status: 'Verified Standard',
    },
    {
      title: 'Auto-Update Architecture',
      desc: 'Containerized WordPress and React production setups configured for zero-breakage automatic updates.',
      icon: Zap,
      status: 'Zero Downtime',
    },
    {
      title: 'Offline-to-Online POS Sync',
      desc: 'Bridging physical storefront inventories with modern web commerce catalogs.',
      icon: Layers,
      status: 'Production Ready',
    },
  ];

  return (
    <section id="lab" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Brainchild BD Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            The Tech & Sales Lab
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Where sales engineering meets practical execution. We test, benchmark, and deploy modern digital workflows before implementing them into your business.
          </p>
        </div>

        {/* Lab Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Lab Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={LAB_IMAGE}
                alt="M Shahid Islam – Sales Engineer & Tech Innovation"
                className="w-full h-full object-cover object-top max-h-[460px] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60">
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Brainchild BD Engineering Studio
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Tangail & Dhaka Development Hub · AI Workflows
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Lab Active</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:col-span-5 space-y-4">
            {labExperiments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 hover:border-blue-500/40 transition-all hover:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed ml-12">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Security and Quality Assurance banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                Google Console & Security Verified Assurance
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Every client deployment is tested for Google Core Web Vitals, mobile responsiveness, and SSL compliance.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap shadow-md transition-colors"
          >
            Request Lab Audit
          </a>
        </div>
      </div>
    </section>
  );
};
