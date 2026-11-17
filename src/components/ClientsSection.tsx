import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, HeartHandshake, Laptop, Briefcase, Landmark, ExternalLink } from 'lucide-react';
import { CLIENTS } from '../data/siteData.ts';

export const ClientsSection: React.FC = () => {
  const [activeClient, setActiveClient] = useState<number | null>(null);

  return (
    <section id="clients" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Government & Commercial Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Our Clients
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Trusted by municipal government entities, international non-profits, and growing regional enterprises.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CLIENTS.map((client, index) => {
            const isHovered = activeClient === index;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setActiveClient(index)}
                onMouseLeave={() => setActiveClient(null)}
                whileHover={{ y: -4 }}
                className="group relative bg-slate-900/70 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {index === 0 ? (
                        <Landmark className="w-6 h-6" />
                      ) : index === 1 ? (
                        <HeartHandshake className="w-6 h-6" />
                      ) : index === 2 ? (
                        <Laptop className="w-6 h-6" />
                      ) : index === 3 ? (
                        <Briefcase className="w-6 h-6" />
                      ) : (
                        <Building2 className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/50">
                      {client.tag}
                    </span>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 mb-3">
                    {client.role} · {client.location}
                  </p>

                  {/* Summary */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>

                {/* Footer badge */}
                <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified Milestone Complete
                  </span>
                  <span className="group-hover:text-blue-400 transition-colors">
                    Case Study
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Logos ticker / trust band */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
            Deployments Verified on Google Search Console & Production Cloud
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300 text-xs sm:text-sm font-bold text-slate-300">
            <span className="hover:text-blue-400 transition-colors">BASAIL MUNICIPALITY</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-blue-400 transition-colors">GIHN GLOBAL FOUNDATION</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-blue-400 transition-colors">AI FAMILY TANGAIL</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-blue-400 transition-colors">BRAINCHILD BD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
