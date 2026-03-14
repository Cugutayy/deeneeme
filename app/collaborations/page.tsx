import { collaborations } from '@/lib/content';

export default function CollaborationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
      <h1 className="section-title">Collaborations</h1>
      <div className="mt-10 space-y-8">
        {collaborations.map((item) => (
          <article key={item.title} className="rounded-lg border border-white/15 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-mint">Campaign</p>
            <h2 className="mt-2 text-3xl font-bold uppercase tracking-[0.12em]">{item.title}</h2>
            <p className="mt-4 text-white/70">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
