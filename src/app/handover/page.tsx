import React from 'react';

export default function HandoverPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">Testing, Commissioning & Handover</h1>
                <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
                    The final mile is the most crucial. We secure the Building Completion Certificate (BCC) and ensure every system operates flawlessly before handing over the keys.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Snagging & Rectification</h3>
                        <p className="text-neutral-400 text-sm">Detailed walkthroughs to identify and immediately resolve any micro-defects or cosmetic issues prior to client handover.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Systems Commissioning</h3>
                        <p className="text-neutral-400 text-sm">Rigorous testing of HVAC, fire suppression, smart home systems, and electrical load balancing.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Final Authority Inspections</h3>
                        <p className="text-neutral-400 text-sm">Coordinating DM, DCD, and DEWA inspectors for final site visits and utility connections.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">O&M Manual Delivery</h3>
                        <p className="text-neutral-400 text-sm">Providing comprehensive Operation & Maintenance manuals, warranties, and as-built drawings to the client.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
