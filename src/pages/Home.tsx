import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Cpu, BarChart3, ArrowUpRight, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 pt-32 pb-24"
    >
      {/* Hero Section Banner */}
      <div className="text-center mb-24 relative">
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-widest uppercase mb-6 shadow-sm"
        >
          <Zap className="w-3.5 h-3.5 animate-pulse" /> Intelligence Infrastructure Unleashed
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 max-w-5xl mx-auto leading-none mb-8"
        >
          Search with <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">Semantic Authority</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-12"
        >
          Experience NeuroSearch AI: A multi-vector corporate intelligence platform executing real-time context mapping, semantic document processing, and deterministic RAG calculations.
        </motion.p>

        {/* Cinematic Call to Action Systems */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <button 
            onClick={() => onNavigate('search')}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold shadow-lg hover:bg-neutral-100 transition-all duration-300 relative overflow-hidden"
          >
            Launch Search Engine
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button 
            onClick={() => onNavigate('analytics')}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel text-white font-medium hover:bg-white/5 transition-all duration-300"
          >
            <BarChart3 className="w-4 h-4 text-purple-400" /> Enterprise Metrics
          </button>
        </motion.div>
      </div>

      {/* Feature Architecture Matrix Blocks */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5"
      >
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
            <Search className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">Vector Proximity RAG</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Transforms unindexed enterprise documentation storehouses into localized structural multi-dimensional vector systems.</p>
        </div>

        <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
            <Cpu className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">Context Shrinkage Matrix</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Compresses multi-page search scopes down to critical intelligence bytes, bypassing prompt inflation.</p>
        </div>

        <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
            <Shield className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">Deterministic Lineage</h3>
          <p className="text-neutral-400 text-sm leading-relaxed">Each token stream displays clear trace links back to the source document, eliminating hallucination risks.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
