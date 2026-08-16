import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG } from '../mock';
import { CalendarDays, User2, ArrowLeft } from 'lucide-react';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG.find((p) => p.slug === slug);
  if (!post) return <div className="max-w-3xl mx-auto py-24 text-center"><h1 className="font-serif text-3xl">Article not found</h1></div>;
  return (
    <article>
      <div className="section-wash">
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-brand-700"><ArrowLeft className="w-4 h-4" /> All articles</Link>
          <div className="mt-6 text-[11px] uppercase tracking-widest text-brand-700 font-semibold">{post.category}</div>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-ink-900">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><User2 className="w-4 h-4" /> {post.author}</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-brand-50 border border-ink-200">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="prose prose-slate max-w-none mt-8 text-ink-700 leading-relaxed">
          <p className="text-lg">{post.excerpt}</p>
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mt-8">Key takeaways</h2>
          <p>Below is a practical, non-clinical summary that we regularly update as new studies land. Nothing here replaces conversations with your GP or pharmacist — use it as a starting map, not a prescription.</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Look for consistent daily inputs before adjusting doses</li>
            <li>Track how you feel across a full week, not a single afternoon</li>
            <li>Sleep and hydration remain the highest-leverage variables</li>
          </ul>
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mt-8">What we would do next</h2>
          <p>If a plan already works for you, stick with it. If you’re starting fresh, pick the smallest routine you can maintain for two weeks, then evaluate. Message us on WhatsApp if you want a second opinion before ordering.</p>
        </div>
      </div>
    </article>
  );
}
