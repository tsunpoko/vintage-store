const careItems = [
  {
    icon: '🧼',
    title: '厳選されたクリーニング',
    description:
      '全アイテムに対し、素材に合わせた最適な洗浄と除菌を実施。古着特有の匂いや汚れを徹底的に除去し、清潔な状態でお届けします。',
  },
  {
    icon: '🔍',
    title: '独自の検品基準',
    description:
      '5段階のコンディションランクを設定。ピンホールやスレ、細かなダメージも見逃さず、誠実に表記することをお約束します。',
  },
  {
    icon: '📦',
    title: '丁寧な梱包と配送',
    description:
      '型崩れを防ぐ丁寧な梱包で、注文から24時間以内に発送。大切な一点物を、最高の状態でお手元までお届けします。',
  },
];

export function CareSection() {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container">
        <h2 className="font-serif text-center mb-xl text-[32px]">QUALITY & CARE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {careItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-md">{item.icon}</div>
              <h3 className="font-bold mb-sm text-lg">{item.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
