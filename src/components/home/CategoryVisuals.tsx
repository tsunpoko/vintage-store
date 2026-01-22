import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'OUTER & JACKET',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/actual-land-g-b-m-o-u-t-h',
  },
  {
    title: 'DENIM & PANTS',
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    href: '/collections/spring-stands-it-rains-and-life-comes-forth-geep',
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
