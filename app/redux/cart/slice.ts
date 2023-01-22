import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { SliceCartItem, SliceCartState } from '../../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getDataLS } from '../../utils/getDataLS'
import { setCookie, getCookie } from 'cookies-next';

import Cookies from 'js-cookie'

const saveToCookie = (state) => {
  // deleteCookie('cart', []);
  setCookie('cart', '', []);
  console.log(getCookie('cart'));
  setCookie('cart', JSON.stringify(state), );
  console.log(getCookie('cart'));
  // expires
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
      state.items.push({
        ...action.payload
      });

      state.totalPrice = calcTotalPrice(state.items);

      saveToCookie(state);
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
    minusItem(state, action: PayloadAction<string>) {},
    removeItem(state, action: PayloadAction<string>) {},
    clearItems(state) {},
  },
});

export const { updatePageItems, addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;