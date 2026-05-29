import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Compass, Flame, AlertCircle } from 'lucide-react';

interface InsightNode {
  id: string;
  type: 'CRITICAL' | 'OPTIMIZATION' | 'BALANCING';
  icon: React.ReactNode;
  heading: string;
  body: string;
  confidence: number;
}

const insightPayloads: InsightNode[] = [
  {
    id: "INS_01",
    type: "CRITICAL",
    icon: <Flame className="w-4 h-4 text-amber-400" />,
    heading: "Bitcoin Macro Ingestion Wave Vector Spiking",
    body: "Predictive neural clusters match standard macro price accumulation loops. Target layer accumulation zone shifts to L1 native secure blocks.",
    confidence: 94.2
  },
  {
    id: "INS_02",
    type: "OPTIMIZATION",
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    heading: "Ethereum Network Layer-2 Data Rollup Shift",
    body: "Gas metrics track historical low congestion blocks. Auto routing recommendation shifts execution stacks directly to optimized scaling frameworks.",
    confidence: 88.5
  },
  {
    id: "INS_03",
    type: "BALANCING",
    icon: <Compass className="w-4 h-4 text-indigo-400" />,
    heading: "Solana Transaction Pipeline Volatility Alert",
    body: "Short term transaction velocities suggest rapid shifting trends. High speed mitigation layer recommends deploying structural delta hedging layers.",
    confidence: 79.1
  }
];

export const AIIntelligenceEngine: React.FC = () => {
  return (
    <div className="w-full px-6 lg:px-16 py-8 text-white space-y-6">
      <div className="flex items-center space-x-3">
        <div className="bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-lg text-cyan-400">
          <BrainCircuit className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Autonomous AI Intelligence Stream</h2>
          <p className="text-xs text-slate-400 font-mono">NEURAL PREDICTIVE PATTERN ENGINE ONLINE</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insightPayloads.map((insight, idx) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.4)" }}
            className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl flex flex-col justify-between space-y-4 backdrop-blur-sm group relative overflow-hidden"
          >
            {/* Glowing Hover Accent Backdrop border */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  insight.type === 'CRITICAL' ? 'bg-amber-950/40 border-amber-500/30 text-amber-400' :
                  insight.type === 'OPTIMIZATION' ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400' :
                  'bg-indigo-950/40 border-indigo-500/30 text-indigo-400'
                }`}>
                  {insight.type}
                </span>
                <span className="text-[11px] font-mono text-slate-500">ID: {insight.id}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors pt-1">
                {insight.heading}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {insight.body}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800/60 pt-3 text-[11px] font-mono">
              <span className="text-slate-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-slate-500" /> System Confidence
              </span>
              <span className="text-cyan-400 font-bold">{insight.confidence}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};