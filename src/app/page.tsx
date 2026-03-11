import ScrollAnimation from "@/components/ScrollAnimation";
import BlogSection from "@/components/BlogSection";
import TeamSection from "@/components/TeamSection";
import ProjectSection from "@/components/ProjectSection";
import PartnerMarquee from "@/components/PartnerMarquee";
import FAQSection from "@/components/FAQSection";
import Threads from "@/components/Threads";
import Glass3DIcon from "@/components/Glass3DIcon";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black">
      {/* Scroll-driven 3D animation — unchanged */}
      <ScrollAnimation />

      {/* ── All content below with explicit stacking ── */}
      <div className="relative z-10">

        {/* ── Hero CTA ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black border-t border-white/5">

          <div className="absolute inset-0 z-0 opacity-40">
            <Threads
              amplitude={2}
              distance={0}
              color={[1, 1, 1]}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center px-6 lg:px-8 relative z-10 py-24">

            {/* Gold rule line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
              <span className="text-amber-500 text-xs font-bold tracking-[0.35em] uppercase">Premium Construction Dubai</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>

            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              <span className="text-white">Built on </span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Trust
              </span>
              <span className="text-white">,<br />Delivered with </span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Speed
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              From initial planning and Dubai municipality approvals to final handover, VMK Construction ensures a seamless journey to your dream building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                Get a Free Quote
              </button>
              <a href="/about" className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold border border-white/10 hover:border-amber-500/50 rounded-full tracking-wider text-sm transition-all duration-300 hover:text-amber-500">
                Our Story
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '200+', label: 'Projects Completed' },
                { value: '15+', label: 'Years Experience' },
                { value: '50+', label: 'Expert Engineers' },
                { value: '100%', label: 'On-Time Delivery' },
              ].map((stat) => (
                <div key={stat.label} className="group text-center cursor-default">
                  <div className="text-4xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Strip ── */}
        <section className="border-t border-white/5 bg-neutral-950 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: 'Authority Approvals',
                  desc: 'DM, DCD, DEWA, and all UAE regulatory approvals handled seamlessly.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: 'Construction',
                  desc: 'End-to-end residential, commercial, and fit-out contracting services.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Handover',
                  desc: 'Final inspections, snag clearance, and smooth project handover.',
                },
              ].map((service) => (
                <a
                  href="/services"
                  key={service.title}
                  className="group relative p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] hover:-translate-y-1"
                >
                  <Glass3DIcon className="w-14 h-14 rounded-xl mb-6 transition-all duration-300 group-hover:-translate-y-1">
                    {service.icon}
                  </Glass3DIcon>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-6 flex items-center text-amber-500/70 text-sm font-semibold group-hover:text-amber-500 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner Marquee ── */}
        <PartnerMarquee />

        {/* ── Projects Section ── */}
        <ProjectSection />

        {/* ── Team Section ── */}
        <TeamSection />

        {/* ── Blog Section ── */}
        <BlogSection />

        {/* ── FAQ Section ── */}
        <FAQSection />

        {/* ── CTA Banner ── */}
        <section className="relative py-24 overflow-hidden bg-black border-t border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let VMK Construction bring your project to life. Contact us today for a complimentary consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                Get a Free Quote
              </button>
              <a href="/contact" className="px-10 py-4 bg-transparent text-white font-semibold border border-white/10 hover:border-amber-500/50 rounded-full tracking-wider text-sm transition-all duration-300 hover:text-amber-500">
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
