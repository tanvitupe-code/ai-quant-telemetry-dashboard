export default function ArchitectureDiagram() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <h2 className="mb-4 text-2xl font-semibold text-white">System Architecture</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 text-slate-300">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-400">Frontend</p>
          <p className="mt-3 text-sm">React + Tailwind UI with a premium glassmorphic experience.</p>
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 text-slate-300">
          <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-400">API</p>
          <p className="mt-3 text-sm">FastAPI endpoints for search, auth, analytics, and document ingestion.</p>
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5 text-slate-300">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">AI Layer</p>
          <p className="mt-3 text-sm">Vector storage, semantic ranking, and custom pipeline services.</p>
        </div>
      </div>
    </section>
  );
}
