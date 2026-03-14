export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-32">
      <h1 className="section-title">About</h1>
      <p className="mt-10 text-lg text-white/80">
        We started running to explore the city. Alsancak Runners is a community of runners,
        creatives, and explorers who believe running connects people to urban life.
      </p>
      <div className="mt-10 grid gap-4 rounded-lg border border-white/15 p-6 md:grid-cols-3">
        <div><p className="text-4xl font-bold text-lime">342</p><p className="text-xs uppercase tracking-[0.2em]">Runs</p></div>
        <div><p className="text-4xl font-bold text-lime">128</p><p className="text-xs uppercase tracking-[0.2em]">Members</p></div>
        <div><p className="text-4xl font-bold text-lime">24</p><p className="text-xs uppercase tracking-[0.2em]">Collaborations</p></div>
      </div>
    </section>
  );
}
