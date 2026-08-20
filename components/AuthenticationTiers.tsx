export default function AuthenticationTiers() {
  const tiers = [
    {
      tier: "Tier 0",
      label: "Anonymous",
      sub: "No identification required",
      detail: ["General knowledge questions", "No customer data loaded", "No actions available"],
      cf: "at-gray-f", cs: "at-gray-s", ct: "at-gray-t", cu: "at-gray-u",
    },
    {
      tier: "Tier 1",
      label: "Identified",
      sub: "Email provided and CRM matched",
      detail: ["Customer data loaded into session", "Read-only account lookups available", "Personalised responses enabled"],
      cf: "at-purple-f", cs: "at-purple-s", ct: "at-purple-t", cu: "at-purple-u",
    },
    {
      tier: "Tier 2",
      label: "OTP verified",
      sub: "Identity confirmed via one-time code",
      detail: ["All actions available", "Sensitive changes permitted", "Full audit trail created"],
      cf: "at-coral-f", cs: "at-coral-s", ct: "at-coral-t", cu: "at-coral-u",
    },
    {
      tier: "Tier 3",
      label: "Strongly verified",
      sub: "BankID or equivalent — planned",
      detail: ["High-sensitivity transactions", "Regulatory-grade verification", "Coming in a future release"],
      cf: "at-teal-f", cs: "at-teal-s", ct: "at-teal-t", cu: "at-teal-u",
    },
  ];

  const triggers = [
    "Customer provides email address",
    "Customer enters OTP code sent to email",
    "Strong verification method — BankID etc.",
  ];

  const boxW = 140;
  const boxH = 148;
  const startX = 20;
  const gap = 20;
  const topY = 40;

  return (
    <svg
      width="100%"
      viewBox="0 0 680 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Parlel authentication tier progression"
      style={{ display: "block" }}
    >
      <title>Parlel authentication tier progression</title>
      <desc>
        Four authentication tiers shown left to right: Tier 0 Anonymous, Tier 1
        Identified, Tier 2 OTP verified, Tier 3 Strongly verified. Each tier
        shows what becomes available. Upgrade triggers sit between tiers.
      </desc>

      <defs>
        <marker id="at-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <style>{`
          .at-lp { font-family: inherit; font-size: 12px; font-weight: 700; }
          .at-ls { font-family: inherit; font-size: 11px; font-weight: 400; }
          .at-lx { font-family: inherit; font-size: 10px; font-weight: 400; }
          .at-lt { font-family: inherit; font-size: 10px; font-weight: 500; }
          .at-conn { stroke-width: 1.5; fill: none; }

          .at-gray-f   { fill: #F1EFE8; } .at-gray-s   { stroke: #B4B2A9; }
          .at-gray-t   { fill: #2C2C2A; } .at-gray-u   { fill: #5F5E5A;  }
          .at-purple-f { fill: #EEEDFE; } .at-purple-s { stroke: #AFA9EC; }
          .at-purple-t { fill: #26215C; } .at-purple-u { fill: #534AB7;  }
          .at-coral-f  { fill: #FAECE7; } .at-coral-s  { stroke: #F0997B; }
          .at-coral-t  { fill: #4A1B0C; } .at-coral-u  { fill: #712B13;  }
          .at-teal-f   { fill: #E1F5EE; } .at-teal-s   { stroke: #5DCAA5; }
          .at-teal-t   { fill: #085041; } .at-teal-u   { fill: #0F6E56;  }
          .at-amber-f  { fill: #FAEEDA; } .at-amber-s  { stroke: #EF9F27; }

          @media (prefers-color-scheme: dark) {
            .at-gray-f   { fill: #2C2C2A; } .at-gray-s   { stroke: #5F5E5A; }
            .at-gray-t   { fill: #F1EFE8; } .at-gray-u   { fill: #D3D1C7; }
            .at-purple-f { fill: #26215C; } .at-purple-s { stroke: #7F77DD; }
            .at-purple-t { fill: #EEEDFE; } .at-purple-u { fill: #CECBF6; }
            .at-coral-f  { fill: #4A1B0C; } .at-coral-s  { stroke: #D85A30; }
            .at-coral-t  { fill: #FAECE7; } .at-coral-u  { fill: #F5C4B3; }
            .at-teal-f   { fill: #04342C; } .at-teal-s   { stroke: #1D9E75; }
            .at-teal-t   { fill: #E1F5EE; } .at-teal-u   { fill: #9FE1CB; }
          }
        `}</style>
      </defs>

      {/* Tier boxes */}
      {tiers.map((t, i) => {
        const x = startX + i * (boxW + gap);
        const opacity = t.tier === "Tier 3" ? 0.5 : 1;
        return (
          <g key={i} opacity={opacity}>
            <rect x={x} y={topY} width={boxW} height={boxH} rx="8" className={`${t.cf} ${t.cs}`} strokeWidth="0.5" strokeDasharray={t.tier === "Tier 3" ? "4 3" : undefined} />
            {/* Tier badge */}
            <rect x={x + 8} y={topY + 8} width={50} height={18} rx="9" className={`${t.cs}`} fill="none" strokeWidth="0.5" opacity={0.6} />
            <text className="at-lx" x={x + 33} y={topY + 17} textAnchor="middle" dominantBaseline="central" style={{ fill: "currentColor", opacity: 0.7 }}>{t.tier}</text>
            {/* Label */}
            <text className="at-lp" x={x + 10} y={topY + 38} dominantBaseline="central" style={{ fill: `var(--at-t, currentColor)` }}>{t.label}</text>
            <text className="at-lx" x={x + 10} y={topY + 54} dominantBaseline="central" style={{ opacity: 0.6 }}>{t.sub}</text>
            {/* Detail lines */}
            {t.detail.map((d, j) => (
              <text key={j} className="at-ls" x={x + 10} y={topY + 76 + j * 18} dominantBaseline="central" style={{ opacity: 0.75 }}>· {d}</text>
            ))}
          </g>
        );
      })}

      {/* Upgrade trigger labels between tiers */}
      {triggers.map((trigger, i) => {
        const x1 = startX + (i + 1) * (boxW + gap) - gap;
        const cx = x1 + gap / 2;
        const cy = topY + boxH / 2;
        return (
          <g key={i}>
            <line x1={x1} y1={cy} x2={x1 + gap} y2={cy} stroke="#888780" strokeWidth="1.5" markerEnd="url(#at-arrow)" />
          </g>
        );
      })}

      {/* Trigger descriptions below */}
      {triggers.map((trigger, i) => {
        const x1 = startX + (i + 1) * (boxW + gap) - gap;
        const cx = x1 + gap / 2;
        return (
          <text key={i} className="at-lx at-gray-u" x={cx} y={topY + boxH + 20} textAnchor="middle" opacity={0.55} style={{ fontSize: "9px" }}>
            {trigger.split(" ").slice(0, 3).join(" ")}
          </text>
        );
      })}

      {/* Bottom label: friction increases right to left */}
      <text className="at-lx at-gray-u" x="20" y={topY + boxH + 52} opacity={0.4}>← lower friction</text>
      <text className="at-lx at-gray-u" x="660" y={topY + boxH + 52} textAnchor="end" opacity={0.4}>higher sensitivity →</text>

      {/* Tier 3 future label */}
      <text className="at-lx at-gray-u" x={startX + 3 * (boxW + gap) + boxW / 2} y={topY + boxH + 36} textAnchor="middle" opacity={0.4}>future release</text>

    </svg>
  );
}
