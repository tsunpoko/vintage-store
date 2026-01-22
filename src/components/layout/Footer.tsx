import Link from 'next/link';

export function Footer() {
  return (
    <footer className="section-padding border-t border-border bg-[#1a1a1a] text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-xl">
        <div>
          <h4 className="text-base mb-5">SHOP INFO</h4>
          <p className="text-xs leading-8">
            AURA VINTAGE 東京店
            <br />
            東京都渋谷区神南1-2-3
            <br />
            営業時間: 12:00 - 20:00
          </p>
        </div>
        <div>
          <h4 className="text-base mb-5">GUIDE</h4>
          <ul className="text-xs leading-[2.5]">
            <li>
              <Link href="#" className="text-[#aaa] hover:text-white">
                送料・配送について
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#aaa] hover:text-white">
                返品・交換について
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#aaa] hover:text-white">
                お支払い方法
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-base mb-5">NEWSLETTER</h4>
          <p className="text-xs mb-4 text-[#aaa]">
            最新の入荷情報やイベントのお知らせを配信。
          </p>
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full py-[10px] px-3 bg-[#333] border-none text-white placeholder:text-[#888]"
          />
        </div>
      </div>
    </footer>
  );
}
