export default function Stat({ label, value, note }) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-4 bg-neutral-900/40">
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {note ? <div className="text-xs text-neutral-500 mt-1">{note}</div> : null}
    </div>
  );
}
