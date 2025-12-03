// app/store/cartStore.ts
import { create } from "zustand";

type CartItem = {
  id: number | string;
  title: string;
  price: string; // Changed from number to string
  img?: string;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string | number) => void;
  increaseQty: (id: string | number) => void;
  decreaseQty: (id: string | number) => void;
  clearCart: () => void;
  setCart: (items: CartItem[]) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const exists = get().cart.find((i) => i.id === product.id);
    if (exists) {
      set({
        cart: get().cart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cart: [...get().cart, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (id) => {
    set({ cart: get().cart.filter((i) => i.id !== id) });
  },

  increaseQty: (id) => {
    set({
      cart: get().cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    });
  },

  decreaseQty: (id) => {
    set({
      cart: get().cart.map((i) =>
        i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
      ),
    });
  },

  clearCart: () => set({ cart: [] }),

  setCart: (items) => set({ cart: items }),
}));
