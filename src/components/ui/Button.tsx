type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export function Button({ children, onClick, variant = 'secondary' }: ButtonProps) {
  const base = 'rounded-full px-4 py-2 text-sm font-semibold transition';
  const style =
    variant === 'primary'
      ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400'
      : 'bg-slate-800 text-slate-200 hover:bg-slate-700';

  return (
    <button type="button" onClick={onClick} className={`${base} ${style}`}>
      {children}
    </button>
  );
}
