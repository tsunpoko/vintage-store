'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { ShopifyCart } from '@/lib/shopify/types';

interface CartContextType {
  cart: ShopifyCart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_ID_KEY = 'shopify_cart_id';

async function fetchCart(cartId: string): Promise<ShopifyCart | null> {
  const res = await fetch(`/api/cart?cartId=${encodeURIComponent(cartId)}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.cart;
}

async function createNewCart(): Promise<ShopifyCart> {
  const res = await fetch('/api/cart', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to create cart');
  const data = await res.json();
  return data.cart;
}

async function addItemToCart(cartId: string, variantId: string, quantity: number): Promise<ShopifyCart> {
  const res = await fetch('/api/cart/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, variantId, quantity }),
  });
  if (!res.ok) throw new Error('Failed to add to cart');
  const data = await res.json();
  return data.cart;
}

async function updateCartItem(cartId: string, lineId: string, quantity: number): Promise<ShopifyCart> {
  const res = await fetch('/api/cart/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, lineId, quantity }),
  });
  if (!res.ok) throw new Error('Failed to update cart');
  const data = await res.json();
  return data.cart;
}

async function removeCartItem(cartId: string, lineIds: string[]): Promise<ShopifyCart> {
  const res = await fetch('/api/cart/remove', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartId, lineIds }),
  });
  if (!res.ok) throw new Error('Failed to remove from cart');
  const data = await res.json();
  return data.cart;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initCart = async () => {
      const cartId = localStorage.getItem(CART_ID_KEY);
      if (cartId) {
        try {
          const existingCart = await fetchCart(cartId);
          if (existingCart) {
            setCart(existingCart);
            return;
          }
        } catch (error) {
          console.error('Failed to fetch cart:', error);
        }
      }
      try {
        const newCart = await createNewCart();
        localStorage.setItem(CART_ID_KEY, newCart.id);
        setCart(newCart);
      } catch (error) {
        console.error('Failed to create cart:', error);
      }
    };
    initCart();
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const addItem = useCallback(async (variantId: string, quantity: number = 1) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updatedCart = await addItemToCart(cart.id, variantId, quantity);
      setCart(updatedCart);
      openCart();
    } catch (error) {
      console.error('Failed to add item:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cart, openCart]);

  const updateItem = useCallback(async (lineId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updatedCart = await updateCartItem(cart.id, lineId, quantity);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to update item:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const updatedCart = await removeCartItem(cart.id, [lineId]);
      setCart(updatedCart);
    } catch (error) {
      console.error('Failed to remove item:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoading,
        openCart,
        closeCart,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
