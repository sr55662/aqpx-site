export default function EnterpriseSvg() {
  return (
    <svg viewBox="0 0 920 360" className="w-full h-auto">
      <rect x="20" y="20" width="880" height="320" rx="20" fill="#0a0a0a" stroke="#262626" />
      <rect x="390" y="140" width="140" height="80" rx="12" fill="#111827" stroke="#374151" />
      <text x="420" y="185" fill="#e5e7eb" fontSize="14">AQPX Core</text>
      {[[150,80,'Identity / SSO'],[150,220,'Policy / OPA'],[650,80,'Data Lake / WH'],[650,220,'Apps: BI / ML / Audit']].map(([x,y,label],i)=> (
        <g key={i}>
          <rect x={x} y={y} width="160" height="60" rx="12" fill="#0b0f19" stroke="#334155" />
          <text x={x + 18} y={y + 35} fill="#cbd5e1" fontSize="12">{label}</text>
          <line x1={x + 160} y1={y + 30} x2="390" y2="180" stroke="#22d3ee" strokeWidth="2" opacity="0.8" />
        </g>
      ))}
      <text x="30" y="345" fill="#9ca3af" fontSize="12">Compute-to-data: raw data stays in your environment. AQPX returns privacy-preserving digests plus evidence.</text>
    </svg>
  );
}
