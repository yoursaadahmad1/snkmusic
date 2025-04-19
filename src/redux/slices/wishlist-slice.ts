"use client"
import { ProductsType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
interface CartState {
  cartProducts: ProductsType[];
}

const initialState: CartState = {
  cartProducts: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlist_product: (state, { payload }: PayloadAction<ProductsType>) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity! += 1;
        toast.info("Increase Wishlist Quantity", {
          position: "top-left",
        });
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartProducts.push(tempProduct);
        toast.success(`${payload.title.slice(0, 15)} added to wishlist`, {
          position: "top-left",
        });
      }
    },
    remove_wishlist_product: (state, { payload }: PayloadAction<ProductsType>) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload.id
      );
      toast.error(`Remove from your wishlist`, {
        position: "top-left",
      });
    },

    clear_wishlist: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all wishlist items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_quantity: (state, { payload }: PayloadAction<ProductsType>) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );
      if (cartIndex >= 0 && state.cartProducts[cartIndex]?.quantity) {
        state.cartProducts[cartIndex].quantity! -= 1;
        toast.error(`Decrease cart quantity`, {
          position: "top-left",
        });
      }
    },
  },
});

export const {
  wishlist_product,
  remove_wishlist_product,
  clear_wishlist,
  decrease_quantity,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
