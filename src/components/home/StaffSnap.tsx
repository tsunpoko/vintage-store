import Image from 'next/image';
import Link from 'next/link';

const staffSnaps = [
  {
    name: 'SATO (175cm)',
    role: '渋谷店 / スタイリスト',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'TANAKA (162cm)',
    role: '神南店 / プレス',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'ITO (180cm)',
    role: '原宿店 / ショップスタッフ',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f0016e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'YAMADA (168cm)',
    role: 'WEB / MD',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function StaffSnap() {
  return (
    <section className="section-padding bg-brown-50">
      <div className="container">
        <div className="flex justify-between items-end mb-lg">
          <h2 className="font-serif text-[28px] md:text-[32px]">STAFF SNAP</h2>
          <Link href="#" className="text-[13px] underline">
            すべてのスナップをみる
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {staffSnaps.map((snap) => (
            <div key={snap.name} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-sm bg-section-bg relative">
                <Image
                  src={snap.image}
                  alt={snap.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{snap.name}</p>
                <p className="text-xs text-text-light">{snap.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
