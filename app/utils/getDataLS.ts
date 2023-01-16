import { SliceCartItem } from "../../types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getDataLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as SliceCartItem[],
    totalPrice,
  }
};