import { Suspense } from 'react';
import { getProducts } from '@/lib/shopify';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductCardSkeleton } from '@/components/home/ProductCardSkeleton';

interface Props {
  searchParams: Promise<{ q?: string }>;
}

async function ProductList({ query }: { query?: string }) {
  const products = await getProducts(20);

  const filteredProducts = query
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.vendor.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : products;

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-text-light py-xl">
        {query ? `「${query}」に一致する商品が見つかりませんでした。` : '商品がありません。'}
      </p>
    );
  }

  return <ProductGrid products={filteredProducts} />;
}

function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-md gap-y-lg">
      {[...Array(8)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default async function ProductsPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <div className="section-padding">
      <div className="container">
        <div className="mb-lg">
          <h1 className="font-serif text-[32px]">
            {q ? `検索結果: ${q}` : 'ALL ITEMS'}
          </h1>
        </div>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList query={q} />
        </Suspense>
      </div>
    </div>
  );
}
