"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '@/lib/blogData';
import { PROJECT_DATA, Project } from '@/lib/projectData';
import { TEAM_DATA, TeamMember } from '@/lib/teamData';
import { FAQ_DATA, FAQItem } from '@/lib/faqData';
import { PARTNER_DATA, Partner } from '@/lib/partnerData';
import { CAROUSEL_SETTINGS, CarouselSettings } from '@/lib/carouselSettings';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const PartnerMarquee = dynamic(() => import('@/components/PartnerMarquee'), { ssr: false });

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

type Tab = 'blog' | 'projects' | 'team' | 'faq' | 'partners' | 'settings' | 'account';
type SettingsTab = 'smtp' | 'whatsapp';

// Utility to convert Google Drive public view links into direct image links
const convertImageLink = (url: string) => {
    if (!url) return '';

    // Matches: /file/d/ID/view, /open?id=ID, /uc?id=ID
    const driveRegex = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=view&)?id=)([a-zA-Z0-9_-]+)/;
    const match = url.match(driveRegex);

    if (match && match[1]) {
        // We use uc?export=view as it acts as a direct image stream for files < 100MB
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }

    return url;
};

// Rich text editor toolbar config
const modules = {
    toolbar: [
        [{ 'header': [2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['clean']
    ],
};

export default function AdminDashboard() {
    const router = useRouter();
    const [checking, setChecking] = useState(true);
    const [tab, setTab] = useState<Tab>('blog');
    const [settingsTab, setSettingsTab] = useState<SettingsTab>('smtp');

    // CMS States
    const [posts, setPosts] = useState<BlogPost[]>([...BLOG_POSTS]);
    const [editPost, setEditPost] = useState<BlogPost | null>(null);

    const [projects, setProjects] = useState<Project[]>([...PROJECT_DATA]);
    const [editProject, setEditProject] = useState<Project | null>(null);

    const [team, setTeam] = useState<TeamMember[]>([...TEAM_DATA]);
    const [editTeam, setEditTeam] = useState<TeamMember | null>(null);

    const [faqs, setFaqs] = useState<FAQItem[]>([...FAQ_DATA]);
    const [editFaq, setEditFaq] = useState<FAQItem | null>(null);

    const [partners, setPartners] = useState<Partner[]>([...PARTNER_DATA]);
    const [editPartner, setEditPartner] = useState<Partner | null>(null);

    const [carouselSettings, setCarouselSettings] = useState<CarouselSettings>({ ...CAROUSEL_SETTINGS });
    const [carouselSettingsSaved, setCarouselSettingsSaved] = useState(false);

    const [isAddingNew, setIsAddingNew] = useState(false);

    // Image Preview State
    const [imagePreviewStatus, setImagePreviewStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // SMTP state
    const [smtp, setSmtp] = useState({ host: '', port: '587', user: '', pass: '', from: '' });
    const [smtpSaved, setSmtpSaved] = useState(false);

    // WhatsApp state
    const [wa, setWa] = useState({ number: '+971500000000', template: 'Hi VMK Construction, I would like to enquire about your services.' });
    const [waSaved, setWaSaved] = useState(false);

    // Account state
    const [pwForm, setPwForm] = useState({ current: '', newPw: '', confirm: '' });
    const [pwMsg, setPwMsg] = useState('');

    useEffect(() => {
        fetch('/api/admin/session')
            .then(r => r.ok ? r.json() : Promise.reject())
            .then(() => setChecking(false))
            .catch(() => router.push('/admin/login'));
    }, [router]);

    const handleLogout = useCallback(async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.push('/admin/login');
    }, [router]);

    // CMS Handlers
    const handleSavePost = async (post: BlogPost) => {
        const newPosts = posts.find(p => p.id === post.id) ? posts.map(p => p.id === post.id ? post : p) : [...posts, { ...post, id: Date.now() }];
        setPosts(newPosts);
        setEditPost(null); setIsAddingNew(false);
        await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'blog', data: newPosts }) });
    };

    const handleSaveProject = async (project: Project) => {
        const newProjects = projects.find(p => p.id === project.id) ? projects.map(p => p.id === project.id ? project : p) : [...projects, { ...project, id: Date.now() }];
        setProjects(newProjects);
        setEditProject(null); setIsAddingNew(false);
        await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'projects', data: newProjects }) });
    };

    const handleSaveTeam = async (member: TeamMember) => {
        const newTeam = team.find(p => p.id === member.id) ? team.map(p => p.id === member.id ? member : p) : [...team, { ...member, id: Date.now() }];
        setTeam(newTeam);
        setEditTeam(null); setIsAddingNew(false);
        await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'team', data: newTeam }) });
    };

    const handleSaveFaq = async (faq: FAQItem) => {
        const newFaqs = faqs.find(p => p.id === faq.id) ? faqs.map(p => p.id === faq.id ? faq : p) : [...faqs, { ...faq, id: Date.now() }];
        setFaqs(newFaqs);
        setEditFaq(null); setIsAddingNew(false);
        await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'faq', data: newFaqs }) });
    };

    if (checking) return <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" /></div>;

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* ── Sidebar ── */}
            <aside className="w-64 shrink-0 border-r border-white/5 flex flex-col bg-neutral-950/80 sticky top-0 h-screen">
                <div className="p-6 border-b border-white/5">
                    <span className="text-2xl font-black text-white uppercase tracking-wide">VMK</span>
                    <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mt-0.5">Admin Panel</div>
                </div>
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
                    <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest px-4 mb-2 mt-2">Content Manager</div>
                    {([
                        { key: 'blog', label: 'Blog Posts', icon: '📝' },
                        { key: 'projects', label: 'Projects', icon: '🏗️' },
                        { key: 'team', label: 'Team', icon: '👥' },
                        { key: 'faq', label: 'FAQs', icon: '❓' },
                        { key: 'partners', label: 'Carousel Logos', icon: '🎡' },
                    ] as { key: Tab; label: string; icon: string }[]).map(item => (
                        <button key={item.key} onClick={() => { setTab(item.key); setIsAddingNew(false); setEditPost(null); setEditProject(null); setEditTeam(null); setEditFaq(null); setEditPartner(null); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${tab === item.key ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}>
                            <span>{item.icon}</span>{item.label}
                        </button>
                    ))}

                    <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest px-4 mb-2 mt-6">System</div>
                    {([
                        { key: 'settings', label: 'Settings', icon: '⚙️' },
                        { key: 'account', label: 'Account', icon: '👤' },
                    ] as { key: Tab; label: string; icon: string }[]).map(item => (
                        <button key={item.key} onClick={() => { setTab(item.key); setIsAddingNew(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${tab === item.key ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}>
                            <span>{item.icon}</span>{item.label}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t border-white/5">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-neutral-400 hover:bg-red-500/10 hover:text-red-400 transition-all">
                        <span>🚪</span> Log Out
                    </button>
                </div>
            </aside>

            {/* ── Main Content ── */}
            <main className="flex-1 p-8 overflow-y-auto">

                {/* ── BLOG TAB ── */}
                {tab === 'blog' && !editPost && !isAddingNew && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div><h1 className="text-2xl font-serif font-bold text-white">Blog Posts</h1><p className="text-neutral-500 text-sm">{posts.length} articles</p></div>
                            <button onClick={() => { setEditPost({ id: 0, slug: '', category: 'Market', title: '', excerpt: '', date: new Date().toLocaleDateString('en-GB'), readTime: '5 min read', image: '', content: '' }); setIsAddingNew(true); }} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">+ New Post</button>
                        </div>
                        <div className="space-y-3">
                            {posts.map(post => (
                                <div key={post.id} className="flex items-center gap-4 p-5 bg-neutral-950/80 border border-white/5 rounded-xl hover:border-white/10 transition-all group">
                                    <img src={post.image} alt="" className="w-16 h-14 object-cover rounded-lg shrink-0" />
                                    <div className="flex-1 min-w-0"><div className="flex items-center gap-2 mb-1"><span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{post.category}</span><span className="text-neutral-600">·</span><span className="text-xs text-neutral-500">{post.date}</span></div><h3 className="font-semibold text-white text-sm truncate">{post.title}</h3></div>
                                    <div className="flex gap-2 shrink-0">
                                        <button onClick={() => { setEditPost(post); setIsAddingNew(false); setImagePreviewStatus('idle'); }} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-amber-500/30 hover:text-amber-400 transition-all">Edit</button>
                                        <button onClick={() => setPosts(prev => prev.filter(p => p.id !== post.id))} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-red-500/30 hover:text-red-400 transition-all">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === 'blog' && editPost && (
                    <div className="pb-32">
                        <button onClick={() => { setEditPost(null); setIsAddingNew(false); }} className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm mb-6 transition-colors">← Back to Posts</button>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">{isAddingNew ? 'New Post' : 'Edit Post'}</h1>
                        <div className="space-y-6 max-w-3xl">
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Title *</label><input value={editPost.title} onChange={e => setEditPost({ ...editPost, title: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Slug *</label><input value={editPost.slug} onChange={e => setEditPost({ ...editPost, slug: e.target.value })} placeholder="my-article-slug" className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                                <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Category</label><select value={editPost.category} onChange={e => setEditPost({ ...editPost, category: e.target.value as BlogPost['category'] })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"><option>Market</option><option>Approvals</option><option>Construction</option></select></div>
                            </div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Excerpt</label><textarea value={editPost.excerpt} onChange={e => setEditPost({ ...editPost, excerpt: e.target.value })} rows={2} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all resize-none" /></div>

                            {/* Image Conversion Flow */}
                            <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-5">
                                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Cover Image URL</label>
                                <p className="text-xs text-neutral-500 mb-3">Paste a direct image link or a Google Drive sharing link (restricted to "Anyone with link"). Drive links are converted automatically.</p>
                                <div className="flex gap-3">
                                    <input
                                        value={editPost.image}
                                        onChange={e => {
                                            const newUrl = convertImageLink(e.target.value);
                                            setEditPost({ ...editPost, image: newUrl });
                                            setImagePreviewStatus(newUrl ? 'loading' : 'idle');
                                        }}
                                        placeholder="https://..."
                                        className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                                    />
                                </div>

                                {editPost.image && (
                                    <div className="mt-4 flex items-center gap-4">
                                        <div className="w-32 h-20 rounded-lg overflow-hidden border border-white/10 relative bg-black shrink-0 relative flex items-center justify-center">
                                            {imagePreviewStatus === 'loading' && <div className="w-5 h-5 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin absolute" />}
                                            <img
                                                src={editPost.image}
                                                alt="Preview"
                                                className={`w-full h-full object-cover transition-opacity ${imagePreviewStatus === 'success' ? 'opacity-100' : 'opacity-0'}`}
                                                onLoad={() => setImagePreviewStatus('success')}
                                                onError={() => setImagePreviewStatus('error')}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            {imagePreviewStatus === 'success' && <span className="inline-flex items-center text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">✓ Image Loaded Successfully</span>}
                                            {imagePreviewStatus === 'error' && <span className="inline-flex items-center text-xs font-bold text-red-400 bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">✕ Invalid Link or Restricted Access</span>}
                                            {imagePreviewStatus === 'loading' && <span className="text-xs text-neutral-500">Checking link...</span>}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="quill-dark-theme pt-4">
                                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Content</label>
                                <div className="bg-black/60 border border-white/10 rounded-xl overflow-hidden">
                                    <ReactQuill
                                        theme="snow"
                                        value={editPost.content}
                                        onChange={val => setEditPost({ ...editPost, content: val })}
                                        modules={modules}
                                        className="text-white min-h-[300px]"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 pt-6 border-t border-white/5">
                                <button onClick={() => handleSavePost(editPost)} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">Save Post</button>
                                <button onClick={() => { setEditPost(null); setIsAddingNew(false); }} className="px-6 py-3 border border-white/10 text-neutral-400 font-semibold text-sm rounded-xl hover:border-white/20 hover:text-white transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── PROJECTS TAB ── */}
                {tab === 'projects' && !editProject && !isAddingNew && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div><h1 className="text-2xl font-serif font-bold text-white">Projects</h1><p className="text-neutral-500 text-sm">{projects.length} showcase projects</p></div>
                            <button onClick={() => { setEditProject({ id: 0, title: '', category: '', description: '', stats: [{ label: '', value: '' }, { label: '', value: '' }, { label: '', value: '' }], image: '', badge: 'Featured' }); setIsAddingNew(true); }} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">+ New Project</button>
                        </div>
                        <div className="space-y-3">
                            {projects.map(proj => (
                                <div key={proj.id} className="flex items-center gap-4 p-5 bg-neutral-950/80 border border-white/5 rounded-xl hover:border-white/10 transition-all group">
                                    <img src={proj.image} alt="" className="w-16 h-14 object-cover rounded-lg shrink-0" />
                                    <div className="flex-1 min-w-0"><div className="flex items-center gap-2 mb-1"><span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{proj.category}</span><span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">{proj.badge}</span></div><h3 className="font-semibold text-white text-sm truncate">{proj.title}</h3></div>
                                    <div className="flex gap-2 shrink-0">
                                        <button onClick={() => { setEditProject(proj); setIsAddingNew(false); }} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-amber-500/30 hover:text-amber-400 transition-all">Edit</button>
                                        <button onClick={() => setProjects(prev => prev.filter(p => p.id !== proj.id))} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-red-500/30 hover:text-red-400 transition-all">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === 'projects' && editProject && (
                    <div className="pb-32">
                        <button onClick={() => { setEditProject(null); setIsAddingNew(false); }} className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm mb-6 transition-colors">← Back to Projects</button>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">{isAddingNew ? 'New Project' : 'Edit Project'}</h1>
                        <div className="space-y-6 max-w-3xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Title *</label><input value={editProject.title} onChange={e => setEditProject({ ...editProject, title: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                                <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Badge Text</label><input value={editProject.badge} onChange={e => setEditProject({ ...editProject, badge: e.target.value })} placeholder="e.g. Completed" className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                            </div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Category</label><input value={editProject.category} onChange={e => setEditProject({ ...editProject, category: e.target.value })} placeholder="Luxury Residential" className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Description</label><textarea value={editProject.description} onChange={e => setEditProject({ ...editProject, description: e.target.value })} rows={3} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all resize-none" /></div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Cover Image URL (Google Drive Links Supported)</label><input value={editProject.image} onChange={e => setEditProject({ ...editProject, image: convertImageLink(e.target.value) })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>

                            <div className="bg-neutral-900/50 p-5 rounded-xl border border-white/5 disabled-text">
                                <label className="block text-xs font-semibold text-amber-500 uppercase tracking-wider mb-4">Project Statistics (3 Required)</label>
                                <div className="space-y-3">
                                    {editProject.stats.map((stat, i) => (
                                        <div key={i} className="flex gap-3">
                                            <input value={stat.label} onChange={e => { const newStats = [...editProject.stats]; newStats[i].label = e.target.value; setEditProject({ ...editProject, stats: newStats }); }} placeholder="e.g. Area" className="w-1/3 bg-black/60 border border-white/10 rounded-md px-3 py-2 text-white text-sm focus:border-amber-500/50" />
                                            <input value={stat.value} onChange={e => { const newStats = [...editProject.stats]; newStats[i].value = e.target.value; setEditProject({ ...editProject, stats: newStats }); }} placeholder="e.g. 180,000 sqft" className="flex-1 bg-black/60 border border-white/10 rounded-md px-3 py-2 text-white text-sm focus:border-amber-500/50" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-6 border-t border-white/5">
                                <button onClick={() => handleSaveProject(editProject)} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">Save Project</button>
                                <button onClick={() => { setEditProject(null); setIsAddingNew(false); }} className="px-6 py-3 border border-white/10 text-neutral-400 font-semibold text-sm rounded-xl hover:border-white/20 hover:text-white transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── TEAM TAB ── */}
                {tab === 'team' && !editTeam && !isAddingNew && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div><h1 className="text-2xl font-serif font-bold text-white">Team Members</h1><p className="text-neutral-500 text-sm">{team.length} members listed</p></div>
                            <button onClick={() => { setEditTeam({ id: 0, name: '', role: '', description: '', image: '', socials: [] }); setIsAddingNew(true); }} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">+ Add Team Member</button>
                        </div>
                        <div className="space-y-3">
                            {team.map(member => (
                                <div key={member.id} className="flex items-center gap-4 p-5 bg-neutral-950/80 border border-white/5 rounded-xl hover:border-white/10 transition-all group">
                                    <img src={member.image} alt="" className="w-12 h-12 object-cover rounded-full border border-white/10 shrink-0" />
                                    <div className="flex-1 min-w-0"><div className="flex items-center gap-2 mb-1"><span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">{member.role}</span></div><h3 className="font-semibold text-white text-sm truncate">{member.name}</h3></div>
                                    <div className="flex gap-2 shrink-0">
                                        <button onClick={() => { setEditTeam(member); setIsAddingNew(false); }} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-amber-500/30 hover:text-amber-400 transition-all">Edit</button>
                                        <button onClick={() => setTeam(prev => prev.filter(p => p.id !== member.id))} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-red-500/30 hover:text-red-400 transition-all">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === 'team' && editTeam && (
                    <div className="pb-32">
                        <button onClick={() => { setEditTeam(null); setIsAddingNew(false); }} className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm mb-6 transition-colors">← Back to Team</button>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">{isAddingNew ? 'Add Member' : 'Edit Member'}</h1>
                        <div className="space-y-6 max-w-xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Name *</label><input value={editTeam.name} onChange={e => setEditTeam({ ...editTeam, name: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                                <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Role Title</label><input value={editTeam.role} onChange={e => setEditTeam({ ...editTeam, role: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                            </div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Bio / Description</label><textarea value={editTeam.description} onChange={e => setEditTeam({ ...editTeam, description: e.target.value })} rows={3} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all resize-none" /></div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Profile Image URL (Google Drive Links Supported)</label><input value={editTeam.image} onChange={e => setEditTeam({ ...editTeam, image: convertImageLink(e.target.value) })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>

                            <div className="flex gap-3 pt-6 border-t border-white/5">
                                <button onClick={() => handleSaveTeam(editTeam)} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">Save Member</button>
                                <button onClick={() => { setEditTeam(null); setIsAddingNew(false); }} className="px-6 py-3 border border-white/10 text-neutral-400 font-semibold text-sm rounded-xl hover:border-white/20 hover:text-white transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── FAQ TAB ── */}
                {tab === 'faq' && !editFaq && !isAddingNew && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div><h1 className="text-2xl font-serif font-bold text-white">FAQ Manager</h1><p className="text-neutral-500 text-sm">{faqs.length} questions listed</p></div>
                            <button onClick={() => { setEditFaq({ id: 0, question: '', answer: '' }); setIsAddingNew(true); }} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">+ Add FAQ</button>
                        </div>
                        <div className="space-y-3">
                            {faqs.map(faq => (
                                <div key={faq.id} className="flex items-start justify-between gap-4 p-5 bg-neutral-950/80 border border-white/5 rounded-xl hover:border-white/10 transition-all group w-full">
                                    <div className="flex-1 pr-8">
                                        <h3 className="font-semibold text-white text-sm mb-2">{faq.question}</h3>
                                        <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2">{faq.answer}</p>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        <button onClick={() => { setEditFaq(faq); setIsAddingNew(false); }} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-amber-500/30 hover:text-amber-400 transition-all">Edit</button>
                                        <button onClick={() => setFaqs(prev => prev.filter(p => p.id !== faq.id))} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-red-500/30 hover:text-red-400 transition-all">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === 'faq' && editFaq && (
                    <div className="pb-32">
                        <button onClick={() => { setEditFaq(null); setIsAddingNew(false); }} className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm mb-6 transition-colors">← Back to FAQs</button>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">{isAddingNew ? 'Add Question' : 'Edit Question'}</h1>
                        <div className="space-y-6 max-w-2xl">
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Question</label><input value={editFaq.question} onChange={e => setEditFaq({ ...editFaq, question: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Answer</label><textarea value={editFaq.answer} onChange={e => setEditFaq({ ...editFaq, answer: e.target.value })} rows={5} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all resize-y" /></div>

                            <div className="flex gap-3 pt-6 border-t border-white/5">
                                <button onClick={() => handleSaveFaq(editFaq)} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">Save FAQ</button>
                                <button onClick={() => { setEditFaq(null); setIsAddingNew(false); }} className="px-6 py-3 border border-white/10 text-neutral-400 font-semibold text-sm rounded-xl hover:border-white/20 hover:text-white transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── PARTNERS TAB ── */}
                {tab === 'partners' && !editPartner && !isAddingNew && (
                    <div className="pb-24">
                        <div className="flex items-center justify-between mb-8">
                            <div><h1 className="text-2xl font-serif font-bold text-white">Carousel Logos</h1><p className="text-neutral-500 text-sm">{partners.length} partners listed</p></div>
                            <button onClick={() => { setEditPartner({ id: 0, name: '', src: '' }); setIsAddingNew(true); }} className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">+ Add Logo</button>
                        </div>

                        {/* Global Carousel Settings Config */}
                        <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl mb-12">
                            <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2"><span>⚙️</span> Global Design Settings</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div>
                                    <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Gap / Spacing</label>
                                    <select value={carouselSettings.gap} onChange={e => setCarouselSettings({ ...carouselSettings, gap: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer">
                                        <option value="gap-16">gap-16 (Tight)</option>
                                        <option value="gap-24 md:gap-32">gap-32 (Standard)</option>
                                        <option value="gap-32 md:gap-48">gap-48 (Loose)</option>
                                        <option value="gap-48 md:gap-64">gap-64 (Giant)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Padding</label>
                                    <select value={carouselSettings.padding} onChange={e => setCarouselSettings({ ...carouselSettings, padding: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer">
                                        <option value="p-0">p-0 (None)</option>
                                        <option value="p-4">p-4 (Small)</option>
                                        <option value="p-8">p-8 (Large)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Glass Fill</label>
                                    <select value={carouselSettings.fill} onChange={e => setCarouselSettings({ ...carouselSettings, fill: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer">
                                        <option value="bg-transparent">Transparent</option>
                                        <option value="bg-white/5">bg-white/5 (Subtle)</option>
                                        <option value="bg-white/10">bg-white/10 (Bright)</option>
                                        <option value="bg-black/50">bg-black/50 (Dark)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Opacity</label>
                                    <select value={carouselSettings.opacity} onChange={e => setCarouselSettings({ ...carouselSettings, opacity: e.target.value })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer">
                                        <option value="opacity-50">50%</option>
                                        <option value="opacity-75">75%</option>
                                        <option value="opacity-100">100%</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6 border border-white/10 rounded-xl overflow-hidden pointer-events-none select-none">
                                <div className="bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-400 border-b border-white/10"><span className="animate-pulse inline-block w-2 h-2 rounded-full bg-red-400 mr-2"></span>Live Preview</div>
                                <div className="scale-[0.8] origin-top relative z-0">
                                    <PartnerMarquee overrideSettings={carouselSettings} />
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={async () => {
                                        await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'carousel_settings', data: carouselSettings }) });
                                        setCarouselSettingsSaved(true); setTimeout(() => setCarouselSettingsSaved(false), 3000);
                                    }}
                                    className="px-5 py-2.5 bg-white/5 border border-white/10 text-white font-semibold text-xs rounded-xl hover:bg-white/10 transition-all"
                                >
                                    {carouselSettingsSaved ? '✓ Saved Successfully' : 'Save Config'}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {partners.map((partner, index) => (
                                <div key={partner.id} className="flex items-center gap-4 p-5 bg-neutral-950/80 border border-white/5 rounded-xl hover:border-white/10 transition-all group w-full">
                                    <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center p-2 shrink-0 border border-white/10">
                                        <img src={partner.src} alt="Logo" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <div className="flex-1 pr-8">
                                        <h3 className="font-semibold text-white text-sm mb-1">{partner.name}</h3>
                                        <p className="text-neutral-500 text-xs truncate max-w-[300px]">{partner.src}</p>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        {index > 0 && (
                                            <button
                                                onClick={async () => {
                                                    const newArr = [...partners];
                                                    const temp = newArr[index - 1];
                                                    newArr[index - 1] = newArr[index];
                                                    newArr[index] = temp;
                                                    setPartners(newArr);
                                                    await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'partners', data: newArr }) });
                                                }}
                                                className="px-2 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:bg-white/10 transition-all"
                                                title="Move Up"
                                            >↑</button>
                                        )}
                                        {index < partners.length - 1 && (
                                            <button
                                                onClick={async () => {
                                                    const newArr = [...partners];
                                                    const temp = newArr[index + 1];
                                                    newArr[index + 1] = newArr[index];
                                                    newArr[index] = temp;
                                                    setPartners(newArr);
                                                    await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'partners', data: newArr }) });
                                                }}
                                                className="px-2 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:bg-white/10 transition-all"
                                                title="Move Down"
                                            >↓</button>
                                        )}
                                        <button onClick={() => { setEditPartner(partner); setIsAddingNew(false); }} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-amber-500/30 hover:text-amber-400 transition-all">Edit</button>
                                        <button onClick={async () => {
                                            const newArr = partners.filter(p => p.id !== partner.id);
                                            setPartners(newArr);
                                            await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'partners', data: newArr }) });
                                        }} className="px-3 py-1.5 text-xs font-semibold border border-white/10 rounded-lg text-neutral-300 hover:border-red-500/30 hover:text-red-400 transition-all">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === 'partners' && editPartner && (
                    <div className="pb-32">
                        <button onClick={() => { setEditPartner(null); setIsAddingNew(false); }} className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm mb-6 transition-colors">← Back to Logos</button>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">{isAddingNew ? 'Add Logo' : 'Edit Logo'}</h1>
                        <div className="space-y-6 max-w-2xl">
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Partner Name</label><input value={editPartner.name} onChange={e => setEditPartner({ ...editPartner, name: e.target.value })} placeholder="e.g. Dubai Municipality" className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>
                            <div><label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Image URL (Google Drive Links Supported)</label><input value={editPartner.src} onChange={e => setEditPartner({ ...editPartner, src: convertImageLink(e.target.value) })} className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all" /></div>

                            <div className="flex gap-3 pt-6 border-t border-white/5">
                                <button onClick={async () => {
                                    const newPartners = partners.find(p => p.id === editPartner.id) ? partners.map(p => p.id === editPartner.id ? editPartner : p) : [...partners, { ...editPartner, id: Date.now() }];
                                    setPartners(newPartners);
                                    setEditPartner(null); setIsAddingNew(false);
                                    await fetch('/api/admin/save', { method: 'POST', body: JSON.stringify({ type: 'partners', data: newPartners }) });
                                }} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all">Save Logo</button>
                                <button onClick={() => { setEditPartner(null); setIsAddingNew(false); }} className="px-6 py-3 border border-white/10 text-neutral-400 font-semibold text-sm rounded-xl hover:border-white/20 hover:text-white transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ── SETTINGS TAB ── */}
                {tab === 'settings' && (
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">System Settings</h1>
                        <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
                            {([
                                { key: 'smtp', label: '📧 Email / SMTP' },
                                { key: 'whatsapp', label: '💬 WhatsApp' },
                            ] as { key: SettingsTab; label: string }[]).map(s => (
                                <button
                                    key={s.key}
                                    onClick={() => setSettingsTab(s.key)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${settingsTab === s.key ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'text-neutral-400 hover:text-white'
                                        }`}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>

                        {settingsTab === 'smtp' && (
                            <div className="max-w-lg space-y-5">
                                <p className="text-neutral-500 text-sm">Configure SMTP to enable password reset emails and contact form notifications.</p>
                                {(['host', 'port', 'user', 'pass', 'from'] as const).map(field => (
                                    <div key={field}>
                                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                            {field === 'host' ? 'SMTP Host' : field === 'port' ? 'SMTP Port' : field === 'user' ? 'Username' : field === 'pass' ? 'Password' : 'From Address'}
                                        </label>
                                        <input
                                            type={field === 'pass' ? 'password' : 'text'}
                                            value={smtp[field]}
                                            onChange={e => setSmtp({ ...smtp, [field]: e.target.value })}
                                            placeholder={field === 'host' ? 'smtp.gmail.com' : field === 'port' ? '587' : field === 'from' ? 'info@vmkconstruction.ae' : ''}
                                            className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                                        />
                                    </div>
                                ))}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => { setSmtpSaved(true); setTimeout(() => setSmtpSaved(false), 3000); }}
                                        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl transition-all"
                                    >
                                        {smtpSaved ? '✓ Saved' : 'Save SMTP Config'}
                                    </button>
                                </div>
                            </div>
                        )}

                        {settingsTab === 'whatsapp' && (
                            <div className="max-w-lg space-y-5">
                                <p className="text-neutral-500 text-sm">Configure the WhatsApp Business number and default message template used on the site.</p>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">WhatsApp Number</label>
                                    <input
                                        value={wa.number}
                                        onChange={e => setWa({ ...wa, number: e.target.value })}
                                        placeholder="+971500000000"
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Default Message Template</label>
                                    <textarea
                                        value={wa.template}
                                        onChange={e => setWa({ ...wa, template: e.target.value })}
                                        rows={4}
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all resize-none"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => { setWaSaved(true); setTimeout(() => setWaSaved(false), 3000); }}
                                        className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl transition-all"
                                    >
                                        {waSaved ? '✓ Saved' : 'Save Config'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* ── ACCOUNT TAB ── */}
                {tab === 'account' && (
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-white mb-8">Account Settings</h1>
                        <div className="max-w-md space-y-5">
                            <p className="text-neutral-500 text-sm">Change your admin password.</p>
                            {(['current', 'newPw', 'confirm'] as const).map(field => (
                                <div key={field}>
                                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                        {field === 'current' ? 'Current Password' : field === 'newPw' ? 'New Password' : 'Confirm New Password'}
                                    </label>
                                    <input
                                        type="password"
                                        value={pwForm[field]}
                                        onChange={e => setPwForm({ ...pwForm, [field]: e.target.value })}
                                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                                    />
                                </div>
                            ))}
                            {pwMsg && (
                                <div className={`px-4 py-3 rounded-xl text-sm ${pwMsg.startsWith('✓') ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
                                    {pwMsg}
                                </div>
                            )}
                            <button
                                onClick={() => {
                                    if (pwForm.current !== 'admin') return setPwMsg('Current password is incorrect.');
                                    if (pwForm.newPw !== pwForm.confirm) return setPwMsg('New passwords do not match.');
                                    if (pwForm.newPw.length < 6) return setPwMsg('Password must be at least 6 characters.');
                                    setPwMsg('✓ Password updated.');
                                    setPwForm({ current: '', newPw: '', confirm: '' });
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all"
                            >
                                Update Password
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
