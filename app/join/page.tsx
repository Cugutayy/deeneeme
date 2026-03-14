export default function JoinPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-32">
      <h1 className="section-title">Join</h1>
      <form className="mt-10 space-y-4 rounded-lg border border-white/15 p-8">
        {['Name', 'Email', 'Instagram', 'Running Pace', 'Preferred Run Day'].map((field) => (
          <label key={field} className="block text-sm uppercase tracking-[0.12em]">
            {field}
            <input
              type="text"
              className="mt-2 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 outline-none focus:border-lime"
            />
          </label>
        ))}
        <button type="submit" className="mt-2 rounded-full bg-lime px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black">
          Join The Community
        </button>
      </form>
    </section>
  );
}
