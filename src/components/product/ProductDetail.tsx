'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import type { ShopifyProduct } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils';

interface ProductDetailProps {
  product: ShopifyProduct;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, isLoading } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants.edges[0]?.node.id
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = product.images.edges.map((edge) => edge.node);
  const variants = product.variants.edges.map((edge) => edge.node);
  const selectedVariant = variants.find((v) => v.id === selectedVariantId);

  const handleAddToCart = async () => {
    if (selectedVariantId) {
      await addItem(selectedVariantId);
    }
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] bg-section-bg relative mb-md">
              {images[selectedImageIndex] && (
                <Image
                  src={images[selectedImageIndex].url}
                  alt={images[selectedImageIndex].altText ?? product.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-sm">
                {images.map((image, index) => (
                  <button
                    key={image.url}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square relative ${
                      index === selectedImageIndex
                        ? 'ring-2 ring-text-primary'
                        : 'ring-1 ring-border'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.altText ?? `${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-text-light uppercase font-bold tracking-wider mb-2">
              {product.vendor}
            </p>
            <h1 className="text-2xl font-medium mb-4">{product.title}</h1>
            <p className="text-2xl font-bold mb-6">
              {selectedVariant
                ? formatPrice(selectedVariant.price)
                : formatPrice(product.priceRange.minVariantPrice)}
              <span className="text-sm text-text-light font-normal ml-2">(tax in)</span>
            </p>

            {/* Variants */}
            {variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-bold mb-2">サイズ / カラー</p>
                <div className="flex flex-wrap gap-2">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      disabled={!variant.availableForSale}
                      className={`px-4 py-2 border text-sm ${
                        variant.id === selectedVariantId
                          ? 'border-text-primary bg-text-primary text-white'
                          : 'border-border hover:border-text-primary'
                      } ${!variant.availableForSale ? 'opacity-50 line-through' : ''}`}
                    >
                      {variant.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading || !product.availableForSale}
              className="w-full py-4 bg-text-primary text-white font-bold text-sm tracking-wider disabled:opacity-50 hover:bg-black transition-colors"
            >
              {!product.availableForSale
                ? 'SOLD OUT'
                : isLoading
                ? 'カートに追加中...'
                : 'カートに追加する'}
            </button>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-bold mb-4">商品説明</h2>
              <div
                className="prose prose-sm max-w-none text-text-light"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-section-bg text-text-light"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
