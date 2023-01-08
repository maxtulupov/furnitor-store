import styles from "./Advantages.module.scss"
import cl from "classnames"
import Image from "next/image"
import { FC, } from 'react';

interface OneAdvProps {
  title: string,
  number: string,
  img: string
}

const OneAdv: FC = ({ title, number, img }: OneAdvProps) => {

	return (
		<div className={cl(styles.advantages__item, styles.itemAdvantages)}>
			<div className={styles.itemAdvantages__text}>
				<div className={styles.itemAdvantages__number}>{number}</div>
				<div className={styles.itemAdvantages__title}>{title}</div>
			</div>
			<div className={styles.itemAdvantages__img}>
				<Image src={img} width={44} height={44} alt={title} />
			</div>
		</div>
	)
}

export default OneAdv