import React, { useEffect, useState, useRef } from 'react';
import { Terminal, Shield, RefreshCw } from 'lucide-react';

interface TerminalLine {
  timestamp: string;
  system: string;
  message: string;
  code: 'SUCCESS' | 'WARN' | 'EXECUTION';
}

export const AdvancedSystemTerminal: React.FC = () => {
  const [logs, setLogs] = useState<TerminalLine[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const initialLogPhrases = [
    { sys: "SECURE_GATEWAY", msg: "Handshake initialized on routing port index 8000.", code: "SUCCESS" },
    { sys: "VECTOR_INDEX", msg: "In-Memory database matrix verification index loaded successfully.", code: "SUCCESS" },
    { sys: "AI_ORCHESTRATOR", msg: "Google Gemini Neural API connected via active configuration token keys.", code: "SUCCESS" },
    { sys: "RAG_PIPELINE", msg: "Context insertion layers aligned with standard query parameters.", code: "SUCCESS" }
  ];

  useEffect(() => {
    // Populate base array
    const baseLogs = initialLogPhrases.map(l => ({
      timestamp: new Date().toLocaleTimeString(),
      system: l.sys,
      message: l.msg,
      code: l.code as any
    }));
    setLogs(baseLogs);

    // Stream randomized telemetry update arrays over real time
    const streamInterval = setInterval(() => {
      const systems = ["NETWORK_SOCKET", "GEN_AI_MODEL", "SECURITY_CORE", "VECTOR_INDEX"];
      const messages = [
        "High-frequency market update packet broadcasted to linked frontend UI templates.",
        "Query processing stream initialized via dynamic content prompt matrix.",
        "System telemetry latency check: verified response delay within 22ms variance.",
        "Cleaning memory workspace arrays to recycle structural computing blocks."
      ];
      const codes = ["SUCCESS", "EXECUTION", "SUCCESS", "WARN"];
      const randomIndex = Math.floor(Math.random() * systems.length);

      setLogs((prev) => [
        ...prev.slice(-30), // Prevent stack overflows by matching index caps
        {
          timestamp: new Date().toLocaleTimeString(),
          system: systems[randomIndex],
          message: messages[randomIndex],
          code: codes[randomIndex] as any
        }
      ]);
    }, 2500);

    return () => clearInterval(streamInterval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full px-6 lg:px-16 py-8 text-white">
      <div className="bg-black/80 border border-slate-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl font-mono text-xs">
        
        {/* Terminal Header Bar Control Layout */}
        <div className="bg-slate-900/60 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-bold tracking-wide text-slate-300">SYSTEM TELEMETRY LOG CORE MATRIX</span>
          </div>
          <div className="flex items-center space-x-4 text-[10px] text-slate-500">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-500" /> SECURE GRID</span>
            <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3 text-cyan-500 animate-spin-slow" /> ASYNC BROADCASTING</span>
          </div>
        </div>

        {/* Console Readout Output Container */}
        <div 
          ref={scrollRef} 
          className="p-4 h-52 overflow-y-auto space-y-2.5 bg-slate-950/40 selection:bg-cyan-500/30 scrollbar-thin scrollbar-thumb-slate-800"
        >
          {logs.map((log, i) => (
            <div key={i} className="flex items-start space-x-2 leading-relaxed">
              <span className="text-slate-600 shrink-0">[{log.timestamp}]</span>
              <span className={`font-bold shrink-0 ${
                log.code === 'SUCCESS' ? 'text-emerald-400' :
                log.code === 'WARN' ? 'text-amber-400' : 'text-indigo-400'
              }`}>
                {log.system}:
              </span>
              <span className="text-slate-300 tracking-wide">{log.message}</span>
            </div>
          ))}
          {/* Terminal Blinking Cursor Element */}
          <div className="flex items-center space-x-1 pt-1">
            <span className="text-cyan-500 animate-pulse">■</span>
            <span className="text-slate-600 text-[10px] tracking-widest">AWAITING SYSTEM PAYLOAD STREAMS...</span>
          </div>
        </div>

      </div>
    </div>
  );
};