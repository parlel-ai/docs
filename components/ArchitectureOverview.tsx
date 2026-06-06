export default function ArchitectureOverview() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 680"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Parlel architecture overview"
      style={{ display: "block" }}
    >
      <title>Parlel architecture overview</title>
      <desc>
        Architecture diagram showing Parlel as a middleware framework between
        customer AI interfaces at the top and company backend systems at the
        bottom. Three capability layers: Knowledge, Commercial, Authentication.
        Below them: a configuration portal, and two execution columns for
        Actions and Integrations.
      </desc>

      <defs>
        <marker
          id="ao-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
        <style>{`
          .ao-lp  { font-family: inherit; font-size: 13px; font-weight: 600; }
          .ao-ls  { font-family: inherit; font-size: 11px; font-weight: 400; }
          .ao-lx  { font-family: inherit; font-size: 10px; font-weight: 400; }
          .ao-conn { stroke: var(--tw-prose-body, #888780); stroke-width: 1.5; fill: none; }

          .ao-gray-f   { fill: #F1EFE8; } .ao-gray-s   { stroke: #B4B2A9; }
          .ao-gray-t   { fill: #2C2C2A; } .ao-gray-u   { fill: #5F5E5A; }

          .ao-purple-f { fill: #EEEDFE; } .ao-purple-s { stroke: #AFA9EC; }
          .ao-purple-t { fill: #26215C; } .ao-purple-u { fill: #534AB7; }

          .ao-teal-f   { fill: #E1F5EE; } .ao-teal-s   { stroke: #5DCAA5; }
          .ao-teal-t   { fill: #085041; } .ao-teal-u   { fill: #0F6E56; }

          .ao-amber-f  { fill: #FAEEDA; } .ao-amber-s  { stroke: #EF9F27; }
          .ao-amber-t  { fill: #412402; } .ao-amber-u  { fill: #633806; }

          .ao-coral-f  { fill: #FAECE7; } .ao-coral-s  { stroke: #F0997B; }
          .ao-coral-t  { fill: #4A1B0C; } .ao-coral-u  { fill: #712B13; }

          .ao-blue-f   { fill: #E6F1FB; } .ao-blue-s   { stroke: #85B7EB; }
          .ao-blue-t   { fill: #042C53; } .ao-blue-u   { fill: #0C447C; }

          @media (prefers-color-scheme: dark) {
            .ao-gray-f   { fill: #2C2C2A; } .ao-gray-s   { stroke: #5F5E5A; }
            .ao-gray-t   { fill: #F1EFE8; } .ao-gray-u   { fill: #D3D1C7; }

            .ao-purple-f { fill: #26215C; } .ao-purple-s { stroke: #7F77DD; }
            .ao-purple-t { fill: #EEEDFE; } .ao-purple-u { fill: #CECBF6; }

            .ao-teal-f   { fill: #04342C; } .ao-teal-s   { stroke: #1D9E75; }
            .ao-teal-t   { fill: #E1F5EE; } .ao-teal-u   { fill: #9FE1CB; }

            .ao-amber-f  { fill: #412402; } .ao-amber-s  { stroke: #BA7517; }
            .ao-amber-t  { fill: #FAEEDA; } .ao-amber-u  { fill: #FAC775; }

            .ao-coral-f  { fill: #4A1B0C; } .ao-coral-s  { stroke: #D85A30; }
            .ao-coral-t  { fill: #FAECE7; } .ao-coral-u  { fill: #F5C4B3; }

            .ao-blue-f   { fill: #042C53; } .ao-blue-s   { stroke: #378ADD; }
            .ao-blue-t   { fill: #E6F1FB; } .ao-blue-u   { fill: #B5D4F4; }
          }
        `}</style>
      </defs>

      {/* Row labels */}
      <text className="ao-lx ao-gray-u" x="18" y="62" textAnchor="middle">Customer</text>
      <text className="ao-lx ao-gray-u" x="18" y="74" textAnchor="middle">AI tools</text>
      <text className="ao-lx ao-gray-u" x="18" y="300" textAnchor="middle">Parlel</text>
      <text className="ao-lx ao-gray-u" x="18" y="312" textAnchor="middle">framework</text>
      <text className="ao-lx ao-gray-u" x="18" y="625" textAnchor="middle">Company</text>
      <text className="ao-lx ao-gray-u" x="18" y="637" textAnchor="middle">back-end</text>

      {/* TOP BAND */}
      <rect x="44" y="30" width="620" height="64" rx="10" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <rect x="56" y="40" width="106" height="44" rx="6" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-ls ao-gray-t" x="109" y="63" textAnchor="middle" dominantBaseline="central">ChatGPT</text>
      <rect x="172" y="40" width="106" height="44" rx="6" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-ls ao-gray-t" x="225" y="63" textAnchor="middle" dominantBaseline="central">Gemini</text>
      <rect x="288" y="40" width="106" height="44" rx="6" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-ls ao-gray-t" x="341" y="63" textAnchor="middle" dominantBaseline="central">Copilot</text>
      <rect x="404" y="40" width="106" height="44" rx="6" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-ls ao-gray-t" x="457" y="63" textAnchor="middle" dominantBaseline="central">Claude</text>
      <rect x="520" y="40" width="132" height="44" rx="6" className="ao-purple-f ao-purple-s" strokeWidth="0.5" />
      <text className="ao-ls ao-purple-t" x="586" y="57" textAnchor="middle" dominantBaseline="central" style={{ fontWeight: 600 }}>parlel.ai</text>
      <text className="ao-lx ao-purple-u" x="586" y="73" textAnchor="middle" dominantBaseline="central">(native)</text>

      {/* API lines */}
      {[109, 225, 341, 457, 586].map((x) => (
        <line key={x} x1={x} y1="94" x2={x} y2="120" className="ao-conn" />
      ))}
      <text className="ao-lx ao-gray-u" x="109" y="108" textAnchor="middle">API</text>
      <text className="ao-lx ao-gray-u" x="225" y="108" textAnchor="middle">API</text>
      <text className="ao-lx ao-gray-u" x="341" y="108" textAnchor="middle">API</text>
      <text className="ao-lx ao-gray-u" x="457" y="108" textAnchor="middle">API</text>

      {/* PARLEL CONTAINER */}
      <rect x="44" y="122" width="620" height="488" rx="12" className="ao-purple-f ao-purple-s" strokeWidth="0.5" />

      {/* KNOWLEDGE */}
      <rect x="62" y="140" width="188" height="172" rx="8" className="ao-teal-f ao-teal-s" strokeWidth="0.5" />
      <text className="ao-lp ao-teal-t" x="156" y="166" textAnchor="middle" dominantBaseline="central">Knowledge layer</text>
      <text className="ao-lx ao-teal-u" x="156" y="184" textAnchor="middle" dominantBaseline="central">Your voice, your facts</text>
      <text className="ao-lx ao-teal-u" x="156" y="214" textAnchor="middle">Document ingestion</text>
      <text className="ao-lx ao-teal-u" x="156" y="232" textAnchor="middle">Retrieval-augmented answers</text>
      <text className="ao-lx ao-teal-u" x="156" y="250" textAnchor="middle">Confidence-gated responses</text>
      <text className="ao-lx ao-teal-u" x="156" y="268" textAnchor="middle">Clean escalation on uncertainty</text>

      {/* COMMERCIAL */}
      <rect x="264" y="140" width="188" height="172" rx="8" className="ao-amber-f ao-amber-s" strokeWidth="0.5" />
      <text className="ao-lp ao-amber-t" x="358" y="166" textAnchor="middle" dominantBaseline="central">Commercial layer</text>
      <text className="ao-lx ao-amber-u" x="358" y="184" textAnchor="middle" dominantBaseline="central">Journeys, offers, control</text>
      <text className="ao-lx ao-amber-u" x="358" y="214" textAnchor="middle">Customer journey config</text>
      <text className="ao-lx ao-amber-u" x="358" y="232" textAnchor="middle">Campaigns &amp; mandates</text>
      <text className="ao-lx ao-amber-u" x="358" y="250" textAnchor="middle">Stage-gated progression</text>
      <text className="ao-lx ao-amber-u" x="358" y="268" textAnchor="middle">Fallback &amp; escalation rules</text>

      {/* AUTHENTICATION */}
      <rect x="466" y="140" width="182" height="172" rx="8" className="ao-coral-f ao-coral-s" strokeWidth="0.5" />
      <text className="ao-lp ao-coral-t" x="557" y="166" textAnchor="middle" dominantBaseline="central">Authentication layer</text>
      <text className="ao-lx ao-coral-u" x="557" y="184" textAnchor="middle" dominantBaseline="central">Progressive identity</text>
      <text className="ao-lx ao-coral-u" x="557" y="214" textAnchor="middle">Anonymous → identified</text>
      <text className="ao-lx ao-coral-u" x="557" y="232" textAnchor="middle">→ OTP verified</text>
      <text className="ao-lx ao-coral-u" x="557" y="250" textAnchor="middle">Friction scales with</text>
      <text className="ao-lx ao-coral-u" x="557" y="268" textAnchor="middle">action sensitivity</text>

      {/* PORTAL */}
      <rect x="62" y="328" width="586" height="72" rx="8" className="ao-blue-f ao-blue-s" strokeWidth="0.5" />
      <text className="ao-lp ao-blue-t" x="355" y="352" textAnchor="middle" dominantBaseline="central">Company configuration portal</text>
      <text className="ao-lx ao-blue-u" x="355" y="372" textAnchor="middle" dominantBaseline="central">Knowledge · journeys · authentication · analytics</text>
      <text className="ao-lx ao-blue-u" x="355" y="390" textAnchor="middle" dominantBaseline="central">parlel.ai/portal — configure once, deploy everywhere</text>

      {/* ACTIONS */}
      <rect x="62" y="416" width="285" height="166" rx="8" className="ao-blue-f ao-blue-s" strokeWidth="0.5" />
      <text className="ao-lp ao-blue-t" x="204" y="442" textAnchor="middle" dominantBaseline="central">Action layer</text>
      <text className="ao-lx ao-blue-u" x="204" y="460" textAnchor="middle" dominantBaseline="central">Verified execution</text>
      <text className="ao-lx ao-blue-u" x="204" y="490" textAnchor="middle">Configurable action flows</text>
      <text className="ao-lx ao-blue-u" x="204" y="508" textAnchor="middle">Schema validation</text>
      <text className="ao-lx ao-blue-u" x="204" y="526" textAnchor="middle">Auth-gated execution</text>
      <text className="ao-lx ao-blue-u" x="204" y="544" textAnchor="middle">Full audit trail</text>

      {/* INTEGRATIONS */}
      <rect x="363" y="416" width="285" height="166" rx="8" className="ao-blue-f ao-blue-s" strokeWidth="0.5" />
      <text className="ao-lp ao-blue-t" x="505" y="442" textAnchor="middle" dominantBaseline="central">Integration layer</text>
      <text className="ao-lx ao-blue-u" x="505" y="460" textAnchor="middle" dominantBaseline="central">Connect your systems</text>
      <text className="ao-lx ao-blue-u" x="505" y="490" textAnchor="middle">Pre-built connectors</text>
      <text className="ao-lx ao-blue-u" x="505" y="508" textAnchor="middle">HubSpot · Salesforce · Stripe</text>
      <text className="ao-lx ao-blue-u" x="505" y="526" textAnchor="middle">Zendesk · custom REST</text>
      <text className="ao-lx ao-blue-u" x="505" y="544" textAnchor="middle">Encrypted credential storage</text>

      {/* Arrow + backend */}
      <line x1="354" y1="612" x2="354" y2="634" className="ao-conn" markerEnd="url(#ao-arrow)" />
      <rect x="44" y="636" width="620" height="28" rx="8" className="ao-gray-f ao-gray-s" strokeWidth="0.5" />
      <text className="ao-ls ao-gray-t" x="354" y="652" textAnchor="middle" dominantBaseline="central">Company back-end — your existing systems, unchanged</text>
    </svg>
  );
}
