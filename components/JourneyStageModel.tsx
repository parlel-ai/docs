export default function JourneyStageModel() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 780"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Parlel journey stage model — Change journey"
      style={{ display: "block" }}
    >
      <title>Parlel journey stage model — Change journey</title>
      <desc>
        A dotted container labelled Change Journey encloses three stages and
        their guardrail transitions. A trigger pill outside points to the
        container edge. Stage 1: Understand intent. Stage 2: Retention offer.
        Stage 3: Execute decision. A confirmation guardrail leads to Journey
        complete.
      </desc>

      <defs>
        <marker id="jsm-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <style>{`
          .jsm-lp { font-family: inherit; font-size: 13px; font-weight: 600; }
          .jsm-ls { font-family: inherit; font-size: 11px; font-weight: 400; }
          .jsm-lx { font-family: inherit; font-size: 11px; font-weight: 500; }
          .jsm-conn { stroke-width: 1.5; fill: none; }

          .jsm-gray-f   { fill: #F1EFE8; } .jsm-gray-s   { stroke: #B4B2A9; }
          .jsm-gray-t   { fill: #2C2C2A; } .jsm-gray-u   { fill: #5F5E5A;  }
          .jsm-purple-f { fill: #EEEDFE; } .jsm-purple-s { stroke: #AFA9EC; }
          .jsm-purple-t { fill: #26215C; } .jsm-purple-u { fill: #534AB7;  }
          .jsm-teal-f   { fill: #E1F5EE; } .jsm-teal-s   { stroke: #5DCAA5; }
          .jsm-teal-t   { fill: #085041; } .jsm-teal-u   { fill: #0F6E56;  }
          .jsm-coral-f  { fill: #FAECE7; } .jsm-coral-s  { stroke: #F0997B; }
          .jsm-coral-t  { fill: #4A1B0C; } .jsm-coral-u  { fill: #712B13;  }
          .jsm-amber-f  { fill: #FAEEDA; } .jsm-amber-s  { stroke: #EF9F27; }
          .jsm-amber-t  { fill: #412402; } .jsm-amber-u  { fill: #633806;  }
          .jsm-blue-f   { fill: #E6F1FB; } .jsm-blue-s   { stroke: #85B7EB; }
          .jsm-blue-t   { fill: #042C53; } .jsm-blue-u   { fill: #0C447C;  }

          @media (prefers-color-scheme: dark) {
            .jsm-gray-f   { fill: #2C2C2A; } .jsm-gray-s   { stroke: #5F5E5A; }
            .jsm-gray-t   { fill: #F1EFE8; } .jsm-gray-u   { fill: #D3D1C7; }
            .jsm-purple-f { fill: #26215C; } .jsm-purple-s { stroke: #7F77DD; }
            .jsm-purple-t { fill: #EEEDFE; } .jsm-purple-u { fill: #CECBF6; }
            .jsm-teal-f   { fill: #04342C; } .jsm-teal-s   { stroke: #1D9E75; }
            .jsm-teal-t   { fill: #E1F5EE; } .jsm-teal-u   { fill: #9FE1CB; }
            .jsm-coral-f  { fill: #4A1B0C; } .jsm-coral-s  { stroke: #D85A30; }
            .jsm-coral-t  { fill: #FAECE7; } .jsm-coral-u  { fill: #F5C4B3; }
            .jsm-amber-f  { fill: #412402; } .jsm-amber-s  { stroke: #BA7517; }
            .jsm-amber-t  { fill: #FAEEDA; } .jsm-amber-u  { fill: #FAC775; }
            .jsm-blue-f   { fill: #042C53; } .jsm-blue-s   { stroke: #378ADD; }
            .jsm-blue-t   { fill: #E6F1FB; } .jsm-blue-u   { fill: #B5D4F4; }
          }
        `}</style>
      </defs>

      {/* TRIGGER PILL */}
      <rect x="20" y="20" width="222" height="26" rx="13" className="jsm-gray-f jsm-gray-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-gray-t" x="36" y="33" dominantBaseline="central">Customer requests a change</text>
      <line x1="242" y1="33" x2="290" y2="33" className="jsm-conn jsm-gray-s" />
      <line x1="290" y1="33" x2="290" y2="71" className="jsm-conn jsm-gray-s" markerEnd="url(#jsm-arrow)" />

      {/* Journey label above container */}
      <text className="jsm-lx jsm-purple-u" x="14" y="57" dominantBaseline="central">Change journey</text>

      {/* JOURNEY CONTAINER */}
      <rect x="14" y="68" width="652" height="694" rx="12" fill="none" stroke="#888780" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.4" />

      {/* STAGE 1 */}
      <rect x="26" y="84" width="390" height="44" rx="8" className="jsm-purple-f jsm-purple-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-purple-t" x="42" y="101" dominantBaseline="central">Stage 1 — Understand intent</text>
      <text className="jsm-ls jsm-purple-u" x="42" y="117" dominantBaseline="central">Guardrail: none · accessible immediately</text>
      <line x1="221" y1="128" x2="221" y2="146" stroke="#888780" strokeWidth="1" opacity="0.35" />

      {/* S1 caps */}
      <rect x="26" y="148" width="122" height="44" rx="6" className="jsm-teal-f jsm-teal-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-teal-t" x="36" y="165" dominantBaseline="central">Knowledge</text>
      <text className="jsm-ls jsm-teal-u" x="36" y="181" dominantBaseline="central">Company content</text>

      <rect x="156" y="148" width="130" height="44" rx="6" className="jsm-coral-f jsm-coral-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-coral-t" x="166" y="165" dominantBaseline="central">Authentication</text>
      <text className="jsm-ls jsm-coral-u" x="166" y="181" dominantBaseline="central">Tier 1 required</text>

      <rect x="294" y="148" width="122" height="44" rx="6" className="jsm-gray-f jsm-gray-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-gray-t" x="304" y="165" dominantBaseline="central">Fallback</text>
      <text className="jsm-ls jsm-gray-u" x="304" y="181" dominantBaseline="central">Escalation rules</text>

      {/* G1→2 */}
      <line x1="416" y1="106" x2="428" y2="106" className="jsm-conn jsm-gray-s" />
      <rect x="428" y="94" width="216" height="24" rx="12" className="jsm-amber-f jsm-amber-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-amber-t" x="442" y="106" dominantBaseline="central">Request captured</text>
      <path d="M644 106 L652 106 L652 254" className="jsm-conn jsm-gray-s" markerEnd="url(#jsm-arrow)" />

      {/* STAGE 2 */}
      <rect x="26" y="256" width="390" height="44" rx="8" className="jsm-purple-f jsm-purple-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-purple-t" x="42" y="273" dominantBaseline="central">Stage 2 — Retention offer</text>
      <text className="jsm-ls jsm-purple-u" x="42" y="289" dominantBaseline="central">Guardrail: request captured</text>
      <line x1="221" y1="300" x2="221" y2="318" stroke="#888780" strokeWidth="1" opacity="0.35" />

      {/* S2 caps row 1 */}
      <rect x="26" y="320" width="122" height="44" rx="6" className="jsm-teal-f jsm-teal-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-teal-t" x="36" y="337" dominantBaseline="central">Knowledge</text>
      <text className="jsm-ls jsm-teal-u" x="36" y="353" dominantBaseline="central">Company content</text>

      <rect x="156" y="320" width="130" height="44" rx="6" className="jsm-coral-f jsm-coral-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-coral-t" x="166" y="337" dominantBaseline="central">Authentication</text>
      <text className="jsm-ls jsm-coral-u" x="166" y="353" dominantBaseline="central">Tier 2 required</text>

      <rect x="294" y="320" width="122" height="44" rx="6" className="jsm-amber-f jsm-amber-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-amber-t" x="304" y="337" dominantBaseline="central">Mandates</text>
      <text className="jsm-ls jsm-amber-u" x="304" y="353" dominantBaseline="central">Negotiating authority</text>

      {/* S2 caps row 2 */}
      <rect x="26" y="372" width="122" height="44" rx="6" className="jsm-amber-f jsm-amber-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-amber-t" x="36" y="389" dominantBaseline="central">Campaigns</text>
      <text className="jsm-ls jsm-amber-u" x="36" y="405" dominantBaseline="central">Time-bound offers</text>

      <rect x="156" y="372" width="130" height="44" rx="6" className="jsm-gray-f jsm-gray-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-gray-t" x="166" y="389" dominantBaseline="central">Fallback</text>
      <text className="jsm-ls jsm-gray-u" x="166" y="405" dominantBaseline="central">Escalation rules</text>

      {/* G2→3 */}
      <line x1="416" y1="278" x2="428" y2="278" className="jsm-conn jsm-gray-s" />
      <rect x="428" y="266" width="216" height="24" rx="12" className="jsm-amber-f jsm-amber-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-amber-t" x="442" y="278" dominantBaseline="central">Proposal accepted</text>
      <path d="M644 278 L652 278 L652 474" className="jsm-conn jsm-gray-s" markerEnd="url(#jsm-arrow)" />

      {/* STAGE 3 */}
      <rect x="26" y="476" width="390" height="44" rx="8" className="jsm-purple-f jsm-purple-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-purple-t" x="42" y="493" dominantBaseline="central">Stage 3 — Execute decision</text>
      <text className="jsm-ls jsm-purple-u" x="42" y="509" dominantBaseline="central">Guardrail: proposal accepted</text>
      <line x1="221" y1="520" x2="221" y2="538" stroke="#888780" strokeWidth="1" opacity="0.35" />

      {/* S3 caps */}
      <rect x="26" y="540" width="122" height="44" rx="6" className="jsm-blue-f jsm-blue-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-blue-t" x="36" y="557" dominantBaseline="central">Actions</text>
      <text className="jsm-ls jsm-blue-u" x="36" y="573" dominantBaseline="central">Verified execution</text>

      <rect x="156" y="540" width="130" height="44" rx="6" className="jsm-teal-f jsm-teal-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-teal-t" x="166" y="557" dominantBaseline="central">Knowledge</text>
      <text className="jsm-ls jsm-teal-u" x="166" y="573" dominantBaseline="central">Company content</text>

      <rect x="294" y="540" width="122" height="44" rx="6" className="jsm-coral-f jsm-coral-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-coral-t" x="304" y="557" dominantBaseline="central">Authentication</text>
      <text className="jsm-ls jsm-coral-u" x="304" y="573" dominantBaseline="central">Tier 2 required</text>

      {/* G3→complete */}
      <line x1="416" y1="498" x2="428" y2="498" className="jsm-conn jsm-gray-s" />
      <rect x="428" y="486" width="216" height="24" rx="12" className="jsm-amber-f jsm-amber-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-amber-t" x="442" y="498" dominantBaseline="central">Confirmation</text>
      <path d="M644 498 L652 498 L652 676" className="jsm-conn jsm-gray-s" markerEnd="url(#jsm-arrow)" />

      {/* JOURNEY COMPLETE */}
      <rect x="26" y="678" width="390" height="44" rx="8" className="jsm-gray-f jsm-gray-s" strokeWidth="0.5" />
      <text className="jsm-lp jsm-gray-t" x="42" y="695" dominantBaseline="central">Journey complete</text>
      <text className="jsm-ls jsm-gray-u" x="42" y="711" dominantBaseline="central">Change executed and confirmed</text>
    </svg>
  );
}
