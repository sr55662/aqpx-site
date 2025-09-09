export default function KPI({ label, value }) {
  return (
    <div className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900/40">
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}
