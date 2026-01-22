import Image from 'next/image';

const instagramPosts = [
  'https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
];

export function InstagramFeed() {
  return (
    <section className="section-padding bg-brown-50">
      <div className="container">
        <div className="text-center mb-lg">
          <h2 className="font-serif text-2xl">INSTAGRAM</h2>
          <p className="text-xs text-text-light">@auravintage_official</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {instagramPosts.map((url, index) => (
            <a
              key={index}
              href="https://instagram.com/auravintage_official"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative overflow-hidden group"
            >
              <Image
                src={url}
                alt={`Instagram ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
