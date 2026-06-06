export default function CapabilityModel() {
  const caps = [
    { label: "Knowledge",       sub: "Answers from your content",  lf: "ao-teal-f",  ls: "ao-teal-s",  lt: "ao-teal-t",  lu: "ao-teal-u"  },
    { label: "Authentication",  sub: "Progressive identity tiers", lf: "ao-coral-f", ls: "ao-coral-s", lt: "ao-coral-t", lu: "ao-coral-u" },
    { label: "Mandates",        sub: "Negotiating authority",      lf: "ao-amber-f", ls: "ao-amber-s", lt: "ao-amber-t", lu: "ao-amber-u" },
    { label: "Campaigns",       sub: "Fixed time-bound offers",    lf: "ao-amber-f", ls: "ao-amber-s", lt: "ao-amber-t", lu: "ao-amber-u" },
    { label: "Actions",         sub: "Verified execution",         lf: "ao-blue-f",  ls: "ao-blue-s",  lt: "ao-blue-t",  lu: "ao-blue-u"  },
    { label: "Fallback",        sub: "Escalation and redirect",    lf: "ao-gray-f",  ls: "ao-gray-s",  lt: "ao-gray-t",  lu: "ao-gray-u"  },
  ];

  const leftX  = 66;
  const rightX = 446;
  const capW   = 168;
  const capH   = 40;
  const capGap = 8;
  const capTop = 342;

  return (
    <svg
      width="100%"
      viewBox="0 0 680 840"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Parlel capability model"
      style={{ display: "block" }}
    >
      <title>Parlel capability model</title>
      <desc>
        Two paths from intent classification: Journey (stage-gated capabilities)
        and General (always available capabilities). Both converge on a response
        delivered to the customer in their AI tool.
      </desc>

      <defs>
        <marker id="cm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <style>{`
          .ao-lp  { font-family: inherit; font-size: 13px; font-weight: 600; }
          .ao-ls  { font-family: inherit; font-size: 11px; font-weight: 400; }
          .ao-lx  { font-family: inherit; font-size: 10px; font-weight: 400; }
          .ao-conn { stroke-width: 1.5; fill: none; }

          .ao-gray-f   { fill: #F1EFE8; } .ao-gray-s   { stroke: #B4B2A9; }
          .ao-gray-t   { fill: #2C2C2A; } .ao-gray-u   { fill: #5F5E5A;  }
          .ao-purple-f { fill: #EEEDFE; } .ao-purple-s { stroke: #AFA9EC; }
          .ao-purple-t { fill: #26215C; } .ao-purple-u { fill: #534AB7;  }
          .ao-teal-f   { fill: #E1F5EE; } .ao-teal-s   { stroke: #5DCAA5; }
          .ao-teal-t   { fill: #085041; } .ao-teal-u   { fill: #0F6E56;  }
          .ao-coral-f  { fill: #FAECE7; } .ao-coral-s  { stroke: #F0997B; }
          .ao-coral-t  { fill: #4A1B0C; } .ao-coral-u  { fill: #712B13;  }
          .ao-amber-f  { fill: #FAEEDA; } .ao-amber-s  { stroke: #EF9F27; }
          .ao-amber-t  { fill: #412402; } .ao-amber-u  { fill: #633806;  }
          .ao-blue-f   { fill: #E6F1FB; } .ao-blue-s   { stroke: #85B7EB; }
          .ao-blue-t   { fill: #042C53; } .ao-blue-u   { fill: #0C447C;  }

          @media (prefers-color-scheme: dark) {
            .ao-gray-f   { fill: #2C2C2A; } .ao-gray-s   { stroke: #5F5E5A; }
            .ao-gray-t   { fill: #F1EFE8; } .ao-gray-u   { fill: #D3D1C7; }
            .ao-purple-f { fill: #26215C; } .ao-purple-s { stroke: #7F77DD; }
            .ao-purple-t { fill: #EEEDFE; } .ao-purple-u { fill: #CECBF6; }
            .ao-teal-f   { fill: #04342C; } .ao-teal-s   { stroke: #1D9E75; }
            .ao-teal-t   { fill: #E1F5EE; } .ao-teal-u   { fill: #9FE1CB; }
            .ao-coral-f  { fill: #4A1B0C; } .ao-coral-s  { stroke: #D85A30; }
            .ao-coral-t  { fill: #FAECE7; } .ao-coral-u  { fill: #F5C4B3; }
            .ao-amber-f  { fill: #412402; } .ao-amber-s  { stroke: #BA7517; }
            .ao-amber-t  { fill: #FAEEDA; } .ao-amber-u  { fill: #FAC775; }
            .ao-blue-f   { fill: #042C53; } .ao-blue-s   { stroke: #378ADD; }
            .ao-blue-t   { fill: #E6F1FB; } .ao-blue-u   { fill: #B5D4F4; }
          }
        `}</style>
      </defs>

      {/* USER INPUT */}
      <rect x="240" y="20" width="200" height="44" rx="8" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-lp ao-gray-t" x="340" y="42" textAnchor="middle" dominantBaseline="central">User input</text>
      <line x1="340" y1="64" x2="340" y2="88" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />

      {/* INTENT CLASSIFICATION */}
      <rect x="200" y="90" width="280" height="44" rx="8" className="ao-purple-f ao-purple-s" strokeWidth="0.5" />
      <text className="ao-lp ao-purple-t" x="340" y="107" textAnchor="middle" dominantBaseline="central">Intent classification</text>
      <text className="ao-ls ao-purple-u" x="340" y="123" textAnchor="middle" dominantBaseline="central">AI evaluates the message</text>

      {/* Split lines */}
      <path d="M200 112 L150 112 L150 168" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />
      <path d="M480 112 L530 112 L530 168" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />
      <text className="ao-lx ao-gray-u" x="150" y="105" textAnchor="middle">journey matched</text>
      <text className="ao-lx ao-gray-u" x="530" y="105" textAnchor="middle">no journey matched</text>

      {/* ── LEFT: JOURNEY ── */}
      <rect x="66" y="170" width="168" height="44" rx="8" className="ao-purple-f ao-purple-s" strokeWidth="0.5" />
      <text className="ao-lp ao-purple-t" x="150" y="187" textAnchor="middle" dominantBaseline="central">Journey activated</text>
      <text className="ao-ls ao-purple-u" x="150" y="203" textAnchor="middle" dominantBaseline="central">Intent confirmed</text>
      <line x1="150" y1="214" x2="150" y2="238" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />

      <rect x="52" y="240" width="196" height="52" rx="8" className="ao-purple-f ao-purple-s" strokeWidth="0.5" />
      <text className="ao-lp ao-purple-t" x="150" y="261" textAnchor="middle" dominantBaseline="central">Journey stage</text>
      <text className="ao-lp ao-purple-t" x="150" y="279" textAnchor="middle" dominantBaseline="central">orchestration</text>
      <line x1="150" y1="292" x2="150" y2="316" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />

      {/* Dashed container */}
      <rect x="52" y="304" width="196" height="426" rx="10" fill="none" stroke="#888780" strokeWidth="1" strokeDasharray="5 4" opacity="0.4" />
      <text className="ao-lx ao-gray-u" x="150" y="330" textAnchor="middle" opacity={0.6}>Stage-gated capabilities</text>

      {/* Left caps */}
      {caps.map((c, i) => {
        const y = capTop + i * (capH + capGap);
        return (
          <g key={`left-${i}`}>
            <rect x={leftX} y={y} width={capW} height={capH} rx="6" className={`${c.lf} ${c.ls}`} strokeWidth="0.5" />
            <text className={`ao-lp ${c.lt}`} x={leftX + capW / 2} y={y + 13} textAnchor="middle" dominantBaseline="central">{c.label}</text>
            <text className={`ao-lx ${c.lu}`} x={leftX + capW / 2} y={y + 28} textAnchor="middle" dominantBaseline="central">{c.sub}</text>
          </g>
        );
      })}

      <text className="ao-lx ao-gray-u" x="150" y="656" textAnchor="middle" opacity={0.4}>access governed by active stage</text>
      <text className="ao-lx ao-gray-u" x="150" y="668" textAnchor="middle" opacity={0.4}>guardrails and permissions</text>

      {/* ── RIGHT: GENERAL ── */}
      <rect x="446" y="170" width="168" height="44" rx="8" className="ao-purple-f ao-purple-s" strokeWidth="0.5" />
      <text className="ao-lp ao-purple-t" x="530" y="187" textAnchor="middle" dominantBaseline="central">General</text>
      <text className="ao-ls ao-purple-u" x="530" y="203" textAnchor="middle" dominantBaseline="central">No journey context</text>
      <line x1="530" y1="214" x2="530" y2="316" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />

      {/* Solid container */}
      <rect x="432" y="304" width="196" height="426" rx="10" fill="none" stroke="#888780" strokeWidth="1" opacity="0.25" />
      <text className="ao-lx ao-gray-u" x="530" y="330" textAnchor="middle" opacity={0.6}>Always available</text>

      {/* Right caps */}
      {caps.map((c, i) => {
        const y = capTop + i * (capH + capGap);
        return (
          <g key={`right-${i}`}>
            <rect x={rightX} y={y} width={capW} height={capH} rx="6" className={`${c.lf} ${c.ls}`} strokeWidth="0.5" />
            <text className={`ao-lp ${c.lt}`} x={rightX + capW / 2} y={y + 13} textAnchor="middle" dominantBaseline="central">{c.label}</text>
            <text className={`ao-lx ${c.lu}`} x={rightX + capW / 2} y={y + 28} textAnchor="middle" dominantBaseline="central">{c.sub}</text>
          </g>
        );
      })}

      {/* CONVERGENCE */}
      <path d="M150 730 L150 770 L340 770" className="ao-conn ao-gray-s" />
      <path d="M530 730 L530 770 L340 770" className="ao-conn ao-gray-s" />
      <line x1="340" y1="770" x2="340" y2="792" className="ao-conn ao-gray-s" markerEnd="url(#cm-arrow)" />

      {/* RESPONSE */}
      <rect x="230" y="794" width="220" height="44" rx="8" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-lp ao-gray-t" x="340" y="811" textAnchor="middle" dominantBaseline="central">Response to customer</text>
      <text className="ao-ls ao-gray-u" x="340" y="827" textAnchor="middle" dominantBaseline="central">Delivered in their AI tool</text>
    </svg>
  );
}
