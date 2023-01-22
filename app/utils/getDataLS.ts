import { SliceCartItem } from "../../types";
import { getCookie } from 'cookies-next';

import Cookies from 'js-cookie'


export const getDataLS = (req) => {

  if (typeof window !== "undefined") {
    const data = Cookies.getJSON('cartt');
	
    const items = data ? data.items : [];
    const totalPrice = data ? data.totalPrice : 0;
    // разбираем полученное значение или возвращаем initialValue
    return {
      items: items as SliceCartItem[],
      totalPrice
    }
  } else {

    const data = Cookies.getJSON('cart');

    // console.log(req);

    // console.log(data);
	
    const items = data ? data.items : [];
    const totalPrice = data ? data.totalPrice : 0;
    // разбираем полученное значение или возвращаем initialValue
    return {
      items: items as SliceCartItem[],
      totalPrice
    }
  }

};