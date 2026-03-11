import { BLOG_POSTS } from '@/lib/blogData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

const categoryColors: Record<string, string> = {
    Approvals: 'text-blue-400 bg-blue-400/10',
    Construction: 'text-emerald-400 bg-emerald-400/10',
    Market: 'text-amber-400 bg-amber-400/10',
};

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) notFound();

    const related = BLOG_POSTS.filter(
        (p) => p.id !== post.id && p.category === post.category
    ).slice(0, 2);

    return (
        <main className="min-h-screen bg-black text-white">
            {/* ── Hero ── */}
            <section className="relative pt-32 pb-0 overflow-hidden">
                <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover brightness-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 max-w-4xl mx-auto w-full left-0 right-0">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-white transition-colors mb-6"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit ${categoryColors[post.category]}`}>
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-neutral-400 text-sm">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Article Body ── */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-amber-100
              prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-amber-500 prose-a:no-underline hover:prose-a:text-amber-400"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share / CTA strip */}
                    <div className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="text-white font-bold mb-1">Ready to Start Your Project?</p>
                            <p className="text-neutral-500 text-sm">Talk to our team — we respond within 24 hours.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Related Posts ── */}
            {related.length > 0 && (
                <section className="py-16 px-6 border-t border-white/5 bg-neutral-950">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-serif text-white mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {related.map((rp) => (
                                <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                                    <div className="bg-black/60 border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)]">
                                        <div className="relative h-44 overflow-hidden">
                                            <img
                                                src={rp.image}
                                                alt={rp.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className={`text-xs font-bold ${categoryColors[rp.category]} px-2 py-0.5 rounded-full`}>{rp.category}</span>
                                            <h3 className="font-bold text-white mt-2 text-sm leading-snug group-hover:text-amber-400 transition-colors">{rp.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
