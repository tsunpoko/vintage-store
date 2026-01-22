import { NextResponse } from 'next/server';
import { removeFromCart } from '@/lib/shopify';

export async function POST(request: Request) {
  try {
    const { cartId, lineIds } = await request.json();

    if (!cartId || !lineIds || !Array.isArray(lineIds)) {
      return NextResponse.json(
        { error: 'Cart ID and Line IDs are required' },
        { status: 400 }
      );
    }

    const cart = await removeFromCart(cartId, lineIds);
    return NextResponse.json({ cart });
  } catch (error) {
    console.error('Failed to remove from cart:', error);
    return NextResponse.json({ error: 'Failed to remove from cart' }, { status: 500 });
  }
}
