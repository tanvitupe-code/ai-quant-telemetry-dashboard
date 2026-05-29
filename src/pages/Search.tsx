import React, { useState, useEffect } from 'react';
import { 
  Play, Coins, Terminal, Activity, RefreshCw, Layers, Brain, 
  Search as SearchIcon, Cpu, Wallet, Sparkles, Database, BarChart2
} from 'lucide-react';

interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  network: string;
  holdings: number;
  livePriceUSD: number;
  change24h: number;
  totalValueUSD: number;
  priceHistory: number[];
  rsi: number;
  signal: 'STRONG BUY' | 'BUY' | 'HOLD' | 'REBALANCE';
}

export default function Search() {
  const [assets, setAssets] = useState<CryptoAsset[]>([
    { id: 'btc', symbol: 'BTC', name: 'Bitcoin Sovereign Node', network: 'Bitcoin Native Layer-1', holdings: 0.85, livePriceUSD: 67420.50, change24h: 4.82, totalValueUSD: 57307.42, priceHistory: [64200, 65100, 64900, 66200, 67420.50], rsi: 68, signal: 'STRONG BUY' },
    { id: 'eth', symbol: 'ETH', name: 'Ethereum Gas Cluster', network: 'Ethereum Mainnet Layer-1', holdings: 4.5, livePriceUSD: 3452.10, change24h: 2.15, totalValueUSD: 15534.45, priceHistory: [3310, 3390, 3420, 3410, 3452.10], rsi: 54, signal: 'BUY' },
    { id: 'sol', symbol: 'SOL', name: 'Solana High-Velocity Engine', network: 'Solana L1 Core', holdings: 65.0, livePriceUSD: 164.85, change24h: -1.45, totalValueUSD: 10715.25, priceHistory: [172, 169, 168, 164, 164.85], rsi: 42, signal: 'HOLD' }
  ]);

  const [tokenInput, setTokenInput] = useState('');
  const [networkInput, setNetworkInput] = useState('Ethereum Mainnet Layer-1');
  const [holdingsInput, setHoldingsInput] = useState('5');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isWalletConnecting, setIsWalletConnecting] = useState(false);

  const [simulationYears, setSimulationYears] = useState(3);
  const [expectedYieldRate, setExpectedYieldRate] = useState(12);

  const [ragQuery, setRagQuery] = useState('');
  const [aiIsThinking, setAiIsThinking] = useState(false);
  const [thinkingStep, setThinkingStep] = useState('');
  const [streamingText, setStreamingText] = useState('');
  const [aiMetrics, setAiMetrics] = useState<{ confidence: number; sources: string[] } | null>(null);

  const [globalQueries, setGlobalQueries] = useState(2841);
  const [lastTickerUpdate, setLastTickerUpdate] = useState('0.0s ago');
  const [bitcoinBlockCountdown, setBitcoinBlockCountdown] = useState(194200);

  const initialPrincipalInvestment = 45000;
  const grandTotalPortfolioValueUSD = assets.reduce((sum, item) => sum + item.totalValueUSD, 0);
  const netCapitalGrowthUSD = grandTotalPortfolioValueUSD - initialPrincipalInvestment;
  const standardROIPercentage = (netCapitalGrowthUSD / initialPrincipalInvestment) * 100;

  const compoundFutureValueUSD = grandTotalPortfolioValueUSD * Math.pow((1 + (expectedYieldRate / 100)), simulationYears);

  useEffect(() => {
    let internalClock = 0;
    const socketLoop = setInterval(() => {
      internalClock += 0.4;
      setLastTickerUpdate(`${internalClock.toFixed(1)}s ago`);
      setBitcoinBlockCountdown(prev => prev - (Math.random() > 0.95 ? 1 : 0));

      setAssets(prevAssets => {
        if (prevAssets.length === 0) return prevAssets;
        const indexToTick = Math.floor(Math.random() * prevAssets.length);
        return prevAssets.map((asset, idx) => {
          if (idx === indexToTick) {
            const pricingVolatilityFactor = (Math.random() - 0.48) * 0.008;
            const updatedPrice = asset.livePriceUSD * (1 + pricingVolatilityFactor);
            const recalculatedValue = asset.holdings * updatedPrice;
            
            const newRsi = Math.max(20, Math.min(90, asset.rsi + (Math.random() - 0.5) * 3));
            let adaptiveSignal: 'STRONG BUY' | 'BUY' | 'HOLD' | 'REBALANCE' = 'HOLD';
            if (newRsi > 70) adaptiveSignal = 'REBALANCE';
            else if (newRsi < 45) adaptiveSignal = 'STRONG BUY';
            else if (newRsi >= 45 && newRsi <= 70) adaptiveSignal = 'BUY';

            return {
              ...asset,
              livePriceUSD: updatedPrice,
              totalValueUSD: recalculatedValue,
              rsi: newRsi,
              signal: adaptiveSignal,
              priceHistory: [...asset.priceHistory.slice(1), updatedPrice]
            };
          }
          return asset;
        });
      });

      if (Math.random() > 0.85) {
        internalClock = 0;
        setGlobalQueries(prev => prev + 1);
      }
    }, 400);

    return () => clearInterval(socketLoop);
  }, []);

  const handleConnectWallet = () => {
    setIsWalletConnecting(true);
    setTimeout(() => {
      setWalletAddress('0x71C...3a92');
      setIsWalletConnecting(false);
    }, 1000);
  };

  const handleExecuteAISearch = async () => {
    if (!ragQuery.trim()) return;
    setAiIsThinking(true);
    setStreamingText('');
    setAiMetrics(null);

    const computationalRacks = [
      '⚡ Mapping asset ledger structures onto Neural RAG Vector database...',
      '🔍 Querying localized macro liquidity parameters and sentiment indices...',
      '📈 Modeling algorithmic yield projection tables against target prompt...'
    ];

    for (const phrase of computationalRacks) {
      setThinkingStep(phrase);
      await new Promise(res => setTimeout(res, 600));
    }

    setAiIsThinking(false);
    const contextMap = ragQuery.toLowerCase();
    let queryResponseOutput = '';
    
    if (contextMap.includes('bitcoin') || contextMap.includes('btc') || contextMap.includes('money')) {
      queryResponseOutput = `💡 [NEUROSEARCH PORTFOLIO STRATEGY ENGINE]: To effectively scale your current capital volume ($${grandTotalPortfolioValueUSD.toLocaleString(undefined,{maximumFractionDigits:2})}), the system detects an optimized path via automated layer-1 yield protocols. Bitcoin volatility data suggests macro-accumulation parameters. Allocating a steady DCA profile while your portfolio RSI balances under 60 provides historically verified structural growth patterns. Recommended framework target is 12.5% annualized exposure adjustments.`;
    } else {
      queryResponseOutput = `💡 [NEUROSEARCH PORTFOLIO STRATEGY ENGINE]: Vector database synthesis complete. Current portfolio structure is evaluated with an aggregate capital balance of $${grandTotalPortfolioValueUSD.toLocaleString(undefined, {maximumFractionDigits:2})}. Scaling strategy requires capital reallocation into Layer-2 liquid networks. Aggregated asset signals suggest continuous yield accumulation sequences.`;
    }

    let pointer = 0;
    const streamSpeedTimer = setInterval(() => {
      if (pointer < queryResponseOutput.length) {
        const char = queryResponseOutput.charAt(pointer);
        setStreamingText(prev => prev + char);
        pointer++;
      } else {
        clearInterval(streamSpeedTimer);
        setAiMetrics({
          confidence: 97.4,
          sources: ['CoinGecko Node API', 'Glassnode On-Chain Data Cluster', 'NeuroSearch Math Matrix']
        });
      }
    }, 10);
  };

  const handleCompileAssetNode = () => {
    if (!tokenInput.trim()) return;
    const identifierCallsign = tokenInput.trim().toUpperCase();
    const volumeQuantity = parseFloat(holdingsInput) || 0;

    let calibratedPriceBase = 42.10;
    if (identifierCallsign === 'BTC') calibratedPriceBase = 67400;
    if (identifierCallsign === 'ETH') calibratedPriceBase = 3450;

    const customGeneratedAsset: CryptoAsset = {
      id: `${identifierCallsign.toLowerCase()}-${Date.now()}`,
      symbol: identifierCallsign,
      name: `${identifierCallsign} Compiled Node Structure`,
      network: networkInput,
      holdings: volumeQuantity,
      livePriceUSD: calibratedPriceBase,
      change24h: 1.45,
      totalValueUSD: volumeQuantity * calibratedPriceBase,
      rsi: 50,
      signal: 'BUY',
      priceHistory: [calibratedPriceBase * 0.95, calibratedPriceBase * 0.98, calibratedPriceBase]
    };

    setAssets(prev => [customGeneratedAsset, ...prev]);
    setTokenInput('');
  };

  const renderAdvancedSparkline = (history: number[], isPositive: boolean) => {
    if (!history || history.length < 2) return null;
    const boundaryMin = Math.min(...history);
    const boundaryMax = Math.max(...history);
    const numericalDelta = boundaryMax - boundaryMin === 0 ? 1 : boundaryMax - boundaryMin;
    const plotWidth = 140;
    const plotHeight = 36;

    const geometricCoordinates = history.map((val, position) => {
      const coordinateX = (position / (history.length - 1)) * plotWidth;
      const coordinateY = plotHeight - ((val - boundaryMin) / numericalDelta) * plotHeight;
      return `${coordinateX},${coordinateY}`;
    }).join(' ');

    const lineStrokeColor = isPositive ? '#10b981' : '#f43f5e';
    return (
      <svg width={plotWidth} height={plotHeight} className="overflow-visible inline-block">
        <path d={`M ${geometricCoordinates}`} fill="none" stroke={lineStrokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#020617] text-slate-100 p-4 md:p-6 font-sans tracking-tight">
      <div className="max-w-7xl mx-auto rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 shadow-2xl mb-6 relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent" />
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-2">
              <span className="flex items-center gap-1.5 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-400/20">
                AI Core Active
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-purple-400 font-bold">{globalQueries} Mappings / Sec</span>
              <span className="text-neutral-600">•</span>
              <span className="text-emerald-400">Refresh: {lastTickerUpdate}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase">NeuroSearch Intelligence Hub</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button onClick={handleConnectWallet} className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 border bg-white/[0.03] border-white/10 text-neutral-200">
              <Wallet className="w-4 h-4 text-cyan-400" />
              {isWalletConnecting ? 'Syncing...' : walletAddress ? `Node Linked` : 'Hook Web3 Link'}
            </button>
            <div className="bg-black/40 border border-white/10 px-4 py-2 rounded-xl text-right font-mono min-w-[170px]">
              <span className="text-[9px] text-neutral-500 block uppercase font-bold text-left">LEDGER CAP VALUE</span>
              <span className="text-lg font-black text-cyan-400">${grandTotalPortfolioValueUSD.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Initial Investment', val: `$${initialPrincipalInvestment.toLocaleString()}`, trend: 'Base Cost Limit' },
          { label: 'Net Capital Shift', val: `$${netCapitalGrowthUSD.toLocaleString(undefined, {maximumFractionDigits:2})}`, trend: netCapitalGrowthUSD >= 0 ? '📈 SURPLUS' : '📉 DEFICIT' },
          { label: 'Growth ROI Rate', val: `${standardROIPercentage.toFixed(2)}%`, trend: 'System Performance' },
          { label: 'Halving Vector Countdown', val: `${bitcoinBlockCountdown.toLocaleString()} Blocks`, trend: 'Supply Shift Rate' }
        ].map((block, idx) => (
          <div key={idx} className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-4 space-y-1">
            <span className="text-[10px] text-neutral-400 font-mono block uppercase tracking-wider">{block.label}</span>
            <span className="text-lg font-black font-mono block text-white">{block.val}</span>
            <span className="text-[9px] text-neutral-500 font-mono block">{block.trend}</span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.01] p-6 space-y-4 shadow-xl">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono"><Layers className="w-4 h-4 text-cyan-400" /> Operational Token Compiler</h3>
            <div className="space-y-3">
              <div>
                <input type="text" value={tokenInput} onChange={(e) => setTokenInput(e.target.value)} placeholder="e.g. BTC, ETH, SOL" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs text-white font-mono outline-none focus:border-cyan-500" />
              </div>
              <div>
                <select value={networkInput} onChange={(e) => setNetworkInput(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs text-white font-mono outline-none" >
                  <option>Ethereum Mainnet Layer-1</option>
                  <option>Bitcoin Native Layer-1</option>
                  <option>Solana L1 Core</option>
                </select>
              </div>
              <div>
                <input type="number" value={holdingsInput} onChange={(e) => setHoldingsInput(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-xs text-white font-mono outline-none" />
              </div>
              <button onClick={handleCompileAssetNode} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5"><Play className="w-3.5 h-3.5 fill-slate-950" /> Compile Node parameters</button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-slate-900/40 p-6 space-y-4 shadow-xl">
            <div className="text-purple-400 font-mono text-xs uppercase font-bold tracking-wide">
              Compound Capital Simulator
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <div className="flex justify-between text-[10px] text-neutral-400 mb-1">
                  <span>TIMEFRAME LENGTH:</span>
                  <span className="text-cyan-400 font-bold">{simulationYears} Years</span>
                </div>
                <input type="range" min="1" max="10" value={simulationYears} onChange={(e) => setSimulationYears(Number(e.target.value))} className="w-full bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <div className="flex justify-between text-[10px] text-neutral-400 mb-1">
                  <span>INTEREST TARGET APR:</span>
                  <span className="text-purple-400 font-bold">{expectedYieldRate}%</span>
                </div>
                <input type="range" min="5" max="40" value={expectedYieldRate} onChange={(e) => setExpectedYieldRate(Number(e.target.value))} className="w-full bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
              </div>
              <div className="bg-black/50 border border-white/5 rounded-xl p-3 text-center">
                <span className="text-[9px] text-neutral-500 uppercase block font-bold">PROJECTED COMPOUND VALUE</span>
                <span className="text-xl font-black text-emerald-400 block">${compoundFutureValueUSD.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-4 shadow-2xl">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono"><Brain className="w-4 h-4 text-purple-400" /> Neural RAG Vector Portal</h3>
            <div className="flex gap-2 bg-black/40 p-1.5 rounded-xl border border-white/10">
              <input type="text" value={ragQuery} onChange={(e) => setRagQuery(e.target.value)} placeholder="Ask: 'How do I scale my capital volume securely?'" className="flex-1 bg-transparent px-3 py-2 text-xs text-white outline-none font-mono" onKeyDown={(e) => e.key === 'Enter' && handleExecuteAISearch()} />
              <button onClick={handleExecuteAISearch} className="bg-cyan-500 text-slate-950 px-5 rounded-lg text-xs font-bold font-mono">Query</button>
            </div>

            {aiIsThinking && (
              <div className="bg-white/[0.02] border border-dashed border-purple-500/20 rounded-xl p-4 font-mono text-xs text-purple-300">
                <span>{thinkingStep}</span>
              </div>
            )}

            {streamingText && (
              <div className="bg-black/30 border border-white/5 rounded-xl p-5 space-y-2">
                <p className="font-mono text-xs text-slate-200 leading-relaxed">{streamingText}</p>
                {aiMetrics && (
                  <div className="border-t border-white/10 pt-2 text-[10px] font-mono flex gap-3 text-neutral-400">
                    <div>ACCURACY CONFIDENCE: <span className="text-emerald-400">{aiMetrics.confidence}%</span></div>
                    <div>VECTOR LINKS: <span className="text-cyan-400">Verified Database Node Clusters</span></div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5"><BarChart2 className="w-4 h-4 text-cyan-400" /> Connected Asset Pipeline Matrices</h4>
            <div className="bg-white/[0.01] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl">
              <table className="w-full text-left font-mono border-collapse">
                <thead>
                  <tr className="bg-black/40 text-[10px] text-neutral-400 border-b border-white/5">
                    <th className="p-4">NODE IDENTIFIER</th>
                    <th className="p-4">CORE LAYER</th>
                    <th className="p-4 text-center">QUANT INDEX REGRESSION</th>
                    <th className="p-4 text-center">RSI (14)</th>
                    <th className="p-4 text-right">TOTAL RECORDED VALUE</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-white/5">
                  {assets.map((item) => (
                    <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-black border border-white/10 flex items-center justify-center font-black text-[11px] text-cyan-400">{item.symbol.slice(0,2)}</div>
                        <div>
                          <span className="font-bold text-white block">{item.symbol}</span>
                          <span className="text-[10px] text-neutral-500 block">{item.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-neutral-400 text-[11px]">{item.network}</td>
                      <td className="p-4 text-center"><div className="inline-block">{renderAdvancedSparkline(item.priceHistory, item.change24h >= 0)}</div></td>
                      <td className="p-4 text-center">
                        <span className="text-neutral-200 block text-xs font-bold">{item.rsi.toFixed(0)}</span>
                        <span className="text-[8px] font-black text-emerald-400 bg-emerald-500/10 px-1 rounded">{item.signal}</span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-cyan-400 font-bold block">${item.totalValueUSD.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}</span>
                        <span className="text-[10px] text-neutral-500 block">{item.holdings.toLocaleString()} units</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}