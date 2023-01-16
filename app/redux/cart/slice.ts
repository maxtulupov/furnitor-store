import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCartItem, SliceCartState } from '../../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getDataLS } from '../../utils/getDataLS'


const initialState: SliceCartState = getDataLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
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