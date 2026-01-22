'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { MinusIcon, PlusIcon, CloseIcon } from '@/components/ui/Icons';

export default function CartPage() {
  const { cart, updateItem, removeItem, isLoading } = useCart();

  const lines = cart?.lines.edges.map((edge) => edge.node) ?? [];
  const totalAmount = cart?.cost.totalAmount;
  const subtotalAmount = cart?.cost.subtotalAmount;

  if (lines.length === 0) {
    return (
      <div className="section-padding">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-[32px] mb-lg">SHOPPING CART</h1>
          <p className="text-text-light mb-lg">カートに商品が入っていません。</p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-text-primary text-white font-bold tracking-wider hover:bg-black transition-colors"
          >
            ショッピングを続ける
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container max-w-4xl mx-auto">
        <h1 className="font-serif text-[32px] mb-lg">SHOPPING CART</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-md">
            {lines.map((line) => {
              const { merchandise, quantity } = line;
              const product = merchandise.product;
              const image = product.featuredImage;

              return (
                <div
                  key={line.id}
                  className="flex gap-md py-md border-b border-border"
                >
                  <div className="w-24 h-32 bg-section-bg flex-shrink-0 relative">
                    {image && (
                      <Image
                        src={image.url}
                        alt={image.altText ?? product.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${product.handle}`}
                      className="text-xs text-text-light uppercase font-bold"
                    >
                      {product.vendor}
                    </Link>
                    <h3 className="text-sm font-medium mt-1">{product.title}</h3>
                    {merchandise.title !== 'Default Title' && (
                      <p className="text-xs text-text-light mt-1">
                        {merchandise.title}
                      </p>
                    )}
                    <p className="text-sm font-bold mt-2">
                      {formatPrice(merchandise.price)}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() =>
                          quantity === 1
                            ? removeItem(line.id)
                            : updateItem(line.id, quantity - 1)
                        }
                        disabled={isLoading}
                        className="w-8 h-8 border border-border flex items-center justify-center disabled:opacity-50"
                      >
                        <MinusIcon className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => updateItem(line.id, quantity + 1)}
                        disabled={isLoading}
                        className="w-8 h-8 border border-border flex items-center justify-center disabled:opacity-50"
                      >
                        <PlusIcon className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(line.id)}
                    disabled={isLoading}
                    className="self-start p-2 disabled:opacity-50"
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="bg-section-bg p-lg">
            <h2 className="font-bold mb-md">注文サマリー</h2>
            <div className="space-y-sm text-sm">
              <div className="flex justify-between">
                <span>小計</span>
                <span>{subtotalAmount ? formatPrice(subtotalAmount) : '¥0'}</span>
              </div>
              <div className="flex justify-between text-text-light">
                <span>送料</span>
                <span>チェックアウト時に計算</span>
              </div>
            </div>
            <div className="border-t border-border mt-md pt-md">
              <div className="flex justify-between font-bold text-lg">
                <span>合計</span>
                <span>{totalAmount ? formatPrice(totalAmount) : '¥0'}</span>
              </div>
              <p className="text-xs text-text-light mt-1">(税込)</p>
            </div>
            <a
              href={cart?.checkoutUrl ?? '#'}
              className="block w-full py-4 bg-text-primary text-white text-center font-bold tracking-wider mt-lg hover:bg-black transition-colors"
            >
              レジに進む
            </a>
            <Link
              href="/products"
              className="block text-center text-sm text-text-light mt-md hover:text-accent"
            >
              ショッピングを続ける
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
