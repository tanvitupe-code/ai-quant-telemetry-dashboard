export default function SearchConsole() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <h2 className="mb-4 text-2xl font-semibold text-white">Search Console</h2>
        <p className="text-slate-300">
          Run semantic search across your corpus, review results, and drill into AI-generated summaries.
        </p>
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Ask something about your research..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-sky-500"
          />
          <button className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Submit Query
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <h3 className="mb-2 text-lg font-semibold text-white">Results</h3>
          <p>Structured summaries, references, and highlighted passages will appear here.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
          <h3 className="mb-2 text-lg font-semibold text-white">Filters</h3>
          <p>Refine by intent, source, recency, and model confidence.</p>
        </div>
      </div>
    </section>
  );
}
