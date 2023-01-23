import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { SliceCartItem, SliceCartState } from '../../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { setCookie, getCookie } from 'cookies-next';

const saveToCookie = (state) => {
  setCookie('cart', '', []);
  // console.log(getCookie('cart'));
  setCookie('cart', JSON.stringify(state), );
  // console.log(getCookie('cart'));
};

// const initialState: SliceCartState = getDataLS();

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