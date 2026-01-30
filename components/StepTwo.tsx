
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronRight, AlertTriangle, ShieldAlert } from 'lucide-react';
import { StepTwoProps } from '../types';

const StepTwo: React.FC<StepTwoProps> = ({ onProceed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2, filter: "brightness(2) contrast(2)" }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        filter: "brightness(1) contrast(1.2)",
      }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Glitch CRT Overlay Layer */}
      <motion.div
        className="fixed inset-0 z-40 pointer-events-none"
        animate={{
          opacity: [0.1, 0.3, 0.1, 0.4, 0.2]
        }}
        transition={{ duration: 0.2, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.02),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]"></div>
      </motion.div>

      {/* Background Video Layer (The Intervention) */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale brightness-50 contrast-125"
        >
          {/* Using a placeholder of a serious speaker to match the discipline/intervention theme */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-looking-intently-at-the-camera-42520-large.mp4" type="video/mp4" />
        </video>
        
        {/* Color Grade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-cyan-900/10 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-50 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        
        {/* Floating Warning Icons */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-12 opacity-30">
          <ShieldAlert className="w-12 h-12 text-cyan-500 animate-pulse" />
          <AlertTriangle className="w-12 h-12 text-cyan-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <ShieldAlert className="w-12 h-12 text-cyan-500 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          animate={{
            x: [-2, 2, -1, 1, 0],
            skewX: [0, 10, -10, 5, 0]
          }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-9xl font-black text-center leading-[0.85] tracking-tighter uppercase italic">
            <span className="text-white">WAKE UP.</span>
            <br />
            <span className="text-cyan-500 text-shadow-[0_0_20px_rgba(6,182,212,0.8)]">YOU'RE</span>
            <br />
            <span className="text-white opacity-20">HARVESTED.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl bg-black/80 border-t-4 border-b-4 border-cyan-500/50 backdrop-blur-2xl p-8 md:p-14 mb-16 shadow-[0_0_100px_-20px_rgba(6,182,212,0.3)] relative"
        >
          {/* Decorative Corner Bits */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

          <div className="space-y-8 text-white text-xl leading-relaxed font-bold">
            <p className="text-3xl font-black text-cyan-400 uppercase tracking-tighter flex items-center gap-4">
              <Zap className="w-8 h-8 fill-cyan-400" />
              This is an intervention.
            </p>

            <p className="text-gray-300">
              You just tried to enter the <span className="text-red-500 line-through decoration-white underline-offset-4 decoration-2 italic">Baddie Vault</span>. 
              Your primitive brain was seeking a cheap dopamine hit. You were ready to exchange your <span className="text-cyan-400 font-black">limited existence</span> for digital shadows.
            </p>

            <div className="grid md:grid-cols-2 gap-6 py-6 border-y border-white/10">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">The Scroll Trap</p>
                <ul className="text-base space-y-2 opacity-60">
                  <li>• Brain-fog accumulation</li>
                  <li>• Focus depletion</li>
                  <li>• Willpower leakage</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-white">The Apex Path</p>
                <ul className="text-base space-y-2 text-cyan-400">
                  <li>• Deep Work Dominance</li>
                  <li>• High-Output Systems</li>
                  <li>• Physical Sovereignty</li>
                </ul>
              </div>
            </div>

            <p className="text-2xl font-black text-center text-white bg-cyan-500/10 py-4 rounded-lg">
              SOCIETY WANTS YOU DOCILE.
            </p>

            <p className="text-center italic text-gray-400 text-lg">
              The loop ends here. Either you continue the spiral of a consumer, <br />
              or you emerge as the <span className="text-white font-black not-italic uppercase tracking-widest underline decoration-cyan-500">Architect</span> of your life.
            </p>
          </div>
        </motion.div>

        <motion.button
          onClick={onProceed}
          className="w-full max-w-2xl bg-cyan-500 text-black text-2xl md:text-4xl font-black py-8 rounded-2xl border-b-[10px] border-cyan-800 shadow-[0_30px_100px_rgba(6,182,212,0.5)] relative overflow-hidden active:border-b-0 active:translate-y-2 transition-all uppercase italic tracking-tighter flex items-center justify-center gap-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <Zap className="w-10 h-10 fill-current" />
          Kill the Consumer
          <ChevronRight className="w-10 h-10" />
        </motion.button>
        
        <div className="mt-8 text-cyan-500 font-mono text-[10px] tracking-[0.5em] animate-pulse uppercase">
          Neural_Reset_Protocol_Ready_For_Execution
        </div>
      </div>
    </motion.div>
  );
};

export default StepTwo;
