import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import Similar from "../product/similar/Similar";
import styles from "../Cart/Cart.module.scss"
import cl from "classnames";
import Link from "next/link";
import CartOneItem from "./CartOneItem/CartOneItem";
import { FC, useState } from "react"
import { CatListAside, IsModal, NaviLinks, OneProduct, SliceCartItem, SliceState } from "../../../../types";

import { useSelector } from "react-redux"

interface CartProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[],
  productsList: OneProduct[]
}

const Cart:FC<CartProps> = (props) => {
	const [isModal, setModal] = useState<IsModal>({ open: false, title: 'kek', slug: 'test', price: '9999', images: [], img: '/img/about/about-image.png'});

  const storeItems = useSelector<SliceState, SliceCartItem[]>((state) => state.cart.items);

  const cartSumm = useSelector<SliceState>((state) => state.cart.totalPrice);

	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList} isModal={isModal} setModal={setModal}>
			<main className="main">
				<Breadcrumbs pageTitle="Корзина" />
				<section className={styles.cartPage}>
					<div className="container">
						<h1 className={styles.cartPage__title}>Корзина</h1>
						<div className={styles.cartPage__content}>
							<div className={styles.cartPage__left}>
                {storeItems && storeItems.map(({id, title, slug, img, price, count}) => (
									<CartOneItem key={id} id={id} title={title} slug={slug} img={img} price={price} count={count} />
								))}
							</div>
							<div className={cl(styles.cartPage__right, styles.rightCartPage)}>
								<div className={styles.rightCartPage__content}>
									<div className={styles.rightCartPage__title}>
										Ваш заказ
										<div className={styles.rightCartPage__count}><span>{storeItems.length}</span> товара</div>
									</div>
									<div className={cl(styles.rightCartPage__item, styles.itemRightCart)}>
										<div className={styles.itemRightCart__title}>Сумма заказа:</div>
										<div className={styles.itemRightCart__number}>
											<span>{cartSumm.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}</span> ₽
										</div>
									</div>
									{/* <div className={cl(styles.rightCartPage__item, styles.itemRightCart, styles.itemRightCartSale)}>
										<div className={styles.itemRightCart__title}>Скидка:</div>
										<div className={styles.itemRightCart__number}>
											<span>– 1 000</span> ₽
										</div>
									</div> */}
									<div className={cl(styles.rightCartPage__total, styles.totalRightCart)}>
										<div className={styles.totalRightCart__title}>Итого</div>
										<div className={styles.totalRightCart__number}><span>{cartSumm.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}</span> ₽</div>
									</div>
									<Link href="/checkout" className={styles.rightCartPage__checkoutLink}>Оформить заказ</Link>
									<div className={styles.rightCartPage__desc}>Оформление заказа займёт всего 1–2 минуты</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Similar productsList={props.productsList} isModal={isModal} setModal={setModal} />
			</main>
		</Layout>
	)
};

export default Cart;

