import { useState } from "react";
import { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Layout from "../../layout/Layout"
import YaMap from "../home/yamap/YaMap"
import cl from "classnames";
import styles from "../product/Product.module.scss"
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import Similar from "./similar/Similar";
import { FC } from 'react';
import { CatListAside, IsModal, NaviLinks, OneProduct, SliceCartItem } from "../../../../types";
import QuantityModal from "../../ui/quantity/QuantityModal";
import { addItem } from "../../../redux/cart/slice";
import { useDispatch } from "react-redux";

interface ProductProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[],
  productList: OneProduct[],
  productInfo: OneProduct,
  sizes?: string
}

const Product:FC<ProductProps> = (props) => {
	const product = props.productInfo;
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [isModal, setModal] = useState<IsModal>({ open: false, id: 0, title: 'kek', slug: 'test', price: '9999', images: [], img: '/img/about/about-image.png'});
  const [inputValue, setInputValue] = useState<number>(1);
  const dispatch = useDispatch();

  const addItemOnClick = () => {
    const thisItem: SliceCartItem = {
      id: product.id, 
      title: product.title, 
      img: product.img, 
      price: product.price, 
      slug: product.slug, 
      count: inputValue
    };
    dispatch(addItem(thisItem));
  };


	return (
		<Layout naviLinks={props.naviLinks} isModal={isModal} setModal={setModal} catList={props.catList}>
			<main className="main">
				<Breadcrumbs pageTitle={product.title} />
				<section className={styles.productPage}>
					<div className="container">
						<div className={styles.productPage__content}>
							<div className={cl(styles.productPage__left, styles.leftProductPage)}>
								<div className={cl(styles.leftProductPage__thumbnails, styles.thumbnails)}>
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
										{product.images && product.images.map(img => (
											<SwiperSlide key={img.id} className={cl(styles.thumbnails__slide, "swiper-slide")}>
												<Image src={img.url} sizes="94" alt={product.title} fill />
											</SwiperSlide>
										))}
									</Swiper>
								</div>
								<div className={cl(styles.leftProductPage__big, styles.big)}>
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
										{product.images && product.images.map(img => (
											<SwiperSlide key={img.id} className={cl(styles.big__slide, "swiper-slide")}>
												<Image src={img.url} sizes="596" alt={product.title} fill />
											</SwiperSlide>
										 ))}
									</Swiper>
								</div>
							</div>
							<div className={styles.productPage__right}>
								<Link href="/" className={styles.productPage__backLink}>?????????????????? ??????????????????</Link>
								<h1 className={styles.productPage__title}>{product.title}</h1>
								{/* <ul className="product-page__desc desc-product">
									<li className="desc-product__item item-desc-product">
										<span className="item-desc-product__name">????????????:</span>
										<span className="item-desc-product__value">760 ????</span>
									</li>
									<li className="desc-product__item item-desc-product">
										<span className="item-desc-product__name">????????????:</span>
										<span className="item-desc-product__value">1070 ????</span>
									</li>
									<li className="desc-product__item item-desc-product">
										<span className="item-desc-product__name">??????????????:</span>
										<span className="item-desc-product__value">590 ????</span>
									</li>
									<li className="desc-product__item item-desc-product">
										<span className="item-desc-product__name">????????????????:</span>
										<span className="item-desc-product__value">????????</span>
									</li>
								</ul> */}
								<div className={styles.productPage__price}>
									<span>{product.price}</span>?????
								</div>
								<div className={styles.productPage__form}>
									<QuantityModal inputValue={inputValue} setInputValue={setInputValue} />
									<button className={styles.productPage__buy} onClick={addItemOnClick}>?? ??????????????</button>
								</div>
							</div>
						</div>
						<div className={cl(styles.productPage__text, styles.textProduct)}>
							<h2 className={styles.textProduct__title}>????????????????</h2>
							<div className={styles.textProduct__content}>
								<p>?????????????????? ?????????????????? ?????????????? ???????????????????????????? Ki-Ki ??? ???????????????? ?????????????? ?????????????????????? ??????????????????, ?????????????? ?????????????????? ?????????????????????????????????? ???????????????? ???????????? ??????????????</p>
								<p>???????????????????? ????????????????????, ?????????????????? ?????????????? ?????????? ?????????????????????????? ???????????????????????????? ???????????????????? ????????????. ?????????????? ???????????????????????????? ?????????? ?????????????? ???????????? ?????????????? ???????????????????????? ???????????? ???????????? ??????????????.</p>
							</div>
						</div>
					</div>
				</section>
				<Similar productsList={props.productList} isModal={isModal} setModal={setModal} />
				<YaMap />
			</main>
		</Layout>
	)
}

export default Product
