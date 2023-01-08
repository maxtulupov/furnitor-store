import styles from "../advantages/Advantages.module.scss"
import OneAdv from "./oneAdv"

const advantagesData = [
	{
		"id": 1,
		"title": "Товаров в ассортименте",
		"number": "10 000",
		"img": "/img/advantages/furniture.svg"
	},
	{
		"id": 2,
		"title": "На рынке продаж",
		"number": "20 лет",
		"img": "/img/advantages/guarantee.svg"
	},
	{
		"id": 3,
		"title": "Складских помещений",
		"number": "2 000 м",
		"img": "/img/advantages/warehouse.svg"
	}
]
const Advantages = () => {

	return (
		<section className={styles.advantages}>
			<div className="container">
				<div className={styles.advantages__content}>
					{advantagesData && advantagesData.map(({ id, title, number, img }) => (
						<OneAdv key={id} title={title} number={number} img={img} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Advantages