import type { ShopifyPrice } from './shopify/types';

export function formatPrice(price: ShopifyPrice): string {
  const amount = parseFloat(price.amount);
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: price.currencyCode,
  }).format(amount);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
