import styles from "../catalogItem/CatalogItem.module.scss"
import Image from "next/image"
import cl from "classnames"
import Link from "next/link"
import cartIcon from "../../../../assets/img/icons/cart-icon_wh.svg"
import { useState } from "react"
import ProductPopUp from "../../../ui/popups/ProductPopUp"

const CatalogItem = (props) => {
	// const [isModal, setModal] = useState(false);

	return (
		<article className={styles.itemCatalog}>
			<div className={styles.itemCatalog__content}>
				<div data-popup="#popup-product" onClick={() => props.setModal({open: true, title: props.title, slug: props.slug, price: props.price, images: props.images, img: props.img})} className={cl(styles.itemCatalog__top, 'popupProductClick')}>
					<div className={styles.itemCatalog__photo}>
						<Image 
							src={props.img} 
							alt={props.title} 
							sizes="336px"
							fill
							/>
					</div>
				</div>
				<h4 className={styles.itemCatalog__title}>
					<Link href={`/catalog/${props.slug}`}>{props.title}</Link>
				</h4>
				<form action="" method="" className={styles.itemCatalog__form}>
					<div className={cl(styles.itemCatalog__priceBlock, styles.priceItem)}>
						<div className={styles.priceItem__price}>
							<span>{props.price}</span> ₽
						</div>
						<button className={styles.priceItem__buy}>
							<Image src={cartIcon} alt="Иконка корзины" />
						</button>
					</div>
				</form>
			</div>
			{/* <ProductPopUp
				isVisible={isModal}
				title={props.title}
				slug={props.slug}
				price={props.price}
				images={props.images}
				img={props.img}
				onClose={() => setModal(false)}
			/> */}
		</article>
	)
}

export default CatalogItem