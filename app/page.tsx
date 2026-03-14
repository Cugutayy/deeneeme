import Image from 'next/image';
import { Hero } from '@/components/hero/hero';
import { MotionReveal } from '@/components/common/motion-reveal';
import { runs, collaborations } from '@/lib/content';
import { RunCard } from '@/components/run-card/run-card';

const storyImages = [
  'photo-1476480862126-209bfaa8edc8',
  'photo-1517832207067-4db24a2ae47c',
  'photo-1549570652-97324981a6fd',
  'photo-1452626038306-9aae5e071dd3'
];

const editorialImages = [
  'photo-1471107340929-a87cd0f5b5f3',
  'photo-1538805060514-97d9cc17730c',
  'photo-1550345332-09e3ac987658',
  'photo-1541625602330-2277a4c46182'
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[96rem] px-4 py-16 md:px-8">
        <div className="relative overflow-hidden rounded-xl border border-white/15">
          <Image
            src="https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=2200&q=80"
            alt="We run together"
            width={2200}
            height={1400}
            className="h-[72vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <h2 className="absolute bottom-8 left-8 text-3xl font-bold uppercase tracking-[0.18em] md:text-6xl">We Run Together</h2>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
        <MotionReveal>
          <div>
            <h2 className="section-title">Manifesto</h2>
            <p className="mt-6 max-w-xl text-white/75">
              We run the city. Alsancak Runners is an urban running collective based in Izmir.
              We explore streets, coastlines and rooftops. Running connects us to the city and to
              each other.
            </p>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.2}>
          <Image
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80"
            alt="Urban running in Izmir"
            width={1200}
            height={900}
            className="h-full min-h-72 w-full rounded-lg object-cover"
          />
        </MotionReveal>
      </section>

      <section className="py-20">
        <div className="mx-auto mb-8 max-w-7xl px-6"><h2 className="section-title">Photo Story Strip</h2></div>
        <div className="story-strip">
          {storyImages.map((id, i) => (
            <article key={id} className="story-card">
              <Image
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`}
                alt="Story frame"
                width={1000}
                height={700}
                className="h-[26rem] w-full object-cover"
              />
              <p className="story-caption">Scene {i + 1}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="section-title">Upcoming Runs</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {runs.map((run) => (
            <RunCard key={run.title} {...run} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="section-title">Alsancak Loop</h2>
        <div className="mt-6 rounded-xl border border-white/15 p-4">
          <svg viewBox="0 0 900 320" className="w-full">
            <path
              d="M30 250 C120 140, 220 110, 340 160 S560 290, 700 210 S830 60, 870 130"
              fill="none"
              stroke="#E6FF00"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle r="9" cx="30" cy="250" fill="#fff" />
          </svg>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="section-title">Collaborations</h2>
        <div className="mt-10 space-y-4">
          {collaborations.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/15 p-8">
              <h3 className="text-2xl font-semibold uppercase tracking-[0.12em]">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="section-title">Editorial Gallery</h2>
        <div className="mt-10 editorial-grid">
          {editorialImages.map((id, idx) => (
            <Image
              key={id}
              src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`}
              alt="Alsancak Runners editorial"
              width={900}
              height={1200}
              className={idx === 0 || idx === 3 ? 'big' : 'small'}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-lime/60 bg-gradient-to-r from-lime/15 to-transparent p-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lime">Join Community</p>
          <h2 className="mt-3 text-4xl font-bold uppercase tracking-[0.2em]">Join The Run</h2>
          <button className="mt-8 rounded-full border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black">
            Join Alsancak Runners
          </button>
        </div>
      </section>
    </>
  );
}
