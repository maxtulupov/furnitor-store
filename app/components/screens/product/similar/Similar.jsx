import styles from "../similar/Similar.module.scss"
import { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cl from "classnames";
import CatalogItem from "../../catalog/catalogItem/CatalogItem";

const Similar = ({productsList, isModal, setModal}) => {
	return (
		<section className={styles.similarProducts}>
			<div className="container">
				<h2 className={styles.similarProducts__title}>Похожие товары</h2>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					speed={800}
					className={styles.similarProducts__slider}
					// pagination={{ clickable: true }}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 5,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						992: {
							spaceBetween: 20,
							slidesPerView: 4,
						}
					}}
				>
					{productsList && productsList.map(({id, title, slug, img, images, price}) => (
						<SwiperSlide key={id} className={cl(styles.similarProducts__slide, "swiper-slide")}>
							<CatalogItem title={title} slug={slug} img={img} images={images} price={price} isModal={isModal} setModal={setModal} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Similar
