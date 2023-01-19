import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { SliceCartItem, SliceCartState } from '../../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getDataLS } from '../../utils/getDataLS'


const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const initialState: SliceCartState = getDataLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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

      saveToLocalStorage(state);
    },
    minusItem(state, action: PayloadAction<string>) {},
    removeItem(state, action: PayloadAction<string>) {},
    clearItems(state) {},
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;