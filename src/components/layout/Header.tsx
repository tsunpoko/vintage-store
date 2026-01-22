'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { SearchIcon, ClockIcon, ChevronUpIcon } from '@/components/ui/Icons';

export function Header() {
  const { cart, openCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const totalQuantity = cart?.totalQuantity ?? 0;

  return (
    <header className="py-md border-b border-border sticky top-0 bg-white/[0.98] z-[1000]">
      <div className="container">
        <div className="flex justify-between items-center mb-sm">
          <Link href="/" className="text-2xl font-black tracking-[3px] uppercase text-text-primary">
            AURA VINTAGE
          </Link>

          <div className="flex-[0_1_400px] relative hidden md:block">
            <input
              type="text"
              className="w-full py-[10px] px-[15px] pr-10 border border-border rounded text-sm outline-none focus:border-text-light"
              placeholder="アイテム、ブランドを検索..."
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/account/login" className="text-sm tracking-wide">
              LOGIN
            </Link>
            <button
              onClick={openCart}
              className="text-sm tracking-wide bg-transparent border-none cursor-pointer"
            >
              CART({totalQuantity})
            </button>
          </div>
        </div>

        <nav className="flex justify-center gap-lg pt-sm">
          <Link href="/collections/all" className="text-[13px] font-bold tracking-[1px]">
            新着アイテム
          </Link>
          <Link href="/collections/nature-camo-木霊" className="text-[13px] font-bold tracking-[1px]">
            メンズ
          </Link>
          <Link href="/collections/exodia" className="text-[13px] font-bold tracking-[1px]">
            レディース
          </Link>
          <Link href="/collections/artist-collaboration" className="text-[13px] font-bold tracking-[1px]">
            ブランド
          </Link>
          <Link href="/collections/1-of-1-gb-deconstruction" className="text-[13px] font-bold tracking-[1px]">
            特集
          </Link>
          <Link href="/collections/龗-okami" className="text-[13px] font-bold tracking-[1px]">
            店舗案内
          </Link>
        </nav>
      </div>
    </header>
  );
}
