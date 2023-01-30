import Link from "next/link";
import Image from "next/image";
import styles from "../Cart.module.scss"
import cl from "classnames";
import Quantity from "../../../ui/quantity/Quantity";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/cart/slice";
import { SliceCartItem } from "../../../../../types";
import { FC } from 'react';

const CartOneItem:FC<SliceCartItem> = (props) => {
  const dispatch = useDispatch();

  const onClickRemoveItem = () => {
    dispatch(removeItem(props.id));
  };
	return (
		<div className={cl(styles.cartPage__item, styles.itemCartPage)}>
			<div className={styles.itemCartPage__left}>
			<Link href={`/catalog/${props.slug}`} className={styles.itemCartPage__img}>
				<Image src={props.img} alt={props.title} sizes="100" fill />
			</Link>
			</div>
			<div className={styles.itemCartPage__right}>
				<div className={styles.itemCartPage__top}>
					<h4 className={styles.itemCartPage__title}>{props.title}</h4>
					<div className={styles.itemCartPage__price}><span>{props.price}</span> ₽</div>
				</div>
				<div className={styles.itemCartPage__bottom}>
					<form action="">
						<button className={styles.itemCartPage__remove} onClick={onClickRemoveItem}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 5H4.16667H17.5" stroke="#A0A0A0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M6.66699 4.99999V3.33332C6.66699 2.8913 6.84259 2.46737 7.15515 2.15481C7.46771 1.84225 7.89163 1.66666 8.33366 1.66666H11.667C12.109 1.66666 12.5329 1.84225 12.8455 2.15481C13.1581 2.46737 13.3337 2.8913 13.3337 3.33332V4.99999M15.8337 4.99999V16.6667C15.8337 17.1087 15.6581 17.5326 15.3455 17.8452C15.0329 18.1577 14.609 18.3333 14.167 18.3333H5.83366C5.39163 18.3333 4.96771 18.1577 4.65515 17.8452C4.34259 17.5326 4.16699 17.1087 4.16699 16.6667V4.99999H15.8337Z" stroke="#A0A0A0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M8.33301 9.16666V14.1667" stroke="#A0A0A0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M11.667 9.16666V14.1667" stroke="#A0A0A0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							Удалить
						</button>
						<Quantity addStyle={styles.itemCartPage__quantity} count={props.count} idItem={props.id} item={{id: props.id, title: props.title, img: props.img, price: props.price, slug: props.slug, count: props.count}}/>
					</form>
				</div>
			</div>
		</div>
	)
};

export default CartOneItem;
