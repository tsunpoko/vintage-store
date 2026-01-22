'use client';

import { useEffect, useState } from 'react';
import { ClockIcon, ChevronUpIcon } from './Icons';

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed right-5 bottom-5 flex flex-col gap-[10px] z-[100] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        className="w-[50px] h-[50px] bg-white border border-border rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-shadow"
        title="最近チェックしたアイテム"
      >
        <ClockIcon className="w-6 h-6" />
      </button>
      <button
        onClick={scrollToTop}
        className="w-[50px] h-[50px] bg-white border border-border rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-shadow"
        title="トップへ戻る"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
