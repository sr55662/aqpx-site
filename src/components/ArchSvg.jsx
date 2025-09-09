export default function ArchSvg() {
  return (
    <svg viewBox="0 0 900 340" className="w-full h-auto">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="30" y="20" width="840" height="80" rx="16" fill="#0a0a0a" stroke="#262626" />
      <text x="50" y="50" fill="#d4d4d4" fontSize="16">USER PLANE</text>
      <text x="50" y="75" fill="#a3a3a3" fontSize="12">Web Console · CLI · API Gateway</text>
      <rect x="30" y="125" width="840" height="110" rx="16" fill="#0a0a0a" stroke="#262626" />
      <text x="50" y="155" fill="#d4d4d4" fontSize="16">CONTROL PLANE</text>
      <text x="50" y="180" fill="#a3a3a3" fontSize="12">Policy · Orchestration · Consensus · Federation</text>
      <rect x="30" y="255" width="840" height="70" rx="16" fill="#0a0a0a" stroke="#262626" />
      <text x="50" y="285" fill="#d4d4d4" fontSize="16">DATA PLANE</text>
      <text x="50" y="310" fill="#a3a3a3" fontSize="12">Data Digestor (L0–L3) · Evidence Vault · Secure Storage</text>
      <line x1="450" y1="100" x2="450" y2="125" stroke="url(#g1)" strokeWidth="3" />
      <line x1="450" y1="235" x2="450" y2="255" stroke="url(#g1)" strokeWidth="3" />
    </svg>
  );
}
