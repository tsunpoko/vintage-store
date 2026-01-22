import Link from 'next/link';

const brands = [
  "LEVI'S",
  'CHAMPION',
  'PATAGONIA',
  'CARHARTT',
  'RALPH LAUREN',
  'BURBERRY',
];

export function BrandSection() {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container">
        <h2 className="font-serif text-center mb-lg text-[28px]">BRANDS</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-md">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/collections/${brand.toLowerCase().replace(/['\s]/g, '-')}`}
              className="bg-white py-md text-center border border-border text-xs font-bold tracking-[1px] hover:border-text-primary transition-colors"
            >
              {brand}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
