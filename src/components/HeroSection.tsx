import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Activity, ArrowUpRight, Radio } from 'lucide-react';

const tickerPhrases = [
  "NEURAL BLOCKCHAIN NETWORK: CONNECTED VIA NODE_ID_77X",
  "GEN_AI MODELS DEPLOYED: GEMINI-1.5-FLASH INFRASTRUCTURE STATUS [STABLE]",
  "MARKET VOLATILITY INDEX MATRICES CALCULATED ACCORDING TO REALTIME TELEMETRY",
  "DECENTRALIZED RISK BALANCING SCHEMAS RECALIBRATING..."
];

export const AdvancedHero: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[85vh] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 lg:px-16 pt-12 overflow-hidden">
      
      {/* Left Column: Core Positioning Titles */}
      <div className="col-span-1 lg:col-span-7 flex flex-col space-y-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full text-xs text-cyan-400 font-mono tracking-wider w-fit backdrop-blur-md"
        >
          <Radio className="w-3 h-3 animate-pulse text-cyan-400" />
          <span>QUANTUM INTELLIGENCE PIPELINE V2.4 ONLINE</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]"
        >
          The Institutional <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">
            Neuro-Intelligence
          </span> Matrix
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed"
        >
          Execute complex vector semantic operations, stream multi-node market calculations, and process autonomous, real-time RAG intelligence down a unified interface thread.
        </motion.p>

        {/* Real-time Streaming Ticker Array */}
        <div className="h-8 bg-slate-950/60 border border-slate-800 rounded-md flex items-center px-4 overflow-hidden max-w-xl backdrop-blur-sm font-mono text-xs text-gray-400">
          <span className="text-cyan-500 font-bold mr-3 shrink-0">DIAGNOSTICS:</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={tickerIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="truncate text-slate-300"
            >
              {tickerPhrases[tickerIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Dynamic Interactive Call to Action Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <button className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-indigo-500 p-[1px] rounded-lg transition-transform active:scale-95">
            <span className="relative block px-6 py-3 rounded-[7px] bg-slate-950 text-white font-medium text-sm transition-colors group-hover:bg-transparent flex items-center gap-2">
              Initialize Neural Engine <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
          <button className="px-6 py-3 bg-slate-900/60 border border-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:text-white hover:bg-slate-900 transition-colors backdrop-blur-md">
            View Source Nodes
          </button>
        </motion.div>
      </div>

      {/* Right Column: Deep Asymmetrical Holographic Node Graphic Container */}
      <div className="col-span-1 lg:col-span-5 relative w-full flex items-center justify-center min-h-[350px]">
        {/* Outer Pulsing Radar Vector rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] border border-dashed border-cyan-500/20 rounded-full flex items-center justify-center"
        >
          <div className="w-[80%] h-[80%] border border-dotted border-indigo-500/20 rounded-full" />
        </motion.div>

        {/* Floating Holographic Glassmorphic Metrics Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [-10, 10, -10], opacity: 1 }}
          transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.4 } }}
          className="w-72 bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800 p-5 rounded-xl shadow-2xl backdrop-blur-xl z-20 relative"
        >
          <div className="absolute top-0 right-0 p-3 text-cyan-400">
            <Cpu className="w-5 h-5 animate-spin-slow" />
          </div>
          <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase">NEURAL MATRIX THREAD</span>
          <h3 className="text-xl font-bold text-white mt-1">Node Analytics</h3>
          
          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
              <span className="text-xs text-slate-400 flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-indigo-400" /> Security Array</span>
              <span className="text-xs font-mono font-bold text-emerald-400">99.98% AMBIENT</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
              <span className="text-xs text-slate-400 flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-cyan-400" /> Vector Matching</span>
              <span className="text-xs font-mono font-bold text-white">0.023ms</span>
            </div>
          </div>

          <div className="mt-6 pt-2 bg-cyan-950/20 rounded-lg p-2 border border-cyan-500/10 text-center">
            <span className="text-[11px] font-mono text-cyan-400">MODEL COMPLIANCE CALIBRATED</span>
          </div>
        </motion.div>
      </div>

    </div>
  );
};