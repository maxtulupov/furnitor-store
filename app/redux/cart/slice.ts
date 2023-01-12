import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {},
    minusItem(state, action: PayloadAction<string>) {},
    removeItem(state, action: PayloadAction<string>) {},
    clearItems(state) {},
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;