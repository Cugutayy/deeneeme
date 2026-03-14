import Image from 'next/image';

const photos = [
  'photo-1549570652-97324981a6fd',
  'photo-1470246973918-29a93221c455',
  'photo-1517832207067-4db24a2ae47c',
  'photo-1452626038306-9aae5e071dd3',
  'photo-1476480862126-209bfaa8edc8',
  'photo-1511988617509-a57c8a288659'
];

export function MasonryGrid() {
  return (
    <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
      {photos.map((id) => (
        <div key={id} className="group relative overflow-hidden rounded-lg">
          <Image
            src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`}
            alt="Alsancak Runners gallery"
            width={600}
            height={800}
            className="h-auto w-full transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
        </div>
      ))}
    </div>
  );
}
