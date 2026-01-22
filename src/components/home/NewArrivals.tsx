import Link from 'next/link';
import { getProducts } from '@/lib/shopify';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductCardSkeleton } from './ProductCardSkeleton';

export async function NewArrivals() {
  let products;
  try {
    products = await getProducts(4);
  } catch (error) {
    // If Shopify is not configured, show skeleton
    products = null;
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-between items-end mb-lg">
          <h2 className="font-serif text-[32px]">NEW ARRIVALS</h2>
          <Link href="/products" className="text-[13px] underline">
            すべての新着商品をみる
          </Link>
        </div>

        {products ? (
          <ProductGrid products={products} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-md gap-y-lg">
            {[...Array(4)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
