import { SliceCartItem } from "../../types";
import { parseCookies } from './parseCookies';

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

};