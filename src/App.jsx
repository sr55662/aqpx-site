import { useEffect } from "react";

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="section">
    <div className="container">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="h2">{title}</h2>
      <div className="content">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }) => <span className="pill">{children}</span>;

const Divider = () => <div className="divider" />;

const HeroDiagram = () => (
  <svg viewBox="0 0 900 340" className="diagram">
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopOpacity="0.25" />
        <stop offset="100%" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* USER PLANE */}
    <rect x="30" y="20" width="840" height="80" rx="14" className="node" />
    <text x="50" y="55" className="label">USER PLANE</text>
    <text x="50" y="78" className="sub">Web Console • CLI • API Gateway</text>

    {/* CONTROL PLANE */}
    <rect x="30" y="120" width="840" height="100" rx="14" className="node" />
    <text x="50" y="155" className="label">CONTROL PLANE</text>
    <text x="50" y="178" className="sub">Policy Gateway • Orchestrator • Consensus • LLM Proxy • Capability Registry • Federation</text>

    {/* DATA PLANE */}
    <rect x="30" y="240" width="840" height="80" rx="14" className="node" />
    <text x="50" y="275" className="label">DATA PLANE</text>
    <text x="50" y="298" className="sub">Data Digestor • Evidence Vault • Secure Storage</text>

    {/* flows */}
    <path d="M450,102 L450,120" className="flow" />
    <path d="M450,220 L450,240" className="flow" />
    <text x="460" y="115" className="flowtext">requests + auth</text>
    <text x="460" y="235" className="flowtext">digests only</text>
  </svg>
);

const L0L3 = () => (
  <svg viewBox="0 0 900 210" className="diagram">
    <rect x="70" y="30" width="160" height="140" rx="14" className="stack" />
    <rect x="250" y="30" width="160" height="140" rx="14" className="stack" />
    <rect x="430" y="30" width="160" height="140" rx="14" className="stack" />
    <rect x="610" y="30" width="160" height="140" rx="14" className="stack" />
    <text x="150" y="60" className="label">L0</text>
    <text x="150" y="85" className="sub">Metadata</text>
    <text x="150" y="110" className="sub">Schema • Counts</text>

    <text x="330" y="60" className="label">L1</text>
    <text x="330" y="85" className="sub">Statistical</text>
    <text x="330" y="110" className="sub">DP • k-Anon</text>

    <text x="510" y="60" className="label">L2</text>
    <text x="510" y="85" className="sub">Contextual</text>
    <text x="510" y="110" className="sub">Features • PCA</text>

    <text x="690" y="60" className="label">L3</text>
    <text x="690" y="85" className="sub">Content</text>
    <text x="690" y="110" className="sub">Redacted • PII-safe</text>
  </svg>
);

const ConsensusFlow = () => (
  <svg viewBox="0 0 900 220" className="diagram">
    {["Independent Generation","Cross-Validation","Consensus Building","Final Decision"].map((t,i)=>(
      <g key={i}>
        <rect x={40 + i*215} y="40" width="200" height="120" rx="14" className="node"/>
        <text x={55 + i*215} y="80" className="label">{t}</text>
      </g>
    ))}
    {[0,1,2].map((i)=>(
      <path key={i} d={`M ${240 + i*215},100 L ${255 + i*215},100`} className="arrow"/>
    ))}
  </svg>
);

const Federation = () => (
  <svg viewBox="0 0 900 220" className="diagram">
    <rect x="70" y="60" width="240" height="100" rx="14" className="node"/>
    <text x="90" y="100" className="label">Local Orchestrator A</text>
    <rect x="590" y="60" width="240" height="100" rx="14" className="node"/>
    <text x="610" y="100" className="label">Local Orchestrator B</text>
    <rect x="355" y="30" width="190" height="60" rx="14" className="node"/>
    <text x="370" y="65" className="label">Federated Orchestrator</text>
    <path d="M310,110 L355,60" className="flow"/>
    <path d="M545,60 L590,110" className="flow"/>
    <text x="360" y="150" className="sub">Signed Plans • Policy Merge • Evidence Stitching</text>
  </svg>
);

const AuditRibbon = () => (
  <svg viewBox="0 0 900 140" className="diagram">
    <path d="M30,70 C150,20 300,120 450,70 C600,20 750,120 870,70" className="ribbon"/>
    <text x="340" y="60" className="label">Evidence Vault</text>
    <text x="265" y="90" className="sub">Immutable lineage • Merkle proofs • Signatures</text>
  </svg>
);

