import styles from "../popups/ProductPopUp.module.scss"
import cl, { Argument } from "classnames";
import { useState, useEffect, FC } from 'react';
import { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from "next/image";
import { OneProductImages, SliceCartItem } from "../../../../types";
import QuantityModal from "../quantity/QuantityModal";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cart/slice";

interface ProductPopUpProps {
  isVisible: boolean,
  id: number,
  title: string,
  slug: string,
  price: string,
  images: OneProductImages[],
  img: string,
  onClose: () => void,
  addStyle?: string
}

const ProductPopUp:FC<ProductPopUpProps> = ({ isVisible = false, id, title, slug, price, images, img, onClose }) => {

	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    };
  };
	const clickHandler = ({ target }) => {
		if (!target.closest(`.${styles.popup__content}`) && !target.closest('.popupProductClick')) {
			onClose();
		}
	};

	const bodyLock = () => {
		if (document) {
			const thisDoc = document.documentElement;
			thisDoc.classList.add('popup-show');
			thisDoc.classList.add('lock');
		}
	};
	const bodyUnLock = () => {
		if (document) {
			const thisDoc = document.documentElement;
			thisDoc.classList.remove('popup-show');
			thisDoc.classList.remove('lock');
		}
	};

  const [inputValue, setInputValue] = useState<number>(1);
  const dispatch = useDispatch();

  const addItemOnClick = () => {
    const thisItem: SliceCartItem = {
      id: id, 
      title: title, 
      img: img, 
      price: price, 
      slug: slug, 
      count: inputValue
    };
    dispatch(addItem(thisItem));
  };


	useEffect(() => {
		isVisible ? bodyLock() : bodyUnLock();

    document.addEventListener('keydown', keydownHandler);
		document.addEventListener('click', clickHandler);
    return () => {
			document.removeEventListener('keydown', keydownHandler);
			document.removeEventListener('click', clickHandler);
		};
  });

	return (
		<div id="popup-product" aria-hidden="true" className={cl(styles.popup, styles.popupProduct, !isVisible ? null : styles.popup_show)}>
			<div className={styles.popup__wrapper}>
				<div className={styles.popup__content}>
					<div data-close className={styles.popup__close} onClick={() => onClose()}></div>
					<div className={cl(styles.popupProduct__left, styles.leftPopupProduct)}>
						<div className={styles.leftPopupProduct__sliders}>
							{images && 
								<div className={cl(styles.leftPopupProduct__thumbnails, styles.thumbnails)}>
									<Swiper
										modules={[Navigation, Thumbs]}
										spaceBetween={8}
										slidesPerView={4}
										navigation
										speed={800}
										watchSlidesProgress
										direction="horizontal"
										onSwiper={setThumbsSwiper}
										className={cl(styles.thumbnails__slider, "thumbsSliderClass")}
										breakpoints={{
											320: {
												direction: 'horizontal',
												slidesPerView: 3,
												spaceBetween: 10,
											},
											768: {
												direction: 'vertical',
												slidesPerView: 4,
												spaceBetween: 8,
											},
										}}
									>
										{images && images.map(img => (
											<SwiperSlide key={img.id} className={cl(styles.thumbnails__slide, "swiper-slide")}>
												<Image src={img.url} sizes="94" alt={title} fill />
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							}
							<div className={cl(styles.leftPopupProduct__big, styles.big)}>
								<Swiper
									modules={[Navigation, Thumbs]}
									spaceBetween={20}
									slidesPerView={1}
									speed={800}
									thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
									className={styles.big__slider}
									breakpoints={{
										320: {
											slidesPerView: 1,
											spaceBetween: 5,
										},
										768: {
											slidesPerView: 1,
											spaceBetween: 10,
										},
										992: {
											spaceBetween: 20
										}
									}}
								>
									{images && images.map(img => (
										<SwiperSlide key={img.id} className={cl(styles.big__slide, "swiper-slide")}>
											<Image src={img.url} sizes="596" alt={title} fill />
										</SwiperSlide>
										))}
									{images ? false : img && <Image src={img} sizes="596" alt={title} fill />}
								</Swiper>
							</div>
						</div>
						<Link href={`/catalog/${slug}`} className={styles.leftPopupProduct__link} onClick={() => onClose()}>Перейти в карточку товара</Link>
					</div>
					<div className={cl(styles.popupProduct__right, styles.rightPopupProduct)}>
						<div className={styles.rightPopupProduct__top}>
							<h1 className={styles.rightPopupProduct__title}>{title}</h1>
							{/* <ul class="right-popup-product__desc desc-product">
								<li class="desc-product__item item-desc-product">
									<span class="item-desc-product__name">Высота:</span>
									<span class="item-desc-product__value">760 мм</span>
								</li>
								<li class="desc-product__item item-desc-product">
									<span class="item-desc-product__name">Ширина:</span>
									<span class="item-desc-product__value">1070 мм</span>
								</li>
								<li class="desc-product__item item-desc-product">
									<span class="item-desc-product__name">Глубина:</span>
									<span class="item-desc-product__value">590 мм</span>
								</li>
								<li class="desc-product__item item-desc-product">
									<span class="item-desc-product__name">Материал:</span>
									<span class="item-desc-product__value">ЛДСП</span>
								</li>
							</ul> */}
							<div className={styles.rightPopupProduct__text}>
								<h2>Описание</h2>
								<p>Мебельная модульная система для подростков Ki-Ki – отличное решение тех любящих родителей, которые заботятся о психологическом здоровье своего ребёнка</p>
								<p>По желанию покупателя, модульную систему можно комплектовать разнообразными элементами мебели. Плавные геометрические формы деталей мебели созданы для комфорта и уюта вашего ребёнка.</p>
							</div>
						</div>
						<div className={cl(styles.rightPopupProduct__bottom, styles.bottomPopupProduct)}>
							<div>
								<div className={styles.bottomPopupProduct__top}>
									<div className={styles.rightPopupProduct__price}><span>{price}</span> ₽</div>
									<QuantityModal addStyle={styles.rightPopupProduct__quantity} inputValue={inputValue} setInputValue={setInputValue} />
								</div>
								<button type="submit" className={styles.bottomPopupProduct__submit} onClick={addItemOnClick}>В корзину</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProductPopUp;

