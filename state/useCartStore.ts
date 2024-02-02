import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ProductType = {
  id: number
  title: string
  description?: string
  image?: string
  price: number
}

export type CartItemType = {
  id: number
  title: string
  image?: string
  price: number
  count: number
}

export type CartType = {
  products: CartItemType[]
  totalItems: number
  totalPrice: number
}

export type ActionTypes = {
  addToCart: (item: CartItemType) => void
  removeFromCart: (item: CartItemType) => void
}

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
}

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      addToCart(item: CartItemType) {
        const products = get().products
        const product = products.find(
          (product: CartItemType) => product.id === item.id
        )

        if (product) {
          product.count += item.count

          set((state: CartType) => ({
            products: products.map((p) =>
              p.id === item.id ? { ...p, count: p.count + item.count } : p
            ),
            totalItems: state.totalItems + item.count,
            totalPrice: state.totalPrice + item.count * item.price,
          }))
        } else {
          set((state: CartType) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.count,
            totalPrice: state.totalPrice + item.count * item.price,
          }))
        }
      },
      removeFromCart(item: CartItemType) {
        const products = get().products
        const index = products.findIndex(
          (product: CartItemType) => product.id === item.id
        )

        if (index !== -1) {
          const updatedProducts = [...products]
          updatedProducts.splice(index, 1)
          const removedItemPrice = item.price * item.count

          set((state: CartType) => ({
            products: updatedProducts,
            totalItems: state.totalItems - item.count,
            totalPrice: state.totalPrice - removedItemPrice,
          }))
        }
      },
    }),
    { name: 'cart', skipHydration: true }
  )
)