import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import Similar from "../product/similar/Similar";
import styles from "../Cart/Cart.module.scss"
import cl from "classnames";
import Link from "next/link";
import CartOneItem from "./CartOneItem/CartOneItem";
import { useState } from "react"

const Cart = (props) => {
	const [isModal, setModal] = useState({ open: false, title: 'kek', slug: 'test', price: '9999', images: [], img: '/img/about/about-image.png'});

	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList} isModal={isModal} setModal={setModal}>
			<main className="main">
				<Breadcrumbs pageTitle="Корзина" />
				<section className={styles.cartPage}>
					<div className="container">
						<h1 className={styles.cartPage__title}>Корзина</h1>
						<div className={styles.cartPage__content}>
							<div className={styles.cartPage__left}>
								{props.productsList && props.productsList.map(({id, title, slug, img, price}) => (
									<CartOneItem key={id} title={title} slug={slug} img={img} price={price} />
								))}
							</div>
							<div className={cl(styles.cartPage__right, styles.rightCartPage)}>
								<div className={styles.rightCartPage__content}>
									<div className={styles.rightCartPage__title}>
										Ваш заказ
										<div className={styles.rightCartPage__count}><span>3</span> товара</div>
									</div>
									<div className={cl(styles.rightCartPage__item, styles.itemRightCart)}>
										<div className={styles.itemRightCart__title}>Сумма заказа:</div>
										<div className={styles.itemRightCart__number}>
											<span>35 600</span> ₽
										</div>
									</div>
									<div className={cl(styles.rightCartPage__item, styles.itemRightCart, styles.itemRightCartSale)}>
										<div className={styles.itemRightCart__title}>Скидка:</div>
										<div className={styles.itemRightCart__number}>
											<span>– 1 000</span> ₽
										</div>
									</div>
									<div className={cl(styles.rightCartPage__total, styles.totalRightCart)}>
										<div className={styles.totalRightCart__title}>Итого</div>
										<div className={styles.totalRightCart__number}><span>34 600</span> ₽</div>
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

