
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, Droplet, Dumbbell, Smartphone, Target, 
  ChevronRight, ArrowRight, CheckCircle2, Zap, X, ShieldCheck
} from 'lucide-react';
import { Protocol } from '../types';

const StepThree: React.FC = () => {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const COMMUNITY_URL = "https://www.reddit.com/r/NoFap/";

  const protocols: Protocol[] = [
    {
      icon: Clock,
      title: "48H GHOST MODE",
      subtitle: "The Dopamine Reset",
      description: "Complete digital detox. No phone, no screens, no artificial stimulation. Your brain's reward system is fried—this is the hard reboot. Studies show dopamine receptors begin recovering after just 48 hours of zero artificial stimulus. The boredom is the medicine.",
      actionItems: [
        "Delete social media apps immediately",
        "Phone remains in another room 9PM-9AM",
        "Replace screen time with reading/nature",
        "Journal every urge you experience"
      ]
    },
    {
      icon: Droplet,
      title: "THERMAL SHOCK",
      subtitle: "250% Natural Dopamine",
      description: "Cold exposure is neurochemical warfare. Cold water immersion increases baseline dopamine by 250% for hours. Every cold shower trains your brain to lean into discomfort. It's the ultimate discipline builder.",
      actionItems: [
        "Daily cold shower (3-5 minutes)",
        "Focus on slow, rhythmic box breathing",
        "Start with 30s cold, increase 10s weekly",
        "Track your mental clarity post-shower"
      ]
    },
    {
      icon: Dumbbell,
      title: "THE 5-MINUTE BUFFER",
      subtitle: "Physical Override",
      description: "When an urge hits, you have a tiny window before your brain decides for you. In this window, you must reach physical failure. 100 pushups, 50 burpees, or max sprints. Exhaust the body to save the mind.",
      actionItems: [
        "Keep a workout area ready 24/7",
        "Set a 5-minute timer instantly on urge",
        "Push until complete muscular failure",
        "Victory is won in this 5-minute gap"
      ]
    },
    {
      icon: Smartphone,
      title: "ENVIRONMENT HACK",
      subtitle: "Friction Over Willpower",
      description: "Your environment is permanent; willpower is finite. Switch your phone to grayscale—it reduces usage by 40%. The bedroom is for sleep only. Make access to temptation require 15+ physical steps.",
      actionItems: [
        "Grayscale mode enabled on all devices",
        "Electronics-free zone in the bedroom",
        "Install aggressive website blockers",
        "Keep tech in common areas only"
      ]
    },
    {
      icon: Target,
      title: "THE APEX MISSION",
      subtitle: "Energy Transmutation",
      description: "Sexual energy and creative energy are the same force. Choose ONE high-stakes goal: a business, a competition, a master skill. Redirect the rising tide of energy into this mission. Create instead of consuming.",
      actionItems: [
        "Define your 90-day 'Impossible' goal",
        "2 hours of deep work daily on mission",
        "Find a mentor in your chosen field",
        "Create more than you consume daily"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-950 pb-32"
    >
      {/* Manifesto Modal */}
      <AnimatePresence>
        {isManifestoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsManifestoOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setIsManifestoOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-8 h-8 text-cyan-500" />
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">The Reset Manifesto</h2>
              </div>

              <div className="space-y-6 text-slate-300 font-medium leading-relaxed">
                <p className="text-xl text-white font-black italic border-l-4 border-cyan-500 pl-6">
                  "We are the architects of our own biological destiny."
                </p>
                <p>
                  Modern society has designed a cage of infinite scrolling, cheap dopamine, and digital shadows. They want you distracted. They want you weak. They want you harvested for your attention.
                </p>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex gap-4">
                    <span className="text-cyan-500 font-black">01</span>
                    <p><span className="text-white font-bold">RECLAIM YOUR ATTENTION.</span> Every second spent on a screen without purpose is a second stolen from your potential.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-cyan-500 font-black">02</span>
                    <p><span className="text-white font-bold">MASTER YOUR BIOLOGY.</span> Do not be a slave to your primitive urges. Use discomfort as a tool for evolution.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-cyan-500 font-black">03</span>
                    <p><span className="text-white font-bold">BUILD, DON'T CONSUME.</span> The world is split into those who create and those who are used. Choose your side.</p>
                  </div>
                </div>
                <p>
                  The loop ends here. The mission begins now. This is not just a reset—it is a reclamation of your sovereignty.
                </p>
                <button 
                  onClick={() => setIsManifestoOpen(false)}
                  className="w-full bg-cyan-500 text-black font-black py-4 rounded-xl mt-4 hover:bg-cyan-400 transition-colors uppercase tracking-widest"
                >
                  I Understood. Let's Work.
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation / Header */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" fill="currentColor" />
            </div>
            <span className="font-black tracking-tighter text-xl text-white">RESET<span className="text-cyan-500">PRO</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <button onClick={() => setIsManifestoOpen(true)} className="hover:text-cyan-400 transition-colors">The Manifesto</button>
            <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Community</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest mb-6"
          >
            Phase 01: The Neural Reset
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-none mb-8"
          >
            RECLAIM YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 underline decoration-white/10 decoration-8 underline-offset-8">DOMINANCE.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Five evidence-based protocols to rewire your brain, shatter the scroll cycle, and unlock your true biological potential.
          </motion.p>
        </div>
      </div>

      {/* Protocols Grid */}
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {protocols.map((protocol, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 hover:border-cyan-500/50 transition-all shadow-2xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-all"></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <protocol.icon className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <div className="text-cyan-400 text-sm font-black uppercase tracking-widest mb-1">{protocol.subtitle}</div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{protocol.title}</h3>
                </div>

                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {protocol.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {protocol.actionItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800/50 group-hover:border-cyan-500/20 transition-all">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      </div>
                      <span className="text-sm text-slate-300 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final Call to Action */}
      <div className="max-w-5xl mx-auto px-6 mt-32">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-cyan-500/20"
        >
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 relative z-10 uppercase tracking-tighter">
            Your Transformation <br />Starts <span className="underline decoration-white/30 italic">Now.</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Don't just bookmark this. Choose ONE protocol. Execute it for 24 hours. Prove to yourself that you are the master of your biology.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <a 
              href={COMMUNITY_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-3 group"
            >
              Join the 18,000+ Elite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => setIsManifestoOpen(true)}
              className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-colors"
            >
              Read the Manifesto
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-12 text-blue-100 font-bold uppercase tracking-widest text-xs opacity-60">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl text-white">94%</span>
              <span>Completion Rate</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl text-white">48h</span>
              <span>Initial Reset</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl text-white">30d</span>
              <span>Total Rewiring</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <footer className="mt-32 border-t border-slate-900 py-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-40">
          <div className="w-6 h-6 bg-slate-600 rounded flex items-center justify-center">
            <Zap className="w-3 h-3 text-black" fill="currentColor" />
          </div>
          <span className="font-black tracking-tighter text-slate-500">RESETPRO</span>
        </div>
        <p className="text-slate-600 text-sm font-medium italic">Dedicated to the seekers of true potential.</p>
      </footer>
    </motion.div>
  );
};

export default StepThree;
