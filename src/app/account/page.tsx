'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AccountPage() {
  const router = useRouter();

  // TODO: Check if user is logged in
  // If not, redirect to login page
  useEffect(() => {
    // Placeholder - would check for customer access token
    const isLoggedIn = false;
    if (!isLoggedIn) {
      router.push('/account/login');
    }
  }, [router]);

  return (
    <div className="section-padding">
      <div className="container max-w-4xl mx-auto">
        <h1 className="font-serif text-[32px] mb-lg">マイページ</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* Sidebar */}
          <nav className="space-y-sm">
            <Link
              href="/account"
              className="block py-2 border-b border-border font-bold"
            >
              注文履歴
            </Link>
            <Link
              href="/account/addresses"
              className="block py-2 border-b border-border text-text-light hover:text-text-primary"
            >
              住所管理
            </Link>
            <Link
              href="/account/settings"
              className="block py-2 border-b border-border text-text-light hover:text-text-primary"
            >
              アカウント設定
            </Link>
            <button className="block py-2 text-text-light hover:text-accent">
              ログアウト
            </button>
          </nav>

          {/* Content */}
          <div className="md:col-span-2">
            <h2 className="font-bold mb-md">注文履歴</h2>
            <p className="text-text-light">
              注文履歴はありません。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
