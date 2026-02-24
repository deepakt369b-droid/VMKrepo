import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* The ScrollAnimation component pins itself and requires scrolling. 
          The parent container must allow scrolling. GSAP pins inside it. */}

      <ScrollAnimation />

      {/* Adding space after the full animation runs so users can scroll further down, 
          signaling that more content like 'About' and 'Services' will be here. */}
      <section className="min-h-screen flex items-center justify-center bg-neutral-950 p-8 pt-32 z-10 relative border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-amber-500">Built on Trust, Delivered with Speed</h2>
          <p className="text-xl text-neutral-400 mb-8">
            From initial planning and Dubai municipality approvals to final handover, VMK Construction ensures a seamless journey to your dream building.
          </p>
          <button className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
            Get a Quote
          </button>
        </div>
      </section>
    </main>
  );
}
