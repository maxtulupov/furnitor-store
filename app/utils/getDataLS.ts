import { SliceCartItem } from "../../types";
import useLocalStorage from "../hooks/useLocalStorage";
import { calcTotalPrice } from "./calcTotalPrice";

export const getDataLS = () => {

  try {
    // получаем значение из локального хранилища по ключу
    const data = localStorage.getItem('cart');

    const lsObj = JSON.parse(data);
    const items = data ? lsObj.items : [];
    const totalPrice = data ? lsObj.totalPrice : 0;
    // разбираем полученное значение или возвращаем initialValue
    return {
      items: items as SliceCartItem[],
      totalPrice
    }
  } catch (error) {
    // если возникла ошибка, также возвращаем начальное значение
    console.error(error);

    const items = [];
    const totalPrice = 0;

    return {
      items: items as SliceCartItem[],
      totalPrice
    }
  }



  // if (typeof window !== 'undefined') {
  //   const data = localStorage.getItem('cart');
  //   console.log(JSON.parse(data));
  //   const lsObj = JSON.parse(data);
  //   const items = data ? lsObj.items : [];
  //   const totalPrice = data ? lsObj.totalPrice : 0;

  //   return {
  //     items: items as SliceCartItem[],
  //     totalPrice,
  //   }
  // }



  // const data = localStorage.getItem('cart');
  // const items = [];
  // const items = data ? JSON.parse(data) : [];
  // const totalPrice = calcTotalPrice(items);

  // return {
  //   items: items as SliceCartItem[],
  //   totalPrice,
  // }
};