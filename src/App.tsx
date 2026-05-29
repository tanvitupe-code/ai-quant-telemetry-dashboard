import React, { useState, useEffect } from 'react';
import { CinematicBackground } from './components/CinematicBackground';
import { AdvancedHero } from './components/HeroSection';
import { AdvancedAnalyticsDashboard } from './components/Analytics';
import { AIIntelligenceEngine } from './components/AiInsights';
import { AdvancedSystemTerminal } from './components/SystemTerminal';
import { Layers, Activity, Search, ShieldCheck, Wallet } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'COMMAND' | 'ANALYTICS'>('COMMAND');
  
  // Interactive state nodes for full-page interactivity layout
  const [searchQuery, setSearchQuery] = useState('');
  const [lastExecutedQuery, setLastExecutedQuery] = useState('');
  const [cryptoRange, setCryptoRange] = useState<string>('');

  // Explicit tracking nodes to pass down to analytics safely
  const [activeToken, setActiveToken] = useState<string>('BTC');
  const [activeAmount, setActiveAmount] = useState<number>(65000);

  // Global ticker pulse combined with user query logic to drive curves dynamically
  const [livePulse, setLivePulse] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse(prev => prev + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Process inputs like "BTC 68000" dynamically on click execution
  const handleExecuteSearch = () => {
    const queryTrimmed = searchQuery.trim();
    if (!queryTrimmed) return;

    setLastExecutedQuery(queryTrimmed);
    
    const parts = queryTrimmed.split(' ');
    const symbol = parts[0].toUpperCase();
    const typedNumber = parts[1] ? parseFloat(parts[1]) : null;

    setActiveToken(symbol);
    if (typedNumber && !isNaN(typedNumber)) {
      setActiveAmount(typedNumber);
    } else {
      if (symbol === 'BTC') setActiveAmount(65000);
      else if (symbol === 'ETH') setActiveAmount(3500);
      else if (symbol === 'SOL') setActiveAmount(175);
      else setActiveAmount(100);
    }

    let computedRange = '';
    if (typedNumber && !isNaN(typedNumber)) {
      const low = typedNumber * 0.96;
      const high = typedNumber * 1.04;
      computedRange = `$${low.toLocaleString(undefined, {maximumFractionDigits:2})} - $${high.toLocaleString(undefined, {maximumFractionDigits:2})}`;
    } else {
      if (symbol === 'BTC') {
        computedRange = '$64,250.00 - $69,110.00';
      } else if (symbol === 'ETH') {
        computedRange = '$3,440.00 - $3,710.00';
      } else if (symbol === 'SOL') {
        computedRange = '$165.00 - $182.50';
      } else {
        const fakeSeed = symbol.charCodeAt(0) ? symbol.charCodeAt(0) * 5 : 100;
        computedRange = `$${(fakeSeed * 0.9).toFixed(2)} - $${(fakeSeed * 1.1).toFixed(2)}`;
      }
    }

    setCryptoRange(computedRange);
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-cyan-500/20 overflow-x-hidden">
      
      {/* 1. Mount Cinematic Animated Canvas Engine */}
      <CinematicBackground />

      {/* 2. Global Cyberpunk Navigation Layout Shell */}
      <nav className="w-full bg-slate-950/40 border-b border-slate-900 sticky top-0 z-50 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center font-black text-black text-sm">
            N
          </div>
          <span className="text-lg font-black tracking-wider text-white">
            NEURO<span className="text-cyan-400">SEARCH</span> <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-1 py-0.5 rounded ml-1">2.0</span>
          </span>
        </div>

        {/* Central Switch Tabs Routing Node Container */}
        <div className="hidden md:flex items-center bg-slate-900/60 p-1 border border-slate-800 rounded-lg font-mono text-xs">
          <button 
            type="button"
            onClick={() => setActiveTab('COMMAND')}
            className={`px-4 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${activeTab === 'COMMAND' ? 'bg-cyan-500 text-black font-bold shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            <Layers className="w-3.5 h-3.5" /> COMMAND CENTER
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('ANALYTICS')}
            className={`px-4 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${activeTab === 'ANALYTICS' ? 'bg-cyan-500 text-black font-bold shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            <Activity className="w-3.5 h-3.5" /> QUANT ANALYTICS
          </button>
        </div>

        {/* Global Connection Trigger Control Panel buttons */}
        <div className="flex items-center space-x-3">
          <button 
            type="button"
            onClick={() => alert("Secure Node API Token handshake verified. Diagnostics stream connected.")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-800 hover:border-slate-700 bg-slate-900/30 text-slate-300 hover:text-white transition-all text-xs font-mono rounded-lg backdrop-blur-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> API SECURE
          </button>
          <button 
            type="button"
            onClick={() => alert("Connecting local browser wallet extension node link...")}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 font-bold text-xs rounded-lg shadow-xl hover:brightness-110 active:scale-95 transition-all"
          >
            <Wallet className="w-3.5 h-3.5" /> Connect Wallet
          </button>
        </div>
      </nav>

      {/* 3. Conditional Dynamic Workspace Rendering Router Module */}
      <main className="w-full relative pb-16">
        {activeTab === 'COMMAND' ? (
          <div className="space-y-4">
            <AdvancedHero />
            
            {/* User Text Vector Query Input Panel */}
            <div className="max-w-4xl mx-auto px-6 mt-4">
              <div className="bg-slate-900/40 border border-slate-800 focus-within:border-cyan-500/40 transition-colors p-2 rounded-xl flex items-center gap-3 backdrop-blur-md">
                <Search className="w-5 h-5 text-slate-500 ml-2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleExecuteSearch()}
                  placeholder="Execute global semantic macro vector query against active neural space layers..." 
                  className="bg-transparent text-white font-sans text-sm outline-none w-full placeholder-slate-500"
                />
                <button 
                  type="button"
                  onClick={handleExecuteSearch}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs px-4 py-2 rounded-lg border border-slate-700 transition-colors"
                >
                  EXECUTE
                </button>
              </div>

              {/* Dynamic Information Display Box */}
              {lastExecutedQuery && (
                <div className="mt-3 p-4 bg-slate-900/70 border border-cyan-500/20 rounded-xl font-mono text-xs backdrop-blur-md flex justify-between items-center transition-all animate-fadeIn">
                  <div>
                    <span className="text-slate-500 text-[10px] block">ACTIVE EVALUATION PROMPT</span>
                    <span className="text-white font-sans font-bold text-sm tracking-wide">{lastExecutedQuery.toUpperCase()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-cyan-400 text-[10px] block">CALCULATED VALUATION RANGE</span>
                    <span className="text-emerald-400 font-bold text-sm font-mono">{cryptoRange}</span>
                  </div>
                </div>
              )}
            </div>

            <AIIntelligenceEngine />
            <AdvancedSystemTerminal />
          </div>
        ) : (
          /* Passing explicit values directly avoids flat lines and instantly transforms graph coordinates */
          <AdvancedAnalyticsDashboard 
            tokenSymbol={activeToken} 
            customAmount={activeAmount} 
            key={`${activeToken}-${activeAmount}-${livePulse}`}
          />
        )}
      </main>

    </div>
  );
}