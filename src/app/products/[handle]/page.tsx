import { notFound } from 'next/navigation';
import { getProductByHandle, getProducts } from '@/lib/shopify';
import { ProductDetail } from '@/components/product/ProductDetail';

interface Props {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  try {
    const products = await getProducts(100);
    return products.map((product) => ({
      handle: product.handle,
    }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  let product;
  try {
    product = await getProductByHandle(handle);
  } catch {
    notFound();
  }

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
