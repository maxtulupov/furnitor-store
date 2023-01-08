import Link from "next/link"
import { useState, FC } from 'react';
import Image from "next/image"
import styles from "../aside/Aside.module.scss"
import cl from "classnames"
import catalogImg from "../../assets/img/left-menu/catalog-icon_1.svg"
import { CatListAside } from "../../../types";


const AsideMenuItem:FC<CatListAside> = ({ id, childrens, slug, title }) => {

	const [isOpen, setIsOpen] = useState<Boolean>(false);

	const handleSubMenu = (event: any) => {
		event.preventDefault();

		setIsOpen(!isOpen);
	}

	return (
		<li className={cl(styles.leftMenu__item, childrens ? styles.parentItem : null, isOpen ? styles._active : null)}>
			<Link href={`/cat/${slug}`} onClick={childrens ? handleSubMenu : null}>
				<span className={styles.leftMenu__img}>
					<Image src={catalogImg} alt={title} width={40} height={40} />
				</span>
				{title}
			</Link>
			{childrens && <ul className={styles.childUl}>
				{childrens.map(({ id, title, childSlug }) => (
					<li key={id}><Link href={`/cat/${slug}/${childSlug}`}>{title}</Link></li>
				))}
			</ul>}
		</li>
	)
}

export default AsideMenuItem