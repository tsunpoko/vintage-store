import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: '失敗しないリバースウィーブの選び方。年代別の特徴とサイズ感を徹底解説。',
    date: '2026.01.10',
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    href: '#',
  },
  {
    title: '冬のレイヤードスタイルを格上げする「Barbour」の着こなし術。',
    date: '2026.01.05',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    href: '#',
  },
];

export function MagazineSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-between items-end mb-lg">
          <h2 className="font-serif text-[32px]">VINTAGE MAGAZINE</h2>
          <Link href="#" className="text-[13px] underline">
            すべての記事をみる
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {articles.map((article) => (
            <Link key={article.title} href={article.href} className="group">
              <article className="flex gap-md">
                <div className="w-40 h-28 flex-shrink-0 overflow-hidden bg-section-bg relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <time className="text-xs text-text-light">{article.date}</time>
                  <h3 className="text-sm font-medium mt-1 leading-relaxed group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
