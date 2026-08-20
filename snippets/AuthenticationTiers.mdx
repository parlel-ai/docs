export const AuthenticationTiers = () => {
  const tiers = [
    { tier:"Tier 0", label:"Anonymous",        sub:"No identification required",       items:["General knowledge questions","No customer data loaded","No actions available"],          cls:"gf gs gt gu", future:false },
    { tier:"Tier 1", label:"Identified",        sub:"Email provided, CRM matched",      items:["Customer data loaded into session","Read-only lookups available","Personalised responses enabled"], cls:"pf ps pt pu", future:false },
    { tier:"Tier 2", label:"OTP verified",      sub:"Identity confirmed via code",      items:["All actions available","Sensitive changes permitted","Full audit trail created"],        cls:"cf cs ct cu", future:false },
    { tier:"Tier 3", label:"Strongly verified", sub:"BankID or equivalent — planned",   items:["High-sensitivity transactions","Regulatory-grade verification","Coming in a future release"], cls:"tf ts tt tu", future:true  },
  ]
  const W=148, H=148, gap=16, startX=14
  return (
    <svg width="100%" viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parlel authentication tiers" style={{display:"block"}}>
      <title>Parlel authentication tier progression</title>
      <style>{`
        .at text { font-family: ui-sans-serif, system-ui, sans-serif; }
        .at .lp { font-size: 12px; font-weight: 700; }
        .at .ls { font-size: 11px; }
        .at .lx { font-size: 10px; fill: #888780; }
        .at .conn { stroke-width: 1.5; fill: none; stroke: #888780; }
        .at .gf { fill: #F1EFE8; } .at .gs { stroke: #B4B2A9; }
        .at .gt { fill: #2C2C2A; } .at .gu { fill: #5F5E5A; }
        .at .pf { fill: #EEEDFE; } .at .ps { stroke: #AFA9EC; }
        .at .pt { fill: #26215C; } .at .pu { fill: #534AB7; }
        .at .cf { fill: #FAECE7; } .at .cs { stroke: #F0997B; }
        .at .ct { fill: #4A1B0C; } .at .cu { fill: #712B13; }
        .at .tf { fill: #E1F5EE; } .at .ts { stroke: #5DCAA5; }
        .at .tt { fill: #085041; } .at .tu { fill: #0F6E56; }
      `}</style>
      <defs>
        <marker id="at-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>
      <g className="at">
        {tiers.map((t, i) => {
          const x = startX + i * (W + gap)
          const [f,s,tl,u] = t.cls.split(" ")
          const midY = 30 + H/2
          return (
            <g key={i} opacity={t.future ? 0.45 : 1}>
              <rect x={x} y="30" width={W} height={H} rx="8" className={`${f} ${s}`} strokeWidth="0.5" strokeDasharray={t.future ? "4 3" : undefined}/>
              {/* Tier badge */}
              <rect x={x+8} y="38" width="48" height="16" rx="8" fill="none" className={s} strokeWidth="0.5" opacity="0.6"/>
              <text className="lx" x={x+32} y="46" textAnchor="middle" dominantBaseline="central">{t.tier}</text>
              {/* Label */}
              <text className={`lp ${tl}`} x={x+8} y="64" dominantBaseline="central">{t.label}</text>
              <text className={`lx ${u}`} x={x+8} y="80" dominantBaseline="central">{t.sub}</text>
              {/* Items */}
              {t.items.map((item, j) => (
                <text key={j} className={`ls ${u}`} x={x+8} y={100 + j*18} dominantBaseline="central" opacity="0.8">· {item}</text>
              ))}
              {/* Upgrade arrow between tiers */}
              {i < 3 && (
                <line x1={x+W} y1={midY} x2={x+W+gap} y2={midY} className="conn" markerEnd="url(#at-arr)"/>
              )}
            </g>
          )
        })}
        {/* Bottom labels */}
        <text className="lx" x="14" y="196" opacity="0.4">← lower friction</text>
        <text className="lx" x="666" y="196" textAnchor="end" opacity="0.4">higher sensitivity →</text>
        <text className="lx" x={14 + 3*(W+gap) + W/2} y="210" textAnchor="middle" opacity="0.4">future release</text>
      </g>
    </svg>
  )
}
