import { shopifyFetch } from './client';
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_COLLECTIONS,
  GET_COLLECTION_BY_HANDLE,
  GET_CART,
} from './queries';
import {
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINE,
  REMOVE_FROM_CART,
} from './mutations';
import type { ShopifyProduct, ShopifyCollection, ShopifyCart } from './types';

// Products
export async function getProducts(first: number = 20) {
  const data = await shopifyFetch<{
    products: {
      edges: { node: ShopifyProduct }[];
      pageInfo: { hasNextPage: boolean; endCursor: string };
    };
  }>({
    query: GET_PRODUCTS,
    variables: { first },
  });
  return data.products.edges.map((edge) => edge.node);
}

export async function getProductByHandle(handle: string) {
  const data = await shopifyFetch<{
    productByHandle: ShopifyProduct | null;
  }>({
    query: GET_PRODUCT_BY_HANDLE,
    variables: { handle },
    cache: 'no-store',
  });
  return data.productByHandle;
}

// Collections
export async function getCollections(first: number = 10) {
  const data = await shopifyFetch<{
    collections: {
      edges: { node: ShopifyCollection }[];
    };
  }>({
    query: GET_COLLECTIONS,
    variables: { first },
  });
  return data.collections.edges.map((edge) => edge.node);
}

export async function getCollectionByHandle(handle: string, first: number = 20) {
  const data = await shopifyFetch<{
    collectionByHandle: ShopifyCollection | null;
  }>({
    query: GET_COLLECTION_BY_HANDLE,
    variables: { handle, first },
    cache: 'no-store',
  });
  return data.collectionByHandle;
}

// Cart
export async function createCart() {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: ShopifyCart;
    };
  }>({
    query: CREATE_CART,
    variables: { input: {} },
    cache: 'no-store',
  });
  return data.cartCreate.cart;
}

export async function getCart(cartId: string) {
  const data = await shopifyFetch<{
    cart: ShopifyCart | null;
  }>({
    query: GET_CART,
    variables: { cartId },
    cache: 'no-store',
  });
  return data.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1) {
  const data = await shopifyFetch<{
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  }>({
    query: ADD_TO_CART,
    variables: {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    },
    cache: 'no-store',
  });
  return data.cartLinesAdd.cart;
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  const data = await shopifyFetch<{
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  }>({
    query: UPDATE_CART_LINE,
    variables: {
      cartId,
      lines: [{ id: lineId, quantity }],
    },
    cache: 'no-store',
  });
  return data.cartLinesUpdate.cart;
}

export async function removeFromCart(cartId: string, lineIds: string[]) {
  const data = await shopifyFetch<{
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  }>({
    query: REMOVE_FROM_CART,
    variables: {
      cartId,
      lineIds,
    },
    cache: 'no-store',
  });
  return data.cartLinesRemove.cart;
}

export * from './types';
