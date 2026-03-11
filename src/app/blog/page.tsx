"use client";

import { useState } from 'react';
import Link from 'next/link';
import Threads from '@/components/Threads';
import { BLOG_POSTS } from '@/lib/blogData';

const categories = ['All', 'Approvals', 'Construction', 'Market'];
const categoryColors: Record<string, string> = {
    Approvals: 'text-blue-400 bg-blue-400/10',
    Construction: 'text-emerald-400 bg-emerald-400/10',
    Market: 'text-amber-400 bg-amber-400/10',
};

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    // Filter posts based on active category
    const filteredPosts = activeCategory === 'All'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    // Get the featured post (first item in the filtered array)
    const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

    return (
        <main className="min-h-screen bg-black text-white">

            {/* ── Hero ── */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Threads amplitude={2} distance={0} color={[1, 1, 1]} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-amber-500/60" />
                        <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Industry Insights</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        The VMK{' '}
                        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Journal
                        </span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                        Expert perspectives on Dubai construction, authority approvals, and the evolving real estate landscape.
                    </p>
                </div>
            </section>

            {/* ── Category Filter ── */}
            <section className="border-t border-white/5 py-4 md:py-6 px-6 bg-neutral-950/80 sticky top-16 z-30 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide md:flex-wrap md:overflow-visible pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                    {categories.map((cat) => (
                        <span
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 shrink-0 ${cat === activeCategory
                                ? 'bg-amber-500 text-black'
                                : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5'
                                }`}
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            </section>

            {/* ── Posts Grid ── */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Featured post */}
                    {featuredPost && (
                        <Link href={`/blog/${featuredPost.slug}`} className="block group mb-8">
                            <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]">
                                <div className="relative h-72 md:h-[420px] w-full overflow-hidden">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit ${categoryColors[featuredPost.category]}`}>
                                            {featuredPost.category}
                                        </span>
                                        <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 max-w-3xl group-hover:text-amber-300 transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-neutral-300 mb-4 max-w-2xl hidden md:block">{featuredPost.excerpt}</p>
                                        <div className="flex items-center gap-4 text-neutral-400 text-sm">
                                            <span>{featuredPost.date}</span><span>·</span><span>{featuredPost.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.slice(1).map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                                <article className="bg-neutral-950/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] h-full flex flex-col">
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${categoryColors[post.category]}`}>{post.category}</span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-neutral-500 text-xs mb-3">
                                            <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-amber-400 transition-colors flex-1">{post.title}</h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
                                        <div className="flex items-center text-amber-500 text-sm font-semibold gap-2 group-hover:gap-3 transition-all">
                                            Read Article
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-24 border border-white/5 rounded-2xl bg-white/5 mt-8">
                            <p className="text-neutral-400 text-lg">No articles found in this category.</p>
                            <button onClick={() => setActiveCategory('All')} className="mt-4 px-6 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors">
                                View Full Journal
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Newsletter CTA ── */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Stay In the Know</h2>
                    <p className="text-neutral-400 mb-8">Get the latest Dubai construction insights delivered to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="your@email.com" className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-all" />
                        <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

        </main>
    );
}
