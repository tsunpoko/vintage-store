'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // TODO: Implement Shopify Customer Account login
    // This would call the customerAccessTokenCreate mutation
    try {
      // Placeholder for actual implementation
      console.log('Login attempt:', { email, password });
      setError('この機能は現在実装中です。');
    } catch (err) {
      setError('ログインに失敗しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section-padding">
      <div className="container max-w-md mx-auto">
        <h1 className="font-serif text-[32px] text-center mb-lg">LOGIN</h1>

        <form onSubmit={handleSubmit} className="space-y-md">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-border focus:border-text-primary outline-none"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-border focus:border-text-primary outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-text-primary text-white font-bold tracking-wider disabled:opacity-50 hover:bg-black transition-colors"
          >
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>

        <div className="mt-lg text-center text-sm">
          <Link href="#" className="text-text-light hover:text-accent">
            パスワードをお忘れですか？
          </Link>
        </div>

        <div className="mt-xl pt-lg border-t border-border text-center">
          <p className="text-sm text-text-light mb-md">
            アカウントをお持ちでない方
          </p>
          <Link
            href="/account/register"
            className="inline-block px-8 py-3 border border-text-primary hover:bg-text-primary hover:text-white transition-colors font-bold text-sm tracking-wider"
          >
            新規会員登録
          </Link>
        </div>
      </div>
    </div>
  );
}
