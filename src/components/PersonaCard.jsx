export default function PersonaCard({ role, delta, text }) {
  return (
    <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/40">
      <div className="text-sm text-neutral-400">{role}</div>
      <div className="text-2xl font-semibold mt-1">{delta}</div>
      <p className="mt-2 text-neutral-300 text-sm leading-6">{text}</p>
    </div>
  );
}
