import type { ShopifyProduct } from '@/lib/shopify/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: ShopifyProduct[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-md gap-y-lg">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
