import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity) =>
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.product.name === product.name
          );
          if (existingProduct) {
            return {
              items: state.items.map((item) =>
                item.product.name === product.name
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            items: [...state.items, { product, quantity }],
          };
        }),
      removeItem: (productName) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product.name !== productName
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // nombre del item en localStorage
    }
  )
);
