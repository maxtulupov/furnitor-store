import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCartItem } from '../../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { setCookie } from 'cookies-next';
import { WritableDraft } from 'immer/dist/internal';

const saveToCookie = (state: WritableDraft<{ items: any[]; totalPrice: number; }>) => {
  setCookie('cart', '');
  setCookie('cart', JSON.stringify(state));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    updatePageItems(state, action: PayloadAction<SliceCartItem>) {
      const findItem = state.items.find((elem) => elem.id === action.payload.id);

      if (!findItem) {
        state.items.push({
          ...action.payload
        });

        state.totalPrice = calcTotalPrice(state.items);

        saveToCookie(state);
      }

    },
    addItem(state, action: PayloadAction<SliceCartItem>) {
      const findItem = state.items.find((elem) => elem.id === action.payload.id);


      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
      saveToCookie(state);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;

        state.totalPrice = calcTotalPrice(state.items);
        saveToCookie(state);
      }

    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);

      saveToCookie(state);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;

      saveToCookie(state);
    },
  },
});

export const { updatePageItems, addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;