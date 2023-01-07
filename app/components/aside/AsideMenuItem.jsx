import Link from "next/link"
import { React, useState } from "react"
import Image from "next/image"
import styles from "../aside/Aside.module.scss"
import cl from "classnames"
import catalogImg from "../../assets/img/left-menu/catalog-icon_1.svg"


const AsideMenuItem = ({ id, childrens, path, title }) => {

	const [isOpen, setIsOpen] = useState(false);

	const handleSubMenu = (event) => {
		event.preventDefault();

		setIsOpen(!isOpen);
	}

	return (
		<li className={cl(styles.leftMenu__item, childrens ? styles.parentItem : null, isOpen ? styles._active : null)}>
			<Link href={path} onClick={childrens ? handleSubMenu : null}>
				<span className={styles.leftMenu__img}>
					<Image src={catalogImg} alt={title} width={40} height={40} />
				</span>
				{title}
			</Link>
			{childrens && <ul className={styles.childUl}>
				{childrens.map(({ id, title, path }) => (
					<li key={id}><Link href={path}>{title}</Link></li>
				))}
			</ul>}
		</li>
	)
}

export default AsideMenuItem