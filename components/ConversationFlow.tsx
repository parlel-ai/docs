export default function ConversationFlow() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 860"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Parlel conversation flow — what happens when a customer sends a message"
      style={{ display: "block" }}
    >
      <title>Parlel conversation flow</title>
      <desc>
        Sequential flow diagram showing what happens when a customer message
        arrives: session resolved, three parallel context sources assembled,
        system prompt built, AI generates response, conditional action
        execution, response delivered.
      </desc>

      <defs>
        <marker id="cf-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <style>{`
          .cf-lp { font-family: inherit; font-size: 13px; font-weight: 600; }
          .cf-ls { font-family: inherit; font-size: 11px; font-weight: 400; }
          .cf-lx { font-family: inherit; font-size: 10px; font-weight: 400; }
          .cf-conn { stroke-width: 1.5; fill: none; }

          .cf-gray-f   { fill: #F1EFE8; } .cf-gray-s   { stroke: #B4B2A9; }
          .cf-gray-t   { fill: #2C2C2A; } .cf-gray-u   { fill: #5F5E5A;  }
          .cf-purple-f { fill: #EEEDFE; } .cf-purple-s { stroke: #AFA9EC; }
          .cf-purple-t { fill: #26215C; } .cf-purple-u { fill: #534AB7;  }
          .cf-teal-f   { fill: #E1F5EE; } .cf-teal-s   { stroke: #5DCAA5; }
          .cf-teal-t   { fill: #085041; } .cf-teal-u   { fill: #0F6E56;  }
          .cf-coral-f  { fill: #FAECE7; } .cf-coral-s  { stroke: #F0997B; }
          .cf-coral-t  { fill: #4A1B0C; } .cf-coral-u  { fill: #712B13;  }
          .cf-amber-f  { fill: #FAEEDA; } .cf-amber-s  { stroke: #EF9F27; }
          .cf-amber-t  { fill: #412402; } .cf-amber-u  { fill: #633806;  }
          .cf-blue-f   { fill: #E6F1FB; } .cf-blue-s   { stroke: #85B7EB; }
          .cf-blue-t   { fill: #042C53; } .cf-blue-u   { fill: #0C447C;  }

          @media (prefers-color-scheme: dark) {
            .cf-gray-f   { fill: #2C2C2A; } .cf-gray-s   { stroke: #5F5E5A; }
            .cf-gray-t   { fill: #F1EFE8; } .cf-gray-u   { fill: #D3D1C7; }
            .cf-purple-f { fill: #26215C; } .cf-purple-s { stroke: #7F77DD; }
            .cf-purple-t { fill: #EEEDFE; } .cf-purple-u { fill: #CECBF6; }
            .cf-teal-f   { fill: #04342C; } .cf-teal-s   { stroke: #1D9E75; }
            .cf-teal-t   { fill: #E1F5EE; } .cf-teal-u   { fill: #9FE1CB; }
            .cf-coral-f  { fill: #4A1B0C; } .cf-coral-s  { stroke: #D85A30; }
            .cf-coral-t  { fill: #FAECE7; } .cf-coral-u  { fill: #F5C4B3; }
            .cf-amber-f  { fill: #412402; } .cf-amber-s  { stroke: #BA7517; }
            .cf-amber-t  { fill: #FAEEDA; } .cf-amber-u  { fill: #FAC775; }
            .cf-blue-f   { fill: #042C53; } .cf-blue-s   { stroke: #378ADD; }
            .cf-blue-t   { fill: #E6F1FB; } .cf-blue-u   { fill: #B5D4F4; }
          }
        `}</style>
      </defs>

      {/* Step number labels */}
      {[
        [170, 44],
        [170, 114],
        [170, 216],
        [170, 354],
        [170, 424],
        [170, 510],
        [170, 624],
      ].map(([x, y], i) => (
        <text key={i} className="cf-lx cf-gray-u" x={x} y={y} textAnchor="end" opacity={0.4}>
          {i + 1}
        </text>
      ))}

      {/* STEP 1: MESSAGE ARRIVES */}
      <rect x="190" y="20" width="300" height="48" rx="8" className="cf-gray-f cf-gray-s" strokeWidth="0.5" />
      <text className="cf-lp cf-gray-t" x="340" y="38" textAnchor="middle" dominantBaseline="central">Message arrives</text>
      <text className="cf-ls cf-gray-u" x="340" y="56" textAnchor="middle" dominantBaseline="central">From any AI interface — ChatGPT, Claude, parlel.ai</text>
      <line x1="340" y1="68" x2="340" y2="88" className="cf-conn cf-gray-s" markerEnd="url(#cf-arrow)" />

      {/* STEP 2: SESSION RESOLVED */}
      <rect x="190" y="90" width="300" height="48" rx="8" className="cf-purple-f cf-purple-s" strokeWidth="0.5" />
      <text className="cf-lp cf-purple-t" x="340" y="108" textAnchor="middle" dominantBaseline="central">Session resolved</text>
      <text className="cf-ls cf-purple-u" x="340" y="124" textAnchor="middle" dominantBaseline="central">Auth tier confirmed — Tier 0, 1, or 2</text>

      {/* Fan out */}
      <line x1="340" y1="138" x2="340" y2="154" stroke="#888780" strokeWidth="1.5" />
      <line x1="100" y1="154" x2="580" y2="154" stroke="#888780" strokeWidth="1.5" />
      <line x1="100" y1="154" x2="100" y2="172" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />
      <line x1="340" y1="154" x2="340" y2="172" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />
      <line x1="580" y1="154" x2="580" y2="172" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />
      <text className="cf-lx cf-gray-u" x="340" y="150" textAnchor="middle" opacity={0.45}>assembled in parallel</text>

      {/* STEP 3A: KNOWLEDGE */}
      <rect x="26" y="174" width="148" height="72" rx="8" className="cf-teal-f cf-teal-s" strokeWidth="0.5" />
      <text className="cf-lp cf-teal-t" x="100" y="196" textAnchor="middle" dominantBaseline="central">Knowledge</text>
      <text className="cf-ls cf-teal-u" x="100" y="214" textAnchor="middle" dominantBaseline="central">RAG retrieval from</text>
      <text className="cf-ls cf-teal-u" x="100" y="228" textAnchor="middle" dominantBaseline="central">your knowledge base.</text>
      <text className="cf-ls cf-teal-u" x="100" y="242" textAnchor="middle" dominantBaseline="central">Most relevant content</text>

      {/* STEP 3B: CUSTOMER DATA */}
      <rect x="266" y="174" width="148" height="72" rx="8" className="cf-coral-f cf-coral-s" strokeWidth="0.5" />
      <text className="cf-lp cf-coral-t" x="340" y="196" textAnchor="middle" dominantBaseline="central">Customer data</text>
      <text className="cf-ls cf-coral-u" x="340" y="214" textAnchor="middle" dominantBaseline="central">CRM lookup via your</text>
      <text className="cf-ls cf-coral-u" x="340" y="228" textAnchor="middle" dominantBaseline="central">connected integration.</text>
      <text className="cf-ls cf-coral-u" x="340" y="242" textAnchor="middle" dominantBaseline="central">Loaded into session</text>

      {/* STEP 3C: COMMERCIAL */}
      <rect x="506" y="174" width="148" height="72" rx="8" className="cf-amber-f cf-amber-s" strokeWidth="0.5" />
      <text className="cf-lp cf-amber-t" x="580" y="196" textAnchor="middle" dominantBaseline="central">Commercial rules</text>
      <text className="cf-ls cf-amber-u" x="580" y="214" textAnchor="middle" dominantBaseline="central">Active journey stage,</text>
      <text className="cf-ls cf-amber-u" x="580" y="228" textAnchor="middle" dominantBaseline="central">campaigns, mandates</text>
      <text className="cf-ls cf-amber-u" x="580" y="242" textAnchor="middle" dominantBaseline="central">evaluated</text>

      {/* Converge */}
      <line x1="100" y1="246" x2="100" y2="310" stroke="#888780" strokeWidth="1.5" />
      <line x1="340" y1="246" x2="340" y2="310" stroke="#888780" strokeWidth="1.5" />
      <line x1="580" y1="246" x2="580" y2="310" stroke="#888780" strokeWidth="1.5" />
      <line x1="100" y1="310" x2="580" y2="310" stroke="#888780" strokeWidth="1.5" />
      <line x1="340" y1="310" x2="340" y2="328" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />

      {/* STEP 4: SYSTEM PROMPT */}
      <rect x="190" y="330" width="300" height="48" rx="8" className="cf-purple-f cf-purple-s" strokeWidth="0.5" />
      <text className="cf-lp cf-purple-t" x="340" y="348" textAnchor="middle" dominantBaseline="central">System prompt assembled</text>
      <text className="cf-ls cf-purple-u" x="340" y="364" textAnchor="middle" dominantBaseline="central">All context injected — rules and guardrails applied</text>
      <line x1="340" y1="378" x2="340" y2="398" className="cf-conn cf-gray-s" markerEnd="url(#cf-arrow)" />

      {/* STEP 5: AI RESPONDS */}
      <rect x="190" y="400" width="300" height="48" rx="8" className="cf-purple-f cf-purple-s" strokeWidth="0.5" />
      <text className="cf-lp cf-purple-t" x="340" y="418" textAnchor="middle" dominantBaseline="central">AI generates response</text>
      <text className="cf-ls cf-purple-u" x="340" y="434" textAnchor="middle" dominantBaseline="central">Answer formed — action signal included if needed</text>
      <line x1="340" y1="448" x2="340" y2="468" className="cf-conn cf-gray-s" markerEnd="url(#cf-arrow)" />

      {/* STEP 6: DECISION DIAMOND */}
      <polygon points="340,470 420,510 340,550 260,510" fill="none" stroke="#888780" strokeWidth="1" opacity={0.5} />
      <text className="cf-lx cf-gray-u" x="340" y="504" textAnchor="middle" dominantBaseline="central">Action</text>
      <text className="cf-lx cf-gray-u" x="340" y="518" textAnchor="middle" dominantBaseline="central">confirmed?</text>

      {/* Yes branch */}
      <line x1="420" y1="510" x2="540" y2="510" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />
      <text className="cf-lx cf-gray-u" x="476" y="504" textAnchor="middle">yes</text>
      <rect x="542" y="480" width="120" height="60" rx="8" className="cf-blue-f cf-blue-s" strokeWidth="0.5" />
      <text className="cf-lp cf-blue-t" x="602" y="500" textAnchor="middle" dominantBaseline="central">Action</text>
      <text className="cf-lp cf-blue-t" x="602" y="516" textAnchor="middle" dominantBaseline="central">executed</text>
      <text className="cf-ls cf-blue-u" x="602" y="532" textAnchor="middle" dominantBaseline="central">Logged + audited</text>
      <line x1="602" y1="540" x2="602" y2="600" stroke="#888780" strokeWidth="1.5" />
      <line x1="602" y1="600" x2="342" y2="600" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />

      {/* No branch */}
      <line x1="340" y1="550" x2="340" y2="598" stroke="#888780" strokeWidth="1.5" markerEnd="url(#cf-arrow)" />
      <text className="cf-lx cf-gray-u" x="322" y="574" textAnchor="middle">no</text>

      {/* STEP 7: RESPONSE DELIVERED */}
      <rect x="190" y="600" width="300" height="48" rx="8" className="cf-gray-f cf-gray-s" strokeWidth="0.5" />
      <text className="cf-lp cf-gray-t" x="340" y="618" textAnchor="middle" dominantBaseline="central">Response delivered</text>
      <text className="cf-ls cf-gray-u" x="340" y="634" textAnchor="middle" dominantBaseline="central">Inside the customer's AI tool — unchanged</text>
    </svg>
  );
}
