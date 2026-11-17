import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Rocket, Bot, Check, ArrowRight } from 'lucide-react';

const BRAINCHILD_WELCOME_IMAGE = '/assets/aistudio/Brainchild-Welcome_ef46882f.png';

export const WhyBrainchildSection: React.FC = () => {
  const pillars = [
    {
      title: 'Business Advisor',
      icon: Compass,
      tag: 'Strategic Roadmap',
      description:
        'Strategic business consultation that evaluates your market position, refines your value offer, and develops actionable monetization frameworks before writing a single line of code.',
      points: [
        'Commercial feasibility and market positioning analysis',
        'Offline-to-online pricing models & profit margins',
        'Operational automation planning and tech stack selection',
      ],
      color: 'blue',
    },
    {
      title: 'Business Development',
      icon: Rocket,
      tag: 'Growth & Expansion',
      description:
        'Hands-on execution that takes your conceptual or local enterprise and scales it nationwide with structured sales pipelines, partnership readiness, and consumer trust.',
      points: [
        'Conversion-focused sales funnels and digital landing systems',
        'Local and national consumer acquisition channels',
        'Milestone-driven project delivery with zero vendor lock-in',
      ],
      color: 'indigo',
    },
    {
      title: 'A I Work',
      icon: Bot,
      tag: 'Next-Gen Efficiency',
      description:
        'Deploying smart AI workflows and automated business operations so your business works 24/7—capturing inquiries, generating quotes, and handling routine consumer workflows effortlessly.',
      points: [
        'AI customer intake & WhatsApp automated response pipelines',
        'Automated inventory & business catalog synchronization',
        'Smart data structuring for search and Google Console visibility',
      ],
      color: 'sky',
    },
  ];

  return (
    <section id="why-brainchild" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Brainchild Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Why Brainchild BD
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A specialized synergy between senior business advisory, digital sales engineering, and modern AI automation engineered for sustainable commercial growth.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-slate-950/70 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>Learn how we apply this</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Showcase Card */}
        <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
                Offline to Online Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Structured Milestone Execution for Measurable ROI
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Unlike generic agencies that lock clients into unpredictable hourly billing, M Shahid Islam and Brainchild BD operate strictly on clear milestone deliverables. Every phase is verified, tested, and handed over with full administrative access and training.
              </p>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-black text-blue-400 mb-1">100%</div>
                  <div className="text-xs text-slate-300 font-medium">Milestone Protection</div>
                  <div className="text-[11px] text-slate-500">Pay as deliverables complete</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-2xl font-black text-emerald-400 mb-1">Verified</div>
                  <div className="text-xs text-slate-300 font-medium">Google Console Ready</div>
                  <div className="text-[11px] text-slate-500">Search indexed & verified</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950/80 group">
                <img
                  src={BRAINCHILD_WELCOME_IMAGE}
                  alt="Welcome to Office of BizBase - Brainchild BD & AI Family"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
