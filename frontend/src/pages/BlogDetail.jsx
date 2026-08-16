import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG } from '../mock';
import { CalendarDays, User2, ArrowLeft, ArrowRight, Clock, Facebook, Twitter, Link as LinkIcon, Check } from 'lucide-react';
import OrderCTA from '../components/OrderCTA';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG.find((p) => p.slug === slug);
  const [activeId, setActiveId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!post) return;
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = '';
      post.toc.forEach((t) => {
        const el = document.getElementById(t.id);
        if (el && el.offsetTop <= scrollY) current = t.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [post]);

  if (!post) return <div className="max-w-3xl mx-auto py-24 text-center"><h1 className="font-serif text-3xl">Article not found</h1></div>;

  const related = BLOG.filter((p) => p.slug !== post.slug).slice(0, 3);

  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <article>
      {/* Breadcrumb */}
      <div className="border-b border-ink-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center text-xs text-ink-500 gap-2">
          <Link to="/" className="hover:text-brand-700">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-brand-700">Blog</Link>
          <span>/</span>
          <span className="text-ink-900 truncate">{post.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="section-wash">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All articles</Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{post.category}</div>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed max-w-3xl">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-ink-500 flex-wrap">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><User2 className="w-4 h-4" /> {post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Body + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-[1fr_260px] gap-10">
        <div>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-brand-50 border border-ink-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="mt-8 max-w-none text-ink-700 leading-relaxed space-y-5">
            {post.body.map((b, i) => {
              if (b.h2) return <h2 key={i} id={b.id} className="font-serif text-2xl md:text-3xl font-semibold text-ink-900 mt-10 scroll-mt-24">{b.h2}</h2>;
              if (b.list) return (
                <ul key={i} className="space-y-2 pl-1">
                  {b.list.map((x) => <li key={x} className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-600 mt-1 shrink-0" /> {x}</li>)}
                </ul>
              );
              return <p key={i} className="text-base md:text-lg">{b.p}</p>;
            })}
          </div>

          {/* Author + share */}
          <div className="mt-12 p-6 bg-white border border-ink-200 rounded-2xl flex items-center gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 grid place-items-center font-semibold">{post.author.split(' ').slice(-1)[0][0]}</div>
            <div className="flex-1 min-w-[180px]">
              <div className="text-xs uppercase tracking-widest text-ink-500">Written by</div>
              <div className="font-semibold text-ink-900">{post.author}</div>
              <div className="text-xs text-ink-500">Medical writer · Australia</div>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Share on Facebook" className="w-9 h-9 grid place-items-center rounded-full border border-ink-200 hover:border-brand-500 text-ink-700 hover:text-brand-700"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="Share on Twitter" className="w-9 h-9 grid place-items-center rounded-full border border-ink-200 hover:border-brand-500 text-ink-700 hover:text-brand-700"><Twitter className="w-4 h-4" /></a>
              <button onClick={copyLink} aria-label="Copy link" className="w-9 h-9 grid place-items-center rounded-full border border-ink-200 hover:border-brand-500 text-ink-700 hover:text-brand-700">
                {copied ? <Check className="w-4 h-4 text-brand-600" /> : <LinkIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Sticky TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-xs uppercase tracking-widest text-brand-700 font-semibold mb-3">On this page</div>
            <ol className="space-y-1.5 text-sm">
              {post.toc.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={`flex gap-2 items-baseline py-1 pl-2 rounded border-l-2 transition-colors ${activeId === t.id ? 'border-brand-600 text-brand-700 bg-brand-50' : 'border-transparent text-ink-700 hover:text-brand-700'}`}
                  >
                    <span className="text-xs text-ink-400 tabular-nums w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1 leading-snug">{t.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      {/* Related */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-ink-200">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">More from the blog</h2>
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-brand-700 font-semibold hover:gap-2 transition-all">View all <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link key={r.slug} to={`/blog/${r.slug}`} className="group bg-white border border-ink-200 rounded-2xl overflow-hidden hover-lift block">
              <div className="aspect-[16/9] bg-brand-50"><img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{r.category}</div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900 line-clamp-2">{r.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-ink-500">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {r.date}</span>
                  <span className="inline-flex items-center gap-1.5"><User2 className="w-3.5 h-3.5" /> {r.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <OrderCTA />
    </article>
  );
}
