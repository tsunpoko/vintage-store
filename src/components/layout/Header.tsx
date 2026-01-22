'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { SearchIcon, MenuIcon, CloseIcon } from '@/components/ui/Icons';

const navLinks = [
  { href: '/collections/all', label: '新着アイテム' },
  { href: '/collections/nature-camo-木霊', label: 'メンズ' },
  { href: '/collections/exodia', label: 'レディース' },
  { href: '/collections/artist-collaboration', label: 'ブランド' },
  { href: '/collections/1-of-1-gb-deconstruction', label: '特集' },
  { href: '/collections/龗-okami', label: '店舗案内' },
];

export function Header() {
  const { cart, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalQuantity = cart?.totalQuantity ?? 0;

  return (
    <header className="py-3 md:py-md border-b border-border sticky top-0 bg-cream/[0.98] backdrop-blur-sm z-[1000]">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer p-1"
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-black tracking-[2px] md:tracking-[3px] uppercase text-text-primary"
          >
            AURA VINTAGE
          </Link>

          {/* Desktop search */}
          <div className="flex-[0_1_400px] relative hidden lg:block">
            <input
              type="text"
              className="w-full py-[10px] px-[15px] pr-10 border border-border rounded text-sm outline-none focus:border-text-light"
              placeholder="アイテム、ブランドを検索..."
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/account/login" className="hidden md:block text-sm tracking-wide">
              LOGIN
            </Link>
            <button
              onClick={openCart}
              className="text-xs md:text-sm tracking-wide bg-transparent border-none cursor-pointer"
            >
              CART({totalQuantity})
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-lg pt-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-[1px] whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-border mt-3">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-bold tracking-[1px] py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account/login"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wide py-2 border-t border-border mt-2 pt-4"
              >
                LOGIN
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
