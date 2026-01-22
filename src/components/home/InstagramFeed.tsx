import Image from 'next/image';

const instagramPosts = [
  'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1479064566235-0ad3865a782a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
];

export function InstagramFeed() {
  return (
    <section className="section-padding bg-[#fcfcfc]">
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
