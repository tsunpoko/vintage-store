import Image from 'next/image';
import Link from 'next/link';

const staffSnaps = [
  {
    name: 'SATO (175cm)',
    role: '渋谷店 / スタイリスト',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'TANAKA (162cm)',
    role: '神南店 / プレス',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'ITO (180cm)',
    role: '原宿店 / ショップスタッフ',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'YAMADA (168cm)',
    role: 'WEB / MD',
    image: 'https://images.unsplash.com/photo-1521577332490-4496464673c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function StaffSnap() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-between items-end mb-lg">
          <h2 className="font-serif text-[32px]">STAFF SNAP</h2>
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
