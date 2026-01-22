'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import type { ShopifyCartLine } from '@/lib/shopify/types';
import { MinusIcon, PlusIcon, CloseIcon } from '@/components/ui/Icons';

interface CartItemProps {
  line: ShopifyCartLine;
}

export function CartItem({ line }: CartItemProps) {
  const { updateItem, removeItem, isLoading } = useCart();

  const { merchandise, quantity } = line;
  const product = merchandise.product;
  const image = product.featuredImage;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(line.id);
    } else {
      updateItem(line.id, newQuantity);
    }
  };

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="w-20 h-24 bg-section-bg flex-shrink-0 relative">
        {image && (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover"
            sizes="80px"
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <Link
          href={`/products/${product.handle}`}
          className="block text-xs text-text-light uppercase font-bold mb-1"
        >
          {product.vendor}
        </Link>
        <h4 className="text-sm font-medium mb-1 line-clamp-2">{product.title}</h4>
        {merchandise.title !== 'Default Title' && (
          <p className="text-xs text-text-light mb-2">{merchandise.title}</p>
        )}
        <p className="text-sm font-bold">{formatPrice(merchandise.price)}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={isLoading}
            className="w-7 h-7 border border-border flex items-center justify-center disabled:opacity-50"
          >
            <MinusIcon className="w-3 h-3" />
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={isLoading}
            className="w-7 h-7 border border-border flex items-center justify-center disabled:opacity-50"
          >
            <PlusIcon className="w-3 h-3" />
          </button>
        </div>
      </div>

      <button
        onClick={() => removeItem(line.id)}
        disabled={isLoading}
        className="self-start bg-transparent border-none cursor-pointer p-1 disabled:opacity-50"
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
