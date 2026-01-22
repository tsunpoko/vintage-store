'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CloseIcon } from './Icons';

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[2000]"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-[30px] right-[30px] bg-transparent border-none text-white text-3xl cursor-pointer"
      >
        <CloseIcon className="w-8 h-8" />
      </button>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px]">
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="何をお探しですか？"
            autoFocus
            className="w-full bg-transparent border-none border-b-2 border-white text-white text-3xl py-[10px] outline-none mb-5 placeholder:text-white/50"
          />
          <div className="text-white/80 text-sm">
            <p>POPULAR: Levi&apos;s, Champion, Burberry</p>
          </div>
        </form>
      </div>
    </div>
  );
}
