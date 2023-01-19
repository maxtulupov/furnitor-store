import styles from "../catalogItem/CatalogItem.module.scss"
import Image from "next/image"
import cl from "classnames"
import Link from "next/link"
import cartIcon from "../../../../assets/img/icons/cart-icon_wh.svg"
import { FC } from 'react';
import { IsModal, OneProductImages, SliceCartItem } from '../../../../../types';
import { useDispatch } from "react-redux"
import { addItem } from "../../../../redux/cart/slice"

interface CatalogItemProps {
  id: number,
  title: string,
  img: string,
  images: OneProductImages[],
  slug: string,
  price: string,
  isModal: IsModal,
  setModal: (IsModal: IsModal) => void,
}

const CatalogItem:FC<CatalogItemProps> = (props) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const thisItem: SliceCartItem = {
      id: props.id, 
      title: props.title, 
      img: props.img, 
      price: props.price, 
      slug: props.slug, 
      count: 1
    };
    dispatch(addItem(thisItem));
  };

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
				<div className={styles.itemCatalog__form}>
					<div onClick={onClickAdd} className={cl(styles.itemCatalog__priceBlock, styles.priceItem)}>
						<div className={styles.priceItem__price}>
							<span>{props.price}</span> ₽
						</div>
						<button className={styles.priceItem__buy}>
							<Image src={cartIcon} alt="Иконка корзины" />
						</button>
					</div>
				</div>
			</div>
		</article>
	)
}

export default CatalogItem