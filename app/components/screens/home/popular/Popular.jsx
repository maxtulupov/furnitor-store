import styles from "../popular/Popular.module.scss"
import CatalogItem from "../../catalog/catalogItem/CatalogItem"

const Popular = ({productsList, isModal, setModal}) => {
	return (
		<section className={styles.popular}>
			<div className="container">
				<h2 className={styles.popular__title}>Популярные товары</h2>
				<div className={styles.popular__content}>
					{productsList && productsList.map(({id, title, slug, img, price, images}) => (
						<CatalogItem key={id} title={title} slug={slug} img={img} price={price} images={images} isModal={isModal} setModal={setModal} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Popular
