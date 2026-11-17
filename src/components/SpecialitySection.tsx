import React from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  Globe,
  TrendingUp,
  Sliders,
  Palette,
  CheckCircle2,
  RefreshCw,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react';
import { SPECIALITIES } from '../data/siteData.ts';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Globe,
  TrendingUp,
  Sliders,
  Palette,
  CheckCircle2,
  RefreshCw,
  LifeBuoy,
};

export const SpecialitySection: React.FC = () => {
  return (
    <section id="speciality" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Capabilities & Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Speciality
          </h2>
          <p className="text-slate-400 text-base sm:text-lg italic">
            &ldquo;Summarise what we can do for you&rdquo;
          </p>
        </div>

        {/* 8 Speciality Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALITIES.map((item, index) => {
            const Icon = ICON_MAP[item.iconName] || Cpu;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Exact Original Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Micro Action */}
                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                  <span>Included in Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
