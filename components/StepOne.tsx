
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Shield, Zap, Lock, Unlock, ChevronRight, AlertCircle, Camera, Activity } from 'lucide-react';
import { StepOneProps } from '../types';

const StepOne: React.FC<StepOneProps> = ({ onUnlock, activeUsers, showNotification }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen selection:bg-red-600 selection:text-white"
    >
      {/* Glitch Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/90 to-transparent p-6 pointer-events-none">
        <motion.h1
          className="text-4xl md:text-6xl font-black text-center"
          animate={{
            textShadow: [
              "0 0 10px #8B0000",
              "2px 2px 20px #8B0000, -2px -2px 20px #FF0000",
              "0 0 10px #8B0000"
            ]
          }}
          transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        >
          <span className="text-white">BADDIE VAULT</span>
          <span className="text-red-600">:</span>
          <span className="block text-2xl md:text-3xl mt-2 text-red-500 tracking-tighter">PRIVATE ACCESS v4.2</span>
        </motion.h1>
      </div>

      {/* Background Video Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Dark Red Overlay for theme consistency */}
        <div className="absolute inset-0 bg-red-950/20 mix-blend-color z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10 pointer-events-none"></div>
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale-[0.3] brightness-[0.7] contrast-[1.2]"
        >
          {/* Using a high-energy urban/fashion placeholder video that mimics the user's content style */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-a-nightclub-with-neon-lights-42521-large.mp4" type="video/mp4" />
        </video>

        {/* CRT & Scanline Effects */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(255,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,4px_100%] z-20"></div>
        
        {/* Moving scanner line */}
        <motion.div 
          className="absolute inset-0 w-full h-[2px] bg-red-600/30 z-20 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-30 pt-48 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* HUD UI Elements */}
        <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 space-y-8 opacity-40">
          <div className="text-[10px] font-mono text-red-500 vertical-text rotate-180 uppercase tracking-[0.5em]">System_Online_Status_True</div>
          <div className="w-[1px] h-32 bg-red-900/50 mx-auto"></div>
          <Activity className="w-5 h-5 text-red-500 animate-pulse mx-auto" />
        </div>

        {/* Live Status Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="bg-black/80 border border-red-900/50 rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg backdrop-blur-md">
            <div className="relative">
              <Users className="w-6 h-6 text-red-500" />
              <motion.div 
                className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Active Now</div>
              <div className="text-xl font-black text-white">{activeUsers.toLocaleString()}</div>
            </div>
          </div>
          <div className="bg-black/80 border border-red-900/50 rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg backdrop-blur-md">
            <Shield className="w-6 h-6 text-red-500" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Security</div>
              <div className="text-xl font-black text-white">LEVEL 4</div>
            </div>
          </div>
          <div className="bg-black/80 border border-red-900/50 rounded-xl px-6 py-4 flex items-center gap-4 shadow-lg backdrop-blur-md font-mono">
            <Camera className="w-6 h-6 text-red-500" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Uptime</div>
              <div className="text-xl font-black text-white">{time.toLocaleTimeString()}</div>
            </div>
          </div>
        </motion.div>

        {/* Main Vault Preview Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-[10px] font-black uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
              Live Archive Feed
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              THE <span className="text-red-600 italic">UNFILTERED</span> <br />COLLECTION
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-medium border-l-2 border-red-600/30 pl-6">
              Access the private archives of the internet's most elite personalities. Every 24 hours, our automated systems decrypt fresh, deleted, and exclusive content that never hits the public feed.
            </p>
            <div className="flex gap-4">
              <div className="bg-red-900/20 p-4 rounded-2xl border border-red-900/30">
                <div className="text-red-500 font-black text-xl">1.2TB+</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold">Storage</div>
              </div>
              <div className="bg-red-900/20 p-4 rounded-2xl border border-red-900/30">
                <div className="text-red-500 font-black text-xl">4K UHD</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold">Resolution</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="relative group cursor-crosshair"
          >
            {/* The "Leaked" Video Window */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.2)] aspect-[4/5] md:aspect-square">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-a-nightclub-with-neon-lights-42521-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay"></div>
              
              {/* Overlay HUD on Video */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-white text-[10px] font-mono font-bold tracking-tighter">REC: 00:{Math.floor(Math.random()*60).toString().padStart(2, '0')}:22</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="text-[10px] font-mono text-white/60">
                  ISO: 800 <br />
                  F/1.8 <br />
                  30 FPS
                </div>
                <div className="w-12 h-12 border-2 border-red-600/50 rounded-full flex items-center justify-center">
                  <Unlock className="w-5 h-5 text-red-500 group-hover:animate-bounce" />
                </div>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-600"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-red-600"></div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <motion.button
            onClick={onUnlock}
            className="w-full bg-gradient-to-br from-red-700 to-red-600 text-white text-2xl md:text-3xl font-black py-8 rounded-2xl border-b-8 border-red-900 shadow-[0_20px_60px_rgba(185,28,28,0.4)] relative overflow-hidden group active:border-b-0 active:translate-y-2 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(139,0,0,0.4)",
                "0 0 60px rgba(255,0,0,0.6)",
                "0 0 30px rgba(139,0,0,0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative flex items-center justify-center gap-4 uppercase tracking-tighter">
              <Unlock className="w-8 h-8" />
              Gain Private Entry
              <ChevronRight className="w-8 h-8" />
            </span>
          </motion.button>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2"><Lock className="w-3 h-3" /> Encrypted Access</span>
            <span className="flex items-center gap-2"><Shield className="w-3 h-3" /> Anon Protocol</span>
            <span className="flex items-center gap-2"><Zap className="w-3 h-3" /> Instant Bypass</span>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            className="fixed bottom-8 right-8 bg-black/95 border border-red-700/50 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[100] max-w-xs backdrop-blur-xl"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-900/40 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="font-black text-white text-sm uppercase tracking-tight">System Notice</div>
                <div className="text-xs text-gray-400 mt-1">Archive ID_{Math.floor(Math.random() * 9000) + 1000} successfully decrypted.</div>
                <div className="text-[10px] text-red-500 font-bold mt-2 uppercase">Now Available</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StepOne;
