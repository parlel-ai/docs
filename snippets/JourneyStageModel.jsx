export const JourneyStageModel = () => (
  <svg width="100%" viewBox="0 0 680 780" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parlel journey stage model" style={{display:"block"}}>
    <title>Parlel journey stage model — Change journey</title>
    <style>{`
      .jm text { font-family: ui-sans-serif, system-ui, sans-serif; }
      .jm .lp { font-size: 13px; font-weight: 600; }
      .jm .ls { font-size: 11px; }
      .jm .lx { font-size: 10px; fill: #888780; }
      .jm .conn { stroke-width: 1.5; fill: none; stroke: #888780; }
      .jm .gf { fill: #F1EFE8; } .jm .gs { stroke: #B4B2A9; }
      .jm .gt { fill: #2C2C2A; } .jm .gu { fill: #5F5E5A; }
      .jm .pf { fill: #EEEDFE; } .jm .ps { stroke: #AFA9EC; }
      .jm .pt { fill: #26215C; } .jm .pu { fill: #534AB7; }
      .jm .tf { fill: #E1F5EE; } .jm .ts { stroke: #5DCAA5; }
      .jm .tt { fill: #085041; } .jm .tu { fill: #0F6E56; }
      .jm .af { fill: #FAEEDA; } .jm .as { stroke: #EF9F27; }
      .jm .at { fill: #412402; } .jm .au { fill: #633806; }
      .jm .cf { fill: #FAECE7; } .jm .cs { stroke: #F0997B; }
      .jm .ct { fill: #4A1B0C; } .jm .cu { fill: #712B13; }
      .jm .bf { fill: #E6F1FB; } .jm .bs { stroke: #85B7EB; }
      .jm .bt { fill: #042C53; } .jm .bu { fill: #0C447C; }
    `}</style>
    <defs>
      <marker id="jm-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <g className="jm">
      {/* Trigger pill */}
      <rect x="20" y="20" width="222" height="26" rx="13" className="gf gs" strokeWidth="0.5"/>
      <text className="lp gt" x="36" y="33" dominantBaseline="central">Customer requests a change</text>
      <line x1="242" y1="33" x2="290" y2="33" className="conn"/>
      <line x1="290" y1="33" x2="290" y2="71" className="conn" markerEnd="url(#jm-arr)"/>
      {/* Journey label */}
      <text className="lx pu" x="14" y="57" dominantBaseline="central" style={{fontWeight:500}}>Change journey</text>
      {/* Journey container */}
      <rect x="14" y="68" width="652" height="694" rx="12" fill="none" stroke="#888780" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.4"/>
      {/* Stage 1 */}
      <rect x="26" y="84" width="390" height="44" rx="8" className="pf ps" strokeWidth="0.5"/>
      <text className="lp pt" x="42" y="101" dominantBaseline="central">Stage 1 — Understand intent</text>
      <text className="ls pu" x="42" y="117" dominantBaseline="central">Guardrail: none · accessible immediately</text>
      <line x1="221" y1="128" x2="221" y2="146" className="conn" opacity="0.35"/>
      <rect x="26" y="148" width="122" height="44" rx="6" className="tf ts" strokeWidth="0.5"/>
      <text className="lp tt" x="36" y="165" dominantBaseline="central">Knowledge</text>
      <text className="ls tu" x="36" y="181" dominantBaseline="central">Company content</text>
      <rect x="156" y="148" width="130" height="44" rx="6" className="cf cs" strokeWidth="0.5"/>
      <text className="lp ct" x="166" y="165" dominantBaseline="central">Authentication</text>
      <text className="ls cu" x="166" y="181" dominantBaseline="central">Tier 1 required</text>
      <rect x="294" y="148" width="122" height="44" rx="6" className="gf gs" strokeWidth="0.5"/>
      <text className="lp gt" x="304" y="165" dominantBaseline="central">Fallback</text>
      <text className="ls gu" x="304" y="181" dominantBaseline="central">Escalation rules</text>
      {/* G1→2 */}
      <line x1="416" y1="106" x2="428" y2="106" className="conn"/>
      <rect x="428" y="94" width="216" height="24" rx="12" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="442" y="106" dominantBaseline="central">Request captured</text>
      <path d="M644 106 L656 106 L656 254" className="conn" markerEnd="url(#jm-arr)"/>
      {/* Stage 2 */}
      <rect x="26" y="256" width="390" height="44" rx="8" className="pf ps" strokeWidth="0.5"/>
      <text className="lp pt" x="42" y="273" dominantBaseline="central">Stage 2 — Retention offer</text>
      <text className="ls pu" x="42" y="289" dominantBaseline="central">Guardrail: request captured</text>
      <line x1="221" y1="300" x2="221" y2="318" className="conn" opacity="0.35"/>
      <rect x="26" y="320" width="122" height="44" rx="6" className="tf ts" strokeWidth="0.5"/>
      <text className="lp tt" x="36" y="337" dominantBaseline="central">Knowledge</text>
      <text className="ls tu" x="36" y="353" dominantBaseline="central">Company content</text>
      <rect x="156" y="320" width="130" height="44" rx="6" className="cf cs" strokeWidth="0.5"/>
      <text className="lp ct" x="166" y="337" dominantBaseline="central">Authentication</text>
      <text className="ls cu" x="166" y="353" dominantBaseline="central">Tier 2 required</text>
      <rect x="294" y="320" width="122" height="44" rx="6" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="304" y="337" dominantBaseline="central">Mandates</text>
      <text className="ls au" x="304" y="353" dominantBaseline="central">Negotiating authority</text>
      <rect x="26" y="372" width="122" height="44" rx="6" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="36" y="389" dominantBaseline="central">Campaigns</text>
      <text className="ls au" x="36" y="405" dominantBaseline="central">Time-bound offers</text>
      <rect x="156" y="372" width="130" height="44" rx="6" className="gf gs" strokeWidth="0.5"/>
      <text className="lp gt" x="166" y="389" dominantBaseline="central">Fallback</text>
      <text className="ls gu" x="166" y="405" dominantBaseline="central">Escalation rules</text>
      {/* G2→3 */}
      <line x1="416" y1="278" x2="428" y2="278" className="conn"/>
      <rect x="428" y="266" width="216" height="24" rx="12" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="442" y="278" dominantBaseline="central">Proposal accepted</text>
      <path d="M644 278 L656 278 L656 474" className="conn" markerEnd="url(#jm-arr)"/>
      {/* Stage 3 */}
      <rect x="26" y="476" width="390" height="44" rx="8" className="pf ps" strokeWidth="0.5"/>
      <text className="lp pt" x="42" y="493" dominantBaseline="central">Stage 3 — Execute decision</text>
      <text className="ls pu" x="42" y="509" dominantBaseline="central">Guardrail: proposal accepted</text>
      <line x1="221" y1="520" x2="221" y2="538" className="conn" opacity="0.35"/>
      <rect x="26" y="540" width="122" height="44" rx="6" className="bf bs" strokeWidth="0.5"/>
      <text className="lp bt" x="36" y="557" dominantBaseline="central">Actions</text>
      <text className="ls bu" x="36" y="573" dominantBaseline="central">Verified execution</text>
      <rect x="156" y="540" width="130" height="44" rx="6" className="tf ts" strokeWidth="0.5"/>
      <text className="lp tt" x="166" y="557" dominantBaseline="central">Knowledge</text>
      <text className="ls tu" x="166" y="573" dominantBaseline="central">Company content</text>
      <rect x="294" y="540" width="122" height="44" rx="6" className="cf cs" strokeWidth="0.5"/>
      <text className="lp ct" x="304" y="557" dominantBaseline="central">Authentication</text>
      <text className="ls cu" x="304" y="573" dominantBaseline="central">Tier 2 required</text>
      {/* G3→complete */}
      <line x1="416" y1="498" x2="428" y2="498" className="conn"/>
      <rect x="428" y="486" width="216" height="24" rx="12" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="442" y="498" dominantBaseline="central">Confirmation</text>
      <path d="M644 498 L656 498 L656 676" className="conn" markerEnd="url(#jm-arr)"/>
      {/* Journey complete */}
      <rect x="26" y="678" width="390" height="44" rx="8" className="gf gs" strokeWidth="0.5"/>
      <text className="lp gt" x="42" y="695" dominantBaseline="central">Journey complete</text>
      <text className="ls gu" x="42" y="711" dominantBaseline="central">Change executed and confirmed</text>
    </g>
  </svg>
)
