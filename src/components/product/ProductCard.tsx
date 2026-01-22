import Image from 'next/image';
import Link from 'next/link';
import type { ShopifyProduct } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.featuredImage;
  const price = product.priceRange.minVariantPrice;
  const isSoldOut = !product.availableForSale;

  return (
    <article className="relative">
      {isSoldOut && (
        <div className="absolute top-[10px] left-[10px] bg-accent text-white py-1 px-2 text-[10px] font-bold z-10">
          SOLD OUT
        </div>
      )}
      <Link href={`/products/${product.handle}`}>
        <div className="aspect-[3/4] overflow-hidden mb-sm bg-section-bg">
          {image && (
            <Image
              src={image.url}
              alt={image.altText ?? product.title}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="text-[13px]">
          <p className="text-[11px] text-text-light mb-[2px] uppercase font-bold">
            {product.vendor}
          </p>
          <h3 className="font-medium mb-1 h-10 overflow-hidden">{product.title}</h3>
          <p className="font-bold text-text-primary">
            {formatPrice(price)}{' '}
            <span className="text-[11px] text-text-light font-normal">(tax in)</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
