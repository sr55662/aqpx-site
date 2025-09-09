import React, { useState } from "react";
import Stat from "./components/Stat.jsx";
import KPI from "./components/KPI.jsx";
import PersonaCard from "./components/PersonaCard.jsx";
import WorkflowDiagram from "./components/WorkflowDiagram.jsx";
import ArchSvg from "./components/ArchSvg.jsx";
import EnterpriseSvg from "./components/EnterpriseSvg.jsx";

export default function App() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      q: "What makes AQPX different from data platforms and BI tools?",
      a: "AQPX is AI-native orchestration. LLMs never touch raw data; only policy-approved digests flow. It combines natural-language \\u2192 Plan DSL, privacy math, multi-LLM consensus, and cryptographic evidence."
    },
    {
      q: "Does AQPX store my data?",
      a: "Raw data never leaves your secure boundary. AQPX runs compute-to-data and emits privacy-preserving digests (e.g., DP aggregates and k-anonymous features) with full evidence of what ran and why."
    },
    {
      q: "Is AQPX only for highly regulated industries?",
      a: "Designed for regulated use cases, but valuable for any enterprise needing governance, auditability, and zero-trust AI orchestration."
    },
    {
      q: "Can we start small?",
      a: "Yes. Start with one or two workflows using AQPX Lite, then graduate to full federated orchestration as value scales."
    },
  ];

  const features = [
    { title: "Compute-to-Data", body: "LLMs never access raw data. AQPX orchestrates approved digests only, reducing breach risk and preserving sovereignty.", icon: "🔒" },
    { title: "Plan DSL Orchestration", body: "Natural-language requests compile to explainable plans that enforce policy, privacy budgets, and cost guardrails.", icon: "🧭" },
    { title: "Multi-LLM Consensus", body: "Independent generation \\u2192 cross-validation \\u2192 structured debate \\u2192 weighted decision with uncertainty bounds.", icon: "🧠" },
    { title: "Evidence Vault", body: "Every action produces a cryptographic evidence trail — lineage, policy, and outcomes you can hand to auditors.", icon: "📜" },
    { title: "Federated by Design", body: "Policy-composable orchestration across divisions or partners, with local data sovereignty and global coordination.", icon: "🌐" },
    { title: "Smart HITL", body: "Conversational clarifier escalates only when confidence is low — keeping humans in the loop when it matters.", icon: "🤝" },
  ];

  const tiers = [
    { name: "Starter", price: "$50k/yr", blurb: "Pilot 1–2 workflows with AQPX Lite and evidence packs.", bullets: ["Up to 100 queries/mo", "Core Plan DSL", "Digestor L0–L2", "Evidence Vault"] },
    { name: "Professional", price: "$200k/yr", blurb: "Scale orchestration across teams with governance.", bullets: ["Up to 1k queries/mo", "Consensus Engine", "Policy Gateway (OPA)", "SSO/RBAC"] },
    { name: "Enterprise", price: "$500k+/yr", blurb: "Federated orchestration, advanced privacy, and SLAs.", bullets: ["10k+ queries/mo", "Federation", "DP budgets + k-anon", "Audit & Compliance toolkit"] },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
            <span className="font-semibold tracking-wide text-lg">AQPX</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#enterprise" className="hover:text-white">Enterprise Fit</a>
            <a href="#benchmarks" className="hover:text-white">Benchmarks</a>
            <a href="#personas" className="hover:text-white">Personas</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium hover:opacity-90">Request demo</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-10%,rgba(56,189,248,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Privacy-Preserving AI Orchestration for the Enterprise</h1>
            <p className="mt-6 text-neutral-300 text-lg">Deliver LLM-powered insights without exposing raw data. AQPX compiles natural-language requests into policy-aware plans, executes compute-to-data, and returns auditable results with mathematical privacy.</p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 font-medium">Get a demo</a>
              <a href="#architecture" className="px-5 py-3 rounded-xl border border-neutral-700 hover:bg-neutral-900 font-medium">See how it works</a>
            </div>
            <p className="mt-4 text-sm text-neutral-400">No trade secrets disclosed. High-level, diligence-ready overview.</p>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/50 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <Stat label="Analysis speed" value={"11w \\u2192 8d"} note="Quant research" />
                <Stat label="Audit prep" value={"25w \\u2192 1h"} note="Compliance" />
                <Stat label="Uptime" value="99.9%" note="Target" />
                <Stat label="Cost/query" value="<$0.50" note="Target" />
              </div>
              <div className="mt-6 h-px bg-neutral-800" />
              <p className="mt-4 text-sm text-neutral-400">Illustrative targets and pilot outcomes; detailed metrics under NDA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-10 border-y border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-400">Built for teams in regulated environments</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
            {["Finance", "Healthcare", "Public Sector", "Technology", "Manufacturing"].map((x) => (
              <div key={x} className="py-3 rounded-xl border border-neutral-800">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Core capabilities</h2>
        <p className="mt-3 text-neutral-300 max-w-2xl">High-level overview only — implementation details and model/provider choices are private and configurable per tenant.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 border border-neutral-800 bg-neutral-900/40">
              <div className="text-2xl" aria-hidden>{f.icon}</div>
              <h3 className="mt-3 font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm leading-6">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Architecture at a glance</h2>
        <p className="mt-3 text-neutral-300 max-w-3xl">Three-plane design with strict separation of concerns. Requests enter the Control Plane, plans execute inside your boundary, and only privacy-preserving digests and evidence are returned.</p>
        <div className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
          <ArchSvg />
          <ul className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-neutral-300">
            <li className="rounded-xl border border-neutral-800 p-4">User Plane — Web Console • CLI • API Gateway</li>
            <li className="rounded-xl border border-neutral-800 p-4">Control Plane — Policy Gateway • Orchestration • Consensus • Federation</li>
            <li className="rounded-xl border border-neutral-800 p-4">Data Plane — Data Digestor (L0–L3) • Evidence Vault • Secure Storage</li>
          </ul>
          <div className="mt-6">
            <h3 className="font-medium">Highlights</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1">
              <li>Compute-to-data: raw data stays inside your boundary</li>
              <li>Policy-aware Plan DSL enforces privacy/cost guardrails</li>
              <li>Evidence tokens provide end-to-end auditability</li>
            </ul>
          </div>
          <p className="mt-4 text-xs text-neutral-500">Diagram is illustrative. Fine-grained mechanisms, model choices, and policy packs are shared under NDA.</p>
        </div>
      </section>

      {/* ENTERPRISE FIT */}
      <section id="enterprise" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">How AQPX fits the enterprise</h2>
        <p className="mt-3 text-neutral-300 max-w-3xl">Drop-in alongside your lake/warehouse and identity systems. AQPX orchestrates privacy-preserving digests to serve BI, ML, and compliance — without exposing trade secrets or raw data.</p>
        <div className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
          <EnterpriseSvg />
          <p className="mt-3 text-xs text-neutral-500">Illustration only. Replace with brand artwork or a Sora-style visual for demos; no implementation details are revealed.</p>
          <div className="mt-6">
            <h3 className="font-medium">Highlights</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1">
              <li>SSO/RBAC + OPA policies — govern by intent</li>
              <li>Feeds BI dashboards, ML pipelines, and audit reports</li>
              <li>Federation across business units and partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENCHMARKS */}
      <section id="benchmarks" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Targets & pilot outcomes</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <KPI label="p95 latency" value="< 10 min" />
          <KPI label="Concurrency" value="> 1000 users" />
          <KPI label="Availability" value="99.9%" />
          <KPI label="Compliance prep" value="–90% effort" />
        </div>
        <div className="mt-6">
          <h3 className="font-medium">Highlights</h3>
          <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1">
            <li>Representative numbers; full methodology under NDA</li>
            <li>Evidence-first validation and cost transparency</li>
            <li>No raw data movement required</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-neutral-400">Representative; formal benchmarks available upon request.</p>
      </section>

      {/* PERSONAS & WORKFLOWS */}
      <section id="personas" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Who uses AQPX</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <PersonaCard role="Quant Analyst" delta={"11w \\u2192 8d"} text="Self-serve stress testing and research with audit-ready outputs." />
          <PersonaCard role="ML Engineering" delta={"6mo \\u2192 3w"} text="Federated model workflows with privacy-bounded digests." />
          <PersonaCard role="Compliance" delta={"25w \\u2192 1h"} text="Push-button evidence packages for regulators and auditors." />
        </div>
        <div className="mt-10 grid gap-6">
          <WorkflowDiagram title="Quant Analyst Workflow" steps={["NL request", "Plan DSL", "L1/L2 digests", "Consensus", "Dashboard + Evidence"]} />
          <WorkflowDiagram title="ML Engineering Workflow" steps={["Template select", "Feature digests", "Federated exec", "Model validate", "Evidence pack"]} />
          <WorkflowDiagram title="Compliance Workflow" steps={["Scope", "Policy check", "Digest run", "Report compile", "Audit trail"]} />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Pricing</h2>
        <p className="mt-3 text-neutral-300">Transparent tiers to start small and scale safely. Enterprise Plus and on-prem SLAs available under NDA.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-2xl mt-1">{t.price}</p>
              <p className="mt-2 text-neutral-300 text-sm">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><span>•</span><span>{b}</span></li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-xl bg-white text-neutral-900 font-medium">Talk to sales</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-neutral-800 border border-neutral-800 rounded-2xl">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} className="text-left w-full p-5 hover:bg-neutral-900/40">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-medium">{f.q}</p>
                  {openFAQ === i && (
                    <p className="mt-2 text-sm text-neutral-300">{f.a}</p>
                  )}
                </div>
                <span className="text-xl">{openFAQ === i ? "–" : "+"}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-4 pb-28">
        <div className="rounded-3xl border border-neutral-800 p-8 bg-neutral-900/40">
          <h2 className="text-3xl font-semibold">Request a demo</h2>
          <p className="mt-3 text-neutral-300">Email us at <a className="underline" href="mailto:sr55662@gmail.com">sr55662@gmail.com</a> or use the form below. We will share benchmark details under NDA and set up a pilot plan.</p>
          <form className="mt-6 grid md:grid-cols-2 gap-4">
            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3" placeholder="Name" />
            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3" placeholder="Work email" />
            <input className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 md:col-span-2" placeholder="Company" />
            <textarea className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 md:col-span-2" placeholder="What problem are you solving?" rows={4} />
            <button type="button" className="mt-2 md:col-span-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 font-medium">Send</button>
          </form>
          <p className="mt-3 text-xs text-neutral-500">This demo form is illustrative and does not send data. Email <a className="underline" href="mailto:sr55662@gmail.com">sr55662@gmail.com</a> to reach us directly.</p>
        </div>
        <footer className="mt-8 text-center text-xs text-neutral-500">© {new Date().getFullYear()} AQPX — Contact: <a className="underline" href="mailto:sr55662@gmail.com">sr55662@gmail.com</a></footer>
      </section>
    </div>
  );
}
