import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCartItem } from '../../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';


// const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    addItem(state, action: PayloadAction<SliceCartItem>) {
      const findItem = state.items.find((elem) => elem.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {},
    removeItem(state, action: PayloadAction<string>) {},
    clearItems(state) {},
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;