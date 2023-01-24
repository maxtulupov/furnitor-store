import styles from "../Checkout/Checkout.module.scss"
import cl from "classnames";
import { FC } from 'react';

interface CheckoutItemProps {
  id: number,
  title: string,
  price: string,
  count: number
}

const CheckoutItem:FC<CheckoutItemProps> = (props) => {

	return (
		<div className={cl(styles.checkoutRight__item, styles.itemCheckoutRight)}>
      <div className={styles.itemCheckoutRight__left}>
        <div className={styles.itemCheckoutRight__title}>{props.title}</div>
        <div className={styles.itemCheckoutRight__count}>
          <span>{props.count}</span> шт
        </div>
      </div>
      <div className={styles.itemCheckoutRight__right}>
        <div className={styles.itemCheckoutRight__price}>
          <span>{props.price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}</span> ₽
        </div>
        {/* <div className={styles.itemCheckoutRight__oldPrice}>
          <span>20 200</span> ₽
        </div> */}
      </div>
    </div>
	)
}

export default CheckoutItem