export default function WorkflowDiagram({ title, steps }) {
  return (
    <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/40">
      <h3 className="font-medium">{title}</h3>
      <svg viewBox="0 0 900 110" className="w-full h-auto mt-3">
        {steps.map((s, i) => (
          <g key={i} transform={`translate(${30 + i * 170},20)`}>
            <rect width="150" height="70" rx="12" fill="#0b0f19" stroke="#334155" />
            <text x="75" y="40" textAnchor="middle" fill="#cbd5e1" fontSize="12">{s}</text>
            {i < steps.length - 1 ? (
              <line x1="150" y1="35" x2="170" y2="35" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrow)" />
            ) : null}
          </g>
        ))}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#22d3ee" />
          </marker>
        </defs>
      </svg>
      <p className="text-xs text-neutral-500">High-level workflow only; implementation details shared under NDA.</p>
    </div>
  );
}
