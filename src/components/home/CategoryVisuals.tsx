import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'TOPS',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/tops',
  },
  {
    title: 'BOTTOMS',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/bottoms',
  },
];

export function CategoryVisuals() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="relative aspect-[16/9] overflow-hidden group"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif tracking-wider">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
