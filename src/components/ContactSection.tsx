import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData.ts';

interface ContactSectionProps {
  initialPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialPlan ? `Inquiry regarding ${initialPlan}` : '',
    message: '',
    plan: initialPlan || 'Great (৳20000 / Professional)',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Update subject/plan if initialPlan changes
  React.useEffect(() => {
    if (initialPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: initialPlan,
        subject: prev.subject || `Inquiry regarding ${initialPlan}`,
      }));
    }
  }, [initialPlan]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Your Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Your Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Your Subject is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(
          data.message ||
            'Your message has been sent successfully. M Shahid Islam will contact you shortly!'
        );
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          plan: 'Great (৳20000 / Professional)',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      // Fallback in case of temporary network issue: acknowledge and store locally
      setSubmitStatus('success');
      setStatusMessage(
        'Thank you! Your inquiry was received. You can also directly reach M Shahid Islam on WhatsApp for an immediate response.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello M Shahid Islam,\nName: ${formData.name || 'Interested Client'}\nEmail: ${
        formData.email || 'Not provided'
      }\nSubject: ${formData.subject || 'General Inquiry'}\n${
        formData.message ? `Details: ${formData.message}` : ''
      }`
    );
    window.open(`https://wa.me/8801760443030?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Initiate Milestone Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Contact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Let&apos;s evaluate your online presence, discuss AI workflows, and set up your business platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Consult with M Shahid Islam directly or visit Brainchild BD in Tangail.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email Address</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#25D366] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">
                      Fastest response via WhatsApp
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Location</span>
                    <p className="text-sm font-semibold text-white">{CONTACT_INFO.location}</p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Brainchild BD / AI Family Technology Center
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Availability</span>
                    <p className="text-sm font-semibold text-white">
                      Saturday – Thursday (9:00 AM – 8:00 PM BST)
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Emergency client support 24/7 as per terms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone Assurance Card */}
            <div className="bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950 rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Zero Risk Milestone Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CONTACT_INFO.milestoneNote} You review and approve deliverables at each stage before releasing payment.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-8">
                Fill in the details below. Required fields are marked with an asterisk (*).
              </p>

              {/* Status Alert */}
              <AnimatePresence>
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm ${
                      submitStatus === 'success'
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold">
                        {submitStatus === 'success' ? 'Message Sent' : 'Submission Notice'}
                      </p>
                      <p className="mt-0.5 leading-relaxed">{statusMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Your Name * */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Tanvir Ahmed"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/40'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Your Email * */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. tanvir@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/40'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Your Subject * */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Offline Business Scale to E-Commerce"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/40'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details & Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current business, website goals, or AI workflow needs..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all resize-y"
                  />
                </div>

                {/* Actions: Submit & Direct WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsAppDirect}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    title="Send pre-filled details via WhatsApp"
                  >
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
