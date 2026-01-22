import { NextResponse } from 'next/server';
import { createCart, getCart } from '@/lib/shopify';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cartId = searchParams.get('cartId');

  if (!cartId) {
    return NextResponse.json({ error: 'Cart ID is required' }, { status: 400 });
  }

  try {
    const cart = await getCart(cartId);
    return NextResponse.json({ cart });
  } catch (error) {
    console.error('Failed to get cart:', error);
    return NextResponse.json({ error: 'Failed to get cart' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const cart = await createCart();
    return NextResponse.json({ cart });
  } catch (error) {
    console.error('Failed to create cart:', error);
    return NextResponse.json({ error: 'Failed to create cart' }, { status: 500 });
  }
}
