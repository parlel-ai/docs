export const ConversationFlow = () => (
  <div style={{ padding: "0 24px" }}>
  <svg
    width="100%"
    viewBox="0 0 680 680"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Parlel conversation flow"
    style={{ display: "block" }}
  >
    <title>Parlel conversation flow</title>
    <style>{`
      .cf text { font-family: ui-sans-serif, system-ui, sans-serif; }
      .cf .lp { font-size: 13px; font-weight: 600; }
      .cf .ls { font-size: 11px; }
      .cf .lx { font-size: 10px; fill: #888780; }
      .cf .conn { stroke-width: 1.5; fill: none; stroke: #888780; }
      .cf .gf { fill: #F1EFE8; } .cf .gs { stroke: #B4B2A9; }
      .cf .gt { fill: #2C2C2A; } .cf .gu { fill: #5F5E5A; }
      .cf .pf { fill: #EEEDFE; } .cf .ps { stroke: #AFA9EC; }
      .cf .pt { fill: #26215C; } .cf .pu { fill: #534AB7; }
      .cf .tf { fill: #E1F5EE; } .cf .ts { stroke: #5DCAA5; }
      .cf .tt { fill: #085041; } .cf .tu { fill: #0F6E56; }
      .cf .af { fill: #FAEEDA; } .cf .as { stroke: #EF9F27; }
      .cf .at { fill: #412402; } .cf .au { fill: #633806; }
      .cf .cf2{ fill: #FAECE7; } .cf .cs { stroke: #F0997B; }
      .cf .crt{ fill: #4A1B0C; } .cf .cu { fill: #712B13; }
      .cf .bf { fill: #E6F1FB; } .cf .bs { stroke: #85B7EB; }
      .cf .bt { fill: #042C53; } .cf .bu { fill: #0C447C; }
    `}</style>
    <defs>
      <marker id="cf-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <g className="cf">
      {/* Step labels */}
      {[44,114,210,350,420,506,620].map((y,i) => (
        <text key={i} className="lx" x="168" y={y} textAnchor="end" opacity="0.4">{i+1}</text>
      ))}
      {/* 1. Message arrives */}
      <rect x="190" y="20" width="300" height="48" rx="8" className="gf gs" strokeWidth="0.5"/>
      <text className="lp gt" x="340" y="38" textAnchor="middle" dominantBaseline="central">Message arrives</text>
      <text className="ls gu" x="340" y="56" textAnchor="middle" dominantBaseline="central">From any AI interface — ChatGPT, Claude, parlel.ai</text>
      <line x1="340" y1="68" x2="340" y2="88" className="conn" markerEnd="url(#cf-arr)"/>
      {/* 2. Session resolved */}
      <rect x="190" y="90" width="300" height="48" rx="8" className="pf ps" strokeWidth="0.5"/>
      <text className="lp pt" x="340" y="108" textAnchor="middle" dominantBaseline="central">Session resolved</text>
      <text className="ls pu" x="340" y="124" textAnchor="middle" dominantBaseline="central">Auth tier confirmed — Tier 0, 1, or 2</text>
      {/* Fan out */}
      <line x1="340" y1="138" x2="340" y2="154" className="conn"/>
      <line x1="100" y1="154" x2="580" y2="154" className="conn"/>
      <line x1="100" y1="154" x2="100" y2="172" className="conn" markerEnd="url(#cf-arr)"/>
      <line x1="340" y1="154" x2="340" y2="172" className="conn" markerEnd="url(#cf-arr)"/>
      <line x1="580" y1="154" x2="580" y2="172" className="conn" markerEnd="url(#cf-arr)"/>
      <text className="lx" x="340" y="150" textAnchor="middle" opacity="0.5">assembled in parallel</text>
      {/* 3A Knowledge */}
      <rect x="26" y="174" width="148" height="72" rx="8" className="tf ts" strokeWidth="0.5"/>
      <text className="lp tt" x="100" y="196" textAnchor="middle" dominantBaseline="central">Knowledge</text>
      <text className="ls tu" x="100" y="214" textAnchor="middle">RAG retrieval from</text>
      <text className="ls tu" x="100" y="228" textAnchor="middle">your knowledge base.</text>
      <text className="ls tu" x="100" y="242" textAnchor="middle">Most relevant content</text>
      {/* 3B Customer data */}
      <rect x="266" y="174" width="148" height="72" rx="8" className="cf2 cs" strokeWidth="0.5"/>
      <text className="lp crt" x="340" y="196" textAnchor="middle" dominantBaseline="central">Customer data</text>
      <text className="ls cu" x="340" y="214" textAnchor="middle">CRM lookup via your</text>
      <text className="ls cu" x="340" y="228" textAnchor="middle">connected integration.</text>
      <text className="ls cu" x="340" y="242" textAnchor="middle">Loaded into session</text>
      {/* 3C Commercial */}
      <rect x="506" y="174" width="148" height="72" rx="8" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="580" y="196" textAnchor="middle" dominantBaseline="central">Commercial rules</text>
      <text className="ls au" x="580" y="214" textAnchor="middle">Active journey stage,</text>
      <text className="ls au" x="580" y="228" textAnchor="middle">campaigns, mandates</text>
      <text className="ls au" x="580" y="242" textAnchor="middle">evaluated</text>
      {/* Converge */}
      <line x1="100" y1="246" x2="100" y2="306" className="conn"/>
      <line x1="340" y1="246" x2="340" y2="306" className="conn"/>
      <line x1="580" y1="246" x2="580" y2="306" className="conn"/>
      <line x1="100" y1="306" x2="580" y2="306" className="conn"/>
      <line x1="340" y1="306" x2="340" y2="324" className="conn" markerEnd="url(#cf-arr)"/>
      {/* 4. System prompt */}
      <rect x="190" y="326" width="300" height="48" rx="8" className="pf ps" strokeWidth="0.5"/>
      <text className="lp pt" x="340" y="344" textAnchor="middle" dominantBaseline="central">System prompt assembled</text>
      <text className="ls pu" x="340" y="360" textAnchor="middle" dominantBaseline="central">All context injected — rules and guardrails applied</text>
      <line x1="340" y1="374" x2="340" y2="394" className="conn" markerEnd="url(#cf-arr)"/>
      {/* 5. AI responds */}
      <rect x="190" y="396" width="300" height="48" rx="8" className="pf ps" strokeWidth="0.5"/>
      <text className="lp pt" x="340" y="414" textAnchor="middle" dominantBaseline="central">AI generates response</text>
      <text className="ls pu" x="340" y="430" textAnchor="middle" dominantBaseline="central">Answer formed — action signal included if needed</text>
      <line x1="340" y1="444" x2="340" y2="462" className="conn" markerEnd="url(#cf-arr)"/>
      {/* 6. Decision diamond */}
      <polygon points="340,464 416,502 340,540 264,502" fill="none" stroke="#888780" strokeWidth="1" opacity="0.5"/>
      <text className="lx" x="340" y="496" textAnchor="middle" dominantBaseline="central">Action</text>
      <text className="lx" x="340" y="510" textAnchor="middle" dominantBaseline="central">confirmed?</text>
      {/* Yes branch */}
      <line x1="416" y1="502" x2="532" y2="502" className="conn" markerEnd="url(#cf-arr)"/>
      <text className="lx" x="470" y="496" textAnchor="middle">yes</text>
      <rect x="534" y="474" width="118" height="56" rx="8" className="bf bs" strokeWidth="0.5"/>
      <text className="lp bt" x="593" y="494" textAnchor="middle" dominantBaseline="central">Action</text>
      <text className="lp bt" x="593" y="510" textAnchor="middle" dominantBaseline="central">executed</text>
      <text className="ls bu" x="593" y="524" textAnchor="middle" dominantBaseline="central">Logged + audited</text>
      <line x1="593" y1="530" x2="593" y2="588" className="conn"/>
      <line x1="593" y1="588" x2="342" y2="588" className="conn" markerEnd="url(#cf-arr)"/>
      {/* No branch */}
      <line x1="340" y1="540" x2="340" y2="586" className="conn" markerEnd="url(#cf-arr)"/>
      <text className="lx" x="322" y="562" textAnchor="middle">no</text>
      {/* 7. Response delivered */}
      <rect x="190" y="588" width="300" height="48" rx="8" className="gf gs" strokeWidth="0.5"/>
      <text className="lp gt" x="340" y="606" textAnchor="middle" dominantBaseline="central">Response delivered</text>
      <text className="ls gu" x="340" y="622" textAnchor="middle" dominantBaseline="central">Inside the customer's AI tool — unchanged</text>
    </g>
  </svg>
  </div>
)
