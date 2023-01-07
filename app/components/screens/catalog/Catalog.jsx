import { React, useState } from "react"
import styles from "../../screens/catalog/Catalog.module.scss"
import Layout from "../../layout/Layout"
import YaMap from "../../screens/home/yamap/YaMap"
import CatalogItem from "./catalogItem/CatalogItem"
import cl from "classnames"
import Pagi from "../../ui/pagi/Pagi"
import Select from 'react-select'


const Catalog = (props) => {

	const options = [
		{ value: 'populars', label: 'по популярности', id: 'sd2' },
		{ value: 'price', label: 'по цене', id: 'sd3' }
	]

	const [isModal, setModal] = useState({ open: false, title: 'kek', slug: 'test', price: '9999', images: [], img: '/img/about/about-image.png'});

	return (
		<Layout naviLinks={props.naviLinks} isModal={isModal} setModal={setModal} >
			<main className="main">
				<section className={styles.catalogPage}>
					<div className="container">
						<div className={styles.catalogPage__top}>
							<h1 className={styles.catalogPage__title}>Каталог</h1>
							<div className={cl(styles.catalogPage__filter, styles.filterCatalog)}>
								<div className={styles.filterCatalog__name}>Сортировка:</div>
								{/* <Select options={options} className={styles.filterCatalog__select} /> */}
							</div>
						</div>
						<div className={styles.catalogPage__content}>
							{props.productsList && props.productsList.map(({id, title, slug, img, price, images}) => (
								<CatalogItem key={id} title={title} slug={slug} img={img} price={price} images={images} isModal={isModal} setModal={setModal} />
							))}
						</div>
						<Pagi />
					</div>
				</section>
				<YaMap />
			</main>
		</Layout>
	)
}

export default Catalog