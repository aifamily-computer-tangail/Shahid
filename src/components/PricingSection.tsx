import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData.ts';

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const handleHireClick = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="prices" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Transparent Pricing Structure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Investment Size
          </h2>
          <p className="text-slate-400 text-base sm:text-lg italic">
            &ldquo;Choose your need&rdquo;
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-500/15 ring-4 ring-blue-500/10 md:-translate-y-2'
                    : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Popular Pill badge if applicable */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                      {plan.tier}
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm mb-6 min-h-[2.5rem]">
                    {plan.target}
                  </p>

                  {/* Price Block */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 text-xs sm:text-sm font-medium">
                        / {plan.tier}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                      Included Deliverables:
                    </span>
                    {plan.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-3 text-xs sm:text-sm"
                      >
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 shrink-0">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span
                          className={
                            feature.included
                              ? 'text-slate-200 font-medium'
                              : 'text-slate-500 line-through'
                          }
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleHireClick(`${plan.name} (${plan.price})`)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:scale-[1.02]'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:text-white'
                    }`}
                  >
                    <span>{plan.buttonLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Milestone Basis Notice (Exact prompt requirement) */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm font-semibold shadow-inner">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&ldquo;All work will be mailestone basis payments.&rdquo;</span>
          </div>
          <p className="text-slate-500 text-xs mt-2">
            Clear acceptance criteria before releasing subsequent project phases.
          </p>
        </div>
      </div>
    </section>
  );
};
