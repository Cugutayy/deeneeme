import { RunCard } from '@/components/run-card/run-card';
import { runs } from '@/lib/content';

export default function RunsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
      <h1 className="section-title">Runs</h1>
      <p className="mt-4 text-white/70">Community runs, recaps, maps, and participant stories.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {runs.map((run) => <RunCard key={run.title} {...run} />)}
      </div>
    </section>
  );
}
