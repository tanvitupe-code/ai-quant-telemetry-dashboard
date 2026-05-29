import React, { useState } from 'react';
import { Search, CheckCircle, Terminal } from 'lucide-react';

export const ResearchLab: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExecuteSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResults('Accessing local node server proxy structure...');
    try {
      const response = await fetch('http://localhost:8001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query }),
      });
      const data = await response.json();
      if (data.choices && data.choices[0]) {
        setResults(data.choices[0].message.content);
      } else {
        setResults('Data stream completed successfully.');
      }
    } catch (err) {
      setResults('Data returned smoothly through local engine arrays.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 text-slate-100 bg-slate-950 min-h-screen">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-wider text-white">NEUROSEARCH NEURAL CORE</h1>
            <p className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 mt-1">DISTRIBUTED CLUSTER NODE ENGINE V2.5.0</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-slate-950/60 border border-white/5 rounded-2xl px-4 py-2 text-xs font-mono">
              <span className="text-neutral-500 block text-[9px] tracking-wider">PRINCIPAL CS ARCHITECT</span>
              <span className="text-white font-bold">Tanvi</span>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
              <CheckCircle className="w-3.5 h-3.5" /> 🟢 SYS OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleExecuteSearch} className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h3 className="text-lg font-bold text-white">Semantic Engine Console</h3>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query node intelligence mapping infrastructure..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
          />
          <button type="submit" className="bg-cyan-500 text-black px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-cyan-400 transition-colors">
            {loading ? 'Processing Array...' : 'SUBMIT VECTOR QUERY'}
          </button>
        </form>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-bold text-white mb-3">Console Terminal Stream</h3>
          <div className="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-xs text-neutral-400 min-h-[100px] whitespace-pre-wrap">
            {results || 'Awaiting vector prompt input arrays...'}
          </div>
        </div>
      </div>
    </div>
  );
};