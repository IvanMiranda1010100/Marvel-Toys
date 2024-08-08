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
        removeItem: (productName, quantityToRemove) =>
          set((state) => {
            const existingProduct = state.items.find(
              (item) => item.product.name === productName
            );
            if (existingProduct) {
              const newQuantity = existingProduct.quantity - quantityToRemove;
              if (newQuantity <= 0) {
                return {
                  items: state.items.filter(
                    (item) => item.product.name !== productName
                  ),
                };
              } else {
                return {
                  items: state.items.map((item) =>
                    item.product.name === productName
                      ? { ...item, quantity: newQuantity }
                      : item
                  ),
                };
              }
            }
            return state;
          }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // nombre del item en localStorage
    }
  )
);
