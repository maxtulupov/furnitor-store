import styles from "../quantity/Quantity.module.scss"
import cl from "classnames"
import { useState, FC, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem } from "../../../redux/cart/slice";
import { SliceCartItem } from "../../../../types";

interface Quantity {
  addStyle?: string,
  count?: number,
  idItem: number,
  item: SliceCartItem
}

const Quantity:FC<Quantity> = ({ addStyle, count, idItem, item }) => {
  const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState<number>(1);

  const onClickMinusItem = () => {
    if (inputValue !== 1) {
      setInputValue(inputValue - 1);

      dispatch(minusItem(idItem));
    }
  }

  const onClickPlusItem = () => {
    setInputValue(inputValue + 1);
    
    dispatch(addItem(item));
  }


  useEffect(() => {
    if (count > 1) {
      setInputValue(count);
    }
  }, [count, setInputValue])

	return (
		<div className={cl(styles.quantity, addStyle ? addStyle : styles.productPage__quantity)}>
			<button type="button" onClick={onClickMinusItem} className={cl(styles.quantity__button, styles.quantity__button_minus)}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.75 15.5L7.25 10L12.75 4.5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<div className={styles.quantity__input}>
				<input type="text" name="form[]" value={inputValue} readOnly />
			</div>
			<button type="button" onClick={onClickPlusItem} className={cl(styles.quantity__button, styles.quantity__button_plus)}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.75 15.5L7.25 10L12.75 4.5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
		</div>
	)
}

export default Quantity