'use client';

import { useCart } from '@/context/CartContext';
import { CartItem } from './CartItem';
import { formatPrice } from '@/lib/utils';
import { CloseIcon } from '@/components/ui/Icons';

export function CartSidebar() {
  const { cart, isOpen, closeCart } = useCart();

  const lines = cart?.lines.edges.map((edge) => edge.node) ?? [];
  const totalAmount = cart?.cost.totalAmount;

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[2000] transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCart();
      }}
    >
      <div
        className={`absolute top-0 h-full w-[400px] max-w-full bg-white transition-[right] duration-300 flex flex-col p-[30px] ${
          isOpen ? 'right-0' : '-right-[400px]'
        }`}
      >
        <div className="flex justify-between items-center mb-[30px]">
          <h3 className="font-serif text-xl">SHOPPING CART</h3>
          <button
            onClick={closeCart}
            className="bg-transparent border-none text-3xl cursor-pointer leading-none"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <p className="text-text-light text-sm">カートに商品が入っていません。</p>
          ) : (
            <div className="space-y-4">
              {lines.map((line) => (
                <CartItem key={line.id} line={line} />
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex justify-between font-bold mb-5">
            <span>TOTAL:</span>
            <span>{totalAmount ? formatPrice(totalAmount) : '¥0'}</span>
          </div>
          <a
            href={cart?.checkoutUrl ?? '#'}
            className="block w-full py-4 bg-text-primary text-white text-center font-bold cursor-pointer hover:bg-black transition-colors"
          >
            CHECKOUT
          </a>
        </div>
      </div>
    </div>
  );
}
