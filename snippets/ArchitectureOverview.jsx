export const ArchitectureOverview = () => (
  <svg
    width="100%"
    viewBox="0 0 680 680"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Parlel architecture overview"
    style={{ display: "block" }}
  >
    <title>Parlel architecture overview</title>
    <style>{`
      .ao text { font-family: ui-sans-serif, system-ui, sans-serif; }
      .ao .lp  { font-size: 13px; font-weight: 600; fill: #26215C; }
      .ao .ls  { font-size: 11px; fill: #534AB7; }
      .ao .lx  { font-size: 10px; fill: #888780; }
      .ao .gt  { fill: #2C2C2A; } .ao .gu { fill: #5F5E5A; }
      .ao .gf  { fill: #F1EFE8; } .ao .gs { stroke: #B4B2A9; }
      .ao .pf  { fill: #EEEDFE; } .ao .ps { stroke: #AFA9EC; }
      .ao .tf  { fill: #E1F5EE; } .ao .ts { stroke: #5DCAA5; }
      .ao .tpt { fill: #085041; } .ao .tpu { fill: #0F6E56; }
      .ao .af  { fill: #FAEEDA; } .ao .as { stroke: #EF9F27; }
      .ao .at  { fill: #412402; } .ao .au { fill: #633806; }
      .ao .cf  { fill: #FAECE7; } .ao .cs { stroke: #F0997B; }
      .ao .ct  { fill: #4A1B0C; } .ao .cu { fill: #712B13; }
      .ao .bf  { fill: #E6F1FB; } .ao .bs { stroke: #85B7EB; }
      .ao .bt  { fill: #042C53; } .ao .bu { fill: #0C447C; }
      .ao .conn { stroke: #888780; stroke-width: 1.5; fill: none; }
    `}</style>
    <defs>
      <marker id="ao-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </marker>
    </defs>
    <g className="ao">
      {/* Row labels */}
      <text className="lx" x="18" y="62" textAnchor="middle">Customer</text>
      <text className="lx" x="18" y="74" textAnchor="middle">AI tools</text>
      <text className="lx" x="18" y="300" textAnchor="middle">Parlel</text>
      <text className="lx" x="18" y="312" textAnchor="middle">framework</text>
      <text className="lx" x="18" y="625" textAnchor="middle">Company</text>
      <text className="lx" x="18" y="637" textAnchor="middle">back-end</text>
      {/* Top band */}
      <rect x="44" y="30" width="620" height="64" rx="10" className="gf gs" strokeWidth="0.5"/>
      <rect x="56"  y="40" width="106" height="44" rx="6" className="gf gs" strokeWidth="0.5"/>
      <text className="ls gt" x="109" y="63" textAnchor="middle" dominantBaseline="central">ChatGPT</text>
      <rect x="172" y="40" width="106" height="44" rx="6" className="gf gs" strokeWidth="0.5"/>
      <text className="ls gt" x="225" y="63" textAnchor="middle" dominantBaseline="central">Gemini</text>
      <rect x="288" y="40" width="106" height="44" rx="6" className="gf gs" strokeWidth="0.5"/>
      <text className="ls gt" x="341" y="63" textAnchor="middle" dominantBaseline="central">Copilot</text>
      <rect x="404" y="40" width="106" height="44" rx="6" className="gf gs" strokeWidth="0.5"/>
      <text className="ls gt" x="457" y="63" textAnchor="middle" dominantBaseline="central">Claude</text>
      <rect x="520" y="40" width="132" height="44" rx="6" className="pf ps" strokeWidth="0.5"/>
      <text className="ls lp" x="586" y="57" textAnchor="middle" dominantBaseline="central">parlel.ai</text>
      <text className="lx ls" x="586" y="73" textAnchor="middle" dominantBaseline="central">(native)</text>
      {/* API lines */}
      {[109,225,341,457,586].map(x => <line key={x} x1={x} y1="94" x2={x} y2="120" className="conn"/>)}
      <text className="lx" x="109" y="108" textAnchor="middle">API</text>
      <text className="lx" x="225" y="108" textAnchor="middle">API</text>
      <text className="lx" x="341" y="108" textAnchor="middle">API</text>
      <text className="lx" x="457" y="108" textAnchor="middle">API</text>
      {/* Parlel container */}
      <rect x="44" y="122" width="620" height="488" rx="12" className="pf ps" strokeWidth="0.5"/>
      {/* Knowledge */}
      <rect x="62" y="140" width="188" height="172" rx="8" className="tf ts" strokeWidth="0.5"/>
      <text className="lp tpt" x="156" y="166" textAnchor="middle" dominantBaseline="central">Knowledge layer</text>
      <text className="lx tpu" x="156" y="184" textAnchor="middle">Your voice, your facts</text>
      <text className="lx tpu" x="156" y="214" textAnchor="middle">Document ingestion</text>
      <text className="lx tpu" x="156" y="232" textAnchor="middle">Retrieval-augmented answers</text>
      <text className="lx tpu" x="156" y="250" textAnchor="middle">Confidence-gated responses</text>
      <text className="lx tpu" x="156" y="268" textAnchor="middle">Clean escalation on uncertainty</text>
      {/* Commercial */}
      <rect x="264" y="140" width="188" height="172" rx="8" className="af as" strokeWidth="0.5"/>
      <text className="lp at" x="358" y="166" textAnchor="middle" dominantBaseline="central">Commercial layer</text>
      <text className="lx au" x="358" y="184" textAnchor="middle">Journeys, offers, control</text>
      <text className="lx au" x="358" y="214" textAnchor="middle">Customer journey config</text>
      <text className="lx au" x="358" y="232" textAnchor="middle">Campaigns &amp; mandates</text>
      <text className="lx au" x="358" y="250" textAnchor="middle">Stage-gated progression</text>
      <text className="lx au" x="358" y="268" textAnchor="middle">Fallback &amp; escalation rules</text>
      {/* Authentication */}
      <rect x="466" y="140" width="182" height="172" rx="8" className="cf cs" strokeWidth="0.5"/>
      <text className="lp ct" x="557" y="166" textAnchor="middle" dominantBaseline="central">Authentication layer</text>
      <text className="lx cu" x="557" y="184" textAnchor="middle">Progressive identity</text>
      <text className="lx cu" x="557" y="214" textAnchor="middle">Anonymous → identified</text>
      <text className="lx cu" x="557" y="232" textAnchor="middle">→ OTP verified</text>
      <text className="lx cu" x="557" y="250" textAnchor="middle">Friction scales with</text>
      <text className="lx cu" x="557" y="268" textAnchor="middle">action sensitivity</text>
      {/* Portal */}
      <rect x="62" y="328" width="586" height="72" rx="8" className="bf bs" strokeWidth="0.5"/>
      <text className="lp bt" x="355" y="352" textAnchor="middle" dominantBaseline="central">Company configuration portal</text>
      <text className="lx bu" x="355" y="372" textAnchor="middle">Knowledge · journeys · authentication · analytics</text>
      <text className="lx bu" x="355" y="390" textAnchor="middle">parlel.ai/portal — configure once, deploy everywhere</text>
      {/* Actions */}
      <rect x="62" y="416" width="285" height="166" rx="8" className="bf bs" strokeWidth="0.5"/>
      <text className="lp bt" x="204" y="442" textAnchor="middle" dominantBaseline="central">Action layer</text>
      <text className="lx bu" x="204" y="460" textAnchor="middle">Verified execution</text>
      <text className="lx bu" x="204" y="490" textAnchor="middle">Configurable action flows</text>
      <text className="lx bu" x="204" y="508" textAnchor="middle">Schema validation</text>
      <text className="lx bu" x="204" y="526" textAnchor="middle">Auth-gated execution</text>
      <text className="lx bu" x="204" y="544" textAnchor="middle">Full audit trail</text>
      {/* Integrations */}
      <rect x="363" y="416" width="285" height="166" rx="8" className="bf bs" strokeWidth="0.5"/>
      <text className="lp bt" x="505" y="442" textAnchor="middle" dominantBaseline="central">Integration layer</text>
      <text className="lx bu" x="505" y="460" textAnchor="middle">Connect your systems</text>
      <text className="lx bu" x="505" y="490" textAnchor="middle">Pre-built connectors</text>
      <text className="lx bu" x="505" y="508" textAnchor="middle">HubSpot · Salesforce · Stripe</text>
      <text className="lx bu" x="505" y="526" textAnchor="middle">Zendesk · custom REST</text>
      <text className="lx bu" x="505" y="544" textAnchor="middle">Encrypted credential storage</text>
      {/* Arrow + backend */}
      <line x1="354" y1="612" x2="354" y2="634" className="conn" markerEnd="url(#ao-arr)"/>
      <rect x="44" y="636" width="620" height="28" rx="8" className="gf gs" strokeWidth="0.5"/>
      <text className="ls gt" x="354" y="652" textAnchor="middle" dominantBaseline="central">Company back-end — your existing systems, unchanged</text>
    </g>
  </svg>
)
