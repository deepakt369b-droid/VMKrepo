import React from 'react';

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-neutral-950 text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">About VMK Construction</h1>
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                    Based in Dubai, VMK Construction specializes in seamless building approvals and premium contracting. We navigate complex municipal requirements so you don't have to.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-black border border-neutral-800 p-8 rounded-2xl">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
                        <p className="text-neutral-400">To deliver uncompromising quality and rapid authority approvals for residential and commercial projects across the UAE.</p>
                    </div>
                    <div className="bg-black border border-neutral-800 p-8 rounded-2xl">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Why Choose Us</h3>
                        <p className="text-neutral-400">Years of local expertise, transparent pricing, and a proven track record of bringing ambitious architectural visions to life.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
