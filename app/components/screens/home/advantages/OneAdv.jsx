import styles from "./Advantages.module.scss"
import cl from "classnames"
import React from "react"
import Image from "next/image"

const OneAdv = (props) => {

	return (
		<div className={cl(styles.advantages__item, styles.itemAdvantages)}>
			<div className={styles.itemAdvantages__text}>
				<div className={styles.itemAdvantages__number}>{props.number}</div>
				<div className={styles.itemAdvantages__title}>{props.title}</div>
			</div>
			<div className={styles.itemAdvantages__img}>
				<Image src={props.img} width={44} height={44} alt={props.title} />
			</div>
		</div>
	)
}

export default OneAdv