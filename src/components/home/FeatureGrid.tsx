import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'スタッフおすすめ',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/collections/staff-picks',
  },
  {
    title: '新着アイテム',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/products',
  },
  {
    title: '冬のヴィンテージ特集',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/collections/winter',
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
              <div className="absolute bottom-md left-md text-white">
                <h3 className="text-lg font-bold drop-shadow-md">{feature.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