const Workflows = () => (
  <div className="workflows">
    {[
      {name:"Sarah — Quant Analyst", steps:["NL request","Digest orchestration","Consensus risk analysis","Audit-ready report"]},
      {name:"Alex — ML Eng. Manager", steps:["Template selection","L2 features","Federated training","Validation + evidence"]},
      {name:"Jennifer — Compliance", steps:["Scope policy","Auto evidence pack","Controls check","1-click report"]},
    ].map((wf,i)=>(
      <div className="wf" key={i}>
        <h4 className="h4">{wf.name}</h4>
        <div className="lane">
          {wf.steps.map((s,j)=>(
            <div className="chip" key={j}>{s}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function App() {
  useEffect(() => {
    // smooth scroll for in-page nav
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener("click", e=>{
        const id = a.getAttribute("href");
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({behavior:"smooth"}); }
      });
    });
  }, []);

  return (
    <div>
      {/* Nav */}
      <header className="nav">
        <div className="container navrow">
          <a className="brand" href="#home">AQPX</a>
          <nav className="navlinks">
            <a href="#architecture">Architecture</a>
            <a href="#privacy">Privacy</a>
            <a href="#consensus">Consensus</a>
            <a href="#federation">Federation</a>
            <a href="#evidence">Evidence</a>
            <a href="#benchmarks">Benchmarks</a>
            <a href="#stories">User Stories</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main id="home" className="hero">
        <div className="container heroinner">
          <div className="herotext">
            <p className="kicker">Enterprise AI, without data egress</p>
            <h1 className="h1">Compute-to-Data Orchestration with Mathematical Privacy</h1>
            <p className="lede">
              Natural language in → privacy-bounded digests out. Policy-aware orchestration, 
              multi-LLM consensus, cryptographic evidence.
            </p>
            <div className="pills">
              <Pill>Zero-Trust</Pill>
              <Pill>Federated by Design</Pill>
              <Pill>Audit-Ready</Pill>
            </div>
            <a className="cta" href="mailto:sr55662@gmail.com">Contact: sr55662@gmail.com</a>
          </div>
          <HeroDiagram />
        </div>
      </main>

      <Divider/>

      <Section id="architecture" kicker="Three-Plane IOC" title="Architecture at a Glance">
        <p>
          Strict separation of User, Control, and Data planes; LLMs never touch raw data—only digests traverse boundaries.
        </p>
      </Section>

      <Section id="privacy" kicker="L0–L3 Digests" title="Privacy-Preserving Data Digestor">
        <L0L3 />
        <p>
          L0 metadata → L1 statistical (DP/k-Anon) → L2 contextual features → L3 redacted samples. Privacy budget and proofs wrap every step.
        </p>
      </Section>

      <Section id="consensus" kicker="Multi-LLM" title="Consensus Engine with Uncertainty">
        <ConsensusFlow />
        <p>
          Independent generation → cross-validation → structured consensus → final decision with Bayesian confidence and conservative fallbacks.
        </p>
      </Section>

      <Section id="federation" kicker="Cross-Org" title="Federated Orchestration">
        <Federation />
        <p>
          FO ↔ LO policy composition, signed plans, and stitched evidence enable collaboration across divisions and partners—without data sharing.
        </p>
      </Section>

      <Section id="evidence" kicker="Lineage & Proofs" title="Evidence Vault">
        <AuditRibbon />
        <p>
          Immutable, cryptographically verifiable trails (Merkle trees, signatures) for every action, plan, and output.
        </p>
      </Section>

      <Section id="benchmarks" kicker="Targets" title="Benchmarks & Readiness">
        <ul className="bullets">
          <li>Complex query p95 &lt; 10m; 1000+ concurrent users</li>
          <li>System availability 99.9% with comprehensive monitoring</li>
          <li>Zero PII egress; DP/k-Anon verification; evidence integrity 100%</li>
        </ul>
      </Section>

      <Section id="stories" kicker="Impact" title="User Stories">
        <Workflows />
        <p className="tiny">
          Examples reflect documented transformations in finance, healthcare, and compliance programs.
        </p>
      </Section>

      <Divider/>

      <Section id="contact" kicker="Let’s talk" title="Contact">
        <p>
          Questions or pilot interest? <a href="mailto:sr55662@gmail.com">sr55662@gmail.com</a>
        </p>
      </Section>

      <footer className="foot">
        <div className="container">
          <span>AQPX — Privacy-Preserving AI Orchestration</span>
          <a href="#architecture">Architecture</a>
          <a href="#privacy">Privacy</a>
          <a href="#stories">User Stories</a>
        </div>
      </footer>
    </div>
  );
}
