import { notFound } from 'next/navigation';
import { getCollectionByHandle, getCollections } from '@/lib/shopify';
import { ProductGrid } from '@/components/product/ProductGrid';

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  try {
    const collections = await getCollections(50);
    return collections.map((collection) => ({
      handle: collection.handle,
    }));
  } catch {
    return [];
  }
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;

  let collection;
  try {
    collection = await getCollectionByHandle(handle, 50);
  } catch {
    notFound();
  }

  if (!collection) {
    notFound();
  }

  const products = collection.products.edges.map((edge) => edge.node);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="mb-lg">
          <h1 className="font-serif text-[32px]">{collection.title}</h1>
          {collection.description && (
            <p className="text-text-light mt-2">{collection.description}</p>
          )}
        </div>
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-center text-text-light py-xl">
            このコレクションには商品がありません。
          </p>
        )}
      </div>
    </div>
  );
}
