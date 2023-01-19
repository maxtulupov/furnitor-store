import { SliceCartItem } from "../../types";

export const calcTotalPrice = (items: SliceCartItem[]) => {
  return items.reduce((sum, elem) => +elem.price.replace(" ", "") * elem.count + sum, 0);
};