import Link from 'next/link';

export function Footer() {
  return (
    <footer className="section-padding border-t border-border bg-brown-900 text-brown-100">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-xl">
        <div>
          <h4 className="text-base mb-5 font-serif tracking-wider">SHOP INFO</h4>
          <p className="text-xs leading-8 text-brown-300">
            AURA VINTAGE 東京店
            <br />
            東京都渋谷区神南1-2-3
            <br />
            営業時間: 12:00 - 20:00
          </p>
        </div>
        <div>
          <h4 className="text-base mb-5 font-serif tracking-wider">GUIDE</h4>
          <ul className="text-xs leading-[2.5]">
            <li>
              <Link href="#" className="text-brown-400 hover:text-brown-100">
                送料・配送について
              </Link>
            </li>
            <li>
              <Link href="#" className="text-brown-400 hover:text-brown-100">
                返品・交換について
              </Link>
            </li>
            <li>
              <Link href="#" className="text-brown-400 hover:text-brown-100">
                お支払い方法
              </Link>
            </li>
            <li>
              <Link href="#" className="text-brown-400 hover:text-brown-100">
                古着のお手入れ方法
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-base mb-5 font-serif tracking-wider">NEWSLETTER</h4>
          <p className="text-xs mb-4 text-brown-400">
            新入荷やイベントのお知らせを配信。
          </p>
          <input
            type="email"
            placeholder="メールアドレス"
            className="w-full py-[10px] px-3 bg-brown-800 border border-brown-700 text-brown-100 placeholder:text-brown-500"
          />
        </div>
      </div>
      <div className="container mt-xl pt-lg border-t border-brown-800">
        <p className="text-xs text-brown-500 text-center">
          © 2024 AURA VINTAGE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
