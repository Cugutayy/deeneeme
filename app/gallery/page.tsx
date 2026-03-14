import { MasonryGrid } from '@/components/gallery/masonry-grid';

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
      <h1 className="section-title">Gallery</h1>
      <p className="mt-4 text-white/70">Runs / Community / Collabs / City</p>
      <div className="mt-10">
        <MasonryGrid />
      </div>
    </section>
  );
}
