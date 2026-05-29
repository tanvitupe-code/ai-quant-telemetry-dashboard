import React, { useState, useEffect } from 'react';
import { 
  Activity, Shield, Cpu, RefreshCw, Layers, Brain, 
  Terminal, BarChart2, TrendingUp, AlertTriangle, HelpCircle
} from 'lucide-react';

export default function Analytics() {
  // System Telemetry Metrics Tracker States
  const [totalQueries, setTotalQueries] = useState(48291);
  const [activeSessions, setActiveSessions] = useState(142);
  const [systemLatency, setSystemLatency] = useState(86);
  const [tokenUsage, setTokenUsage] = useState(842910);

  // Live Activity Logging Stack State
  const [feedLogs, setFeedLogs] = useState<string[]>([
    '[14:02:11] ETH Portfolio asset parameter matrices calibrated completely.',
    '[14:02:34] Deep RAG semantic vectors mapped onto target cluster index.',
    '[14:03:01] System Parameter Warning: High capital exposure risk profiles detected.'
  ]);

  // Real-time Data Automation Flow loops
  useEffect(() => {
    const monitoringTimer = setInterval(() => {
      setTotalQueries(q => q + Math.floor(Math.random() * 3) + 1);
      setActiveSessions(s => Math.max(130, Math.min(160, s + (Math.random() > 0.5 ? 1 : -1))));
      setSystemLatency(l => Math.max(78, Math.min(98, l + Math.floor(Math.random() * 5) - 2)));
      setTokenUsage(t => t + Math.floor(Math.random() * 45) + 10);

      // Randomly update system status stream log frames
      if (Math.random() > 0.7) {
        const events = [
          `📡 Broadcast market pipeline data streams updated across node interfaces.`,
          `🧠 Executed deep spatial semantic correlation search calculations.`,
          `⚠️ Volatility spike warnings parsed for cross-chain configurations.`
        ];
        const timestamp = new Date().toLocaleTimeString();
        const targetedMsg = `[${timestamp}] ${events[Math.floor(Math.random() * events.length)]}`;
        setFeedLogs(prev => [targetedMsg, ...prev.slice(0, 8)]);
      }
    }, 1500);

    return () => clearInterval(monitoringTimer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#030712] text-slate-100 p-4 md:p-6 font-sans tracking-tight selection:bg-cyan-500/30">
      
      {/* HEADER BANNER OVERLAY COMPONENT */}
      <div className="max-w-7xl mx-auto rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 shadow-2xl mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-1">
            <Activity className="w-4 h-4 animate-pulse text-cyan-500" /> Real-time System Telemetry Center
          </div>
          <h1 className="text-2xl font-black text-white tracking-wide">QUANT ANALYSIS CONTROL ROOM</h1>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 border border-emerald-500/20 rounded-xl text-xs font-mono font-bold text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Global Framework Active
        </div>
      </div>

      {/* COMMAND METRICS SELECTION PACKS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Aggregate Query Load', val: totalQueries.toLocaleString(), sub: '+4.2% Request Rate', color: 'text-cyan-400' },
          { label: 'Active Session Handshakes', val: activeSessions, sub: 'Nominal Operations', color: 'text-purple-400' },
          { label: 'Compute Engine Latency', val: `${systemLatency}ms`, sub: 'Optimized Parsing Speed', color: 'text-emerald-400' },
          { label: 'Tokens Consumed Index', val: tokenUsage.toLocaleString(), sub: 'Resource Usage Pool', color: 'text-amber-400' }
        ].map((m, i) => (
          <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-md p-4 space-y-1 relative overflow-hidden group hover:border-white/10 transition-all">
            <span className="text-[10px] text-neutral-400 font-mono block uppercase tracking-wider">{m.label}</span>
            <span className={`text-xl font-black font-mono block ${m.color}`}>{m.val}</span>
            <span className="text-[9px] text-neutral-500 font-mono block">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* CORE CONTROL GRID SYSTEMS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* GRAPH PLOT & QUANT ENGINE LAYOUT ROOM */}
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-xl p-6 space-y-4 shadow-xl">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono"><BarChart2 className="w-4 h-4 text-cyan-400" /> Vector Spatial Liquidity Volatility Distribution</h3>
            
            {/* HIGH-PERFORMANCE HIGH-DENSITY CANVAS GRAPH ENGINE DISPLAY PLATFORM */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-4 h-64 flex items-end justify-between relative overflow-hidden">
              <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-500 space-y-1">
                <div>Index Pool Range Upper Bounds: 100</div>
                <div>Index Pool Range Baseline Limits: 0</div>
              </div>
              
              {/* Native geometric computational design nodes mapping distribution curves */}
              {[34, 45, 23, 56, 68, 49, 72, 85, 61, 54, 79, 92].map((heightPct, idx) => (
                <div key={idx} className="w-[6%] group flex flex-col items-center gap-2 relative z-10" style={{ height: `${heightPct}%` }}>
                  <div className="w-full h-full bg-gradient-to-t from-cyan-600/40 to-cyan-400 rounded-t-md group-hover:brightness-125 transition-all relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 px-1 py-0.5 rounded text-[8px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Val: {heightPct}%</div>
                  </div>
                  <span className="text-[8px] text-neutral-500 font-mono absolute -bottom-5">M{idx+1}</span>
                </div>
              ))}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
            </div>
            <div className="pt-2" />
          </div>

          {/* ADVANCED DECISIONING AI STRATEGIC REPORT MODULE */}
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-slate-900 to-purple-950/30 p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03]"><Brain className="w-24 h-24 text-purple-400" /></div>
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 to-blue-600" />
            
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono"><Brain className="w-4 h-4 text-purple-400" /> Automated AI Management Risk Matrix</h3>
            
            <div className="bg-black/30 border border-purple-500/10 rounded-2xl p-4 space-y-3 font-mono text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <span className="text-amber-400 font-bold block uppercase text-[10px] tracking-wide">Macro Cluster Vulnerability Warning</span>
                  <p className="text-neutral-300 text-[11px] mt-0.5">Asset allocations reveal significant sensitivity vectors across high-volatility nodes. We recommend adjusting allocations toward stable infrastructure positions.</p>
                </div>
              </div>
              <div className="border-t border-white/[0.06] pt-2.5 flex items-center justify-between text-[11px]">
                <span className="text-neutral-500">System Evaluation Profile Code:</span>
                <span className="text-purple-300 font-bold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">MEDIUM-HIGH VARIANCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPREHENSIVE LIVE SYSTEM FEED STREAM CHANNEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 space-y-4 shadow-2xl flex flex-col h-full min-h-[460px]">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono"><Terminal className="w-4 h-4 text-cyan-400" /> Live Data Operations Stream</h3>
              <p className="text-[10px] text-neutral-400 font-mono mt-0.5">Real-time recording channel for distributed processing system activities.</p>
            </div>

            <div className="flex-1 bg-black/40 rounded-2xl p-4 border border-white/5 font-mono text-[10px] space-y-3 overflow-y-auto max-h-[380px] scrollbar-none shadow-inner">
              {feedLogs.map((log, index) => (
                <div key={index} className={`leading-relaxed border-b border-white/[0.02] pb-2 ${index === 0 ? 'text-cyan-400 font-bold animate-fadeIn' : 'text-neutral-400'}`}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}