import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'STAFF PICKS',
    subtitle: 'スタッフのおすすめ',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/collections/staff-picks',
  },
  {
    title: 'NEW ARRIVALS',
    subtitle: '新着アイテム',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/products',
  },
  {
    title: 'LEATHER GOODS',
    subtitle: 'レザーコレクション',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/collections/leather',
  },
];

export function FeatureGrid() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="relative aspect-video overflow-hidden group"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-md left-md text-white">
                <h3 className="font-serif text-lg tracking-wider drop-shadow-md">{feature.title}</h3>
                <p className="text-xs text-white/80 mt-1">{feature.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
