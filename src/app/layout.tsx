import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP, Playfair_Display, Sawarabi_Mincho } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Announcement } from '@/components/layout/Announcement';
import { CartProvider } from '@/context/CartContext';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { SearchModal } from '@/components/ui/SearchModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const sawarabiMincho = Sawarabi_Mincho({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sawarabi',
});

export const metadata: Metadata = {
  title: 'AURA VINTAGE | 上質な古着を日常に。',
  description: '厳選されたヴィンテージアイテムをお届けする古着セレクトショップ。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${playfairDisplay.variable} ${sawarabiMincho.variable}`}
    >
      <body className="font-sans bg-cream text-text-primary">
        <CartProvider>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartSidebar />
          <SearchModal />
        </CartProvider>
      </body>
    </html>
  );
}
