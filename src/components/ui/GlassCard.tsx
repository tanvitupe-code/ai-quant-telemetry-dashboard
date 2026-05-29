import { ReactNode } from 'react';

type GlassCardProps = {
  title: string;
  children: ReactNode;
};

export default function GlassCard({ title, children }: GlassCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <h2 className="mb-4 text-xl font-semibold text-slate-100">{title}</h2>
      <div className="space-y-3 text-slate-300">{children}</div>
    </div>
  );
}
