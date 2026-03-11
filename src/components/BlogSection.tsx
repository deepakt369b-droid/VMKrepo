import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogData';

const posts = BLOG_POSTS.slice(0, 3);

export default function BlogSection() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Latest Insights</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full mb-6 relative">
                        <div className="absolute inset-0 bg-amber-500 blur-sm opacity-50"></div>
                    </div>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Stay updated with our latest industry news, tips, and professional advice on contracting in Dubai.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:border-amber-500/30"
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>

                            <div className="p-8 relative">
                                <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase mb-3 block">
                                    {post.date}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-neutral-400 mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors group/link"
                                >
                                    Read More
                                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/blog" className="inline-flex items-center px-8 py-3.5 border border-white/10 hover:border-amber-500/40 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:text-amber-500 gap-2">
                        View All Articles
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
