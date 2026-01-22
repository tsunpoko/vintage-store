import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[60vh] bg-[#eee] overflow-hidden flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Hero"
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className="container relative z-10">
        <div className="text-white max-w-[800px]">
          <p className="text-sm tracking-[4px] mb-sm">CURATED CLOTHING</p>
          <h1 className="font-serif text-[56px] leading-[1.2] mb-md">
            上質な古着を、
            <br />
            日常のスタイルに。
          </h1>
          <Link
            href="/products"
            className="inline-block bg-white text-black py-3 px-10 font-bold hover:bg-black hover:text-white transition-colors"
          >
            すべてみる
          </Link>
        </div>
      </div>
    </section>
  );
}
