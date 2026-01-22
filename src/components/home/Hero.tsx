import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[50vh] md:h-[70vh] bg-brown-100 overflow-hidden flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Vintage clothing store"
        fill
        className="object-cover brightness-75 sepia-[0.15]"
        priority
      />
      <div className="container relative z-10">
        <div className="text-white max-w-[800px]">
          <p className="text-xs md:text-sm tracking-[4px] md:tracking-[6px] mb-3 md:mb-sm font-light">
            VINTAGE & SELECTED
          </p>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-[52px] leading-[1.3] md:leading-[1.2] mb-5 md:mb-md md:whitespace-nowrap">
            一点物の魅力を、
            <br className="md:hidden" />
            あなたのスタイルに。
          </h1>
          <Link
            href="/products"
            className="inline-block bg-cream text-brown-800 py-2 px-6 md:py-3 md:px-10 text-sm md:text-base font-medium tracking-wider hover:bg-brown-800 hover:text-cream transition-colors border border-cream"
          >
            COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
}
