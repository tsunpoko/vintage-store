import { NextResponse } from 'next/server';
import { updateCartLine } from '@/lib/shopify';

export async function POST(request: Request) {
  try {
    const { cartId, lineId, quantity } = await request.json();

    if (!cartId || !lineId || quantity === undefined) {
      return NextResponse.json(
        { error: 'Cart ID, Line ID, and quantity are required' },
        { status: 400 }
      );
    }

    const cart = await updateCartLine(cartId, lineId, quantity);
    return NextResponse.json({ cart });
  } catch (error) {
    console.error('Failed to update cart:', error);
    return NextResponse.json({ error: 'Failed to update cart' }, { status: 500 });
  }
}
