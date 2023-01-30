import Link from "next/link"
import { FC } from 'react';
import logo from "../../assets/img/logo.svg"
import Image from "next/image"
import styles from "../aside/Aside.module.scss"
import cl from "classnames"
import AsideMenuItem from "./AsideMenuItem"
import { CatListAside } from "../../../types";

interface AsideProps {
  catList: CatListAside[],
  isCatalogOpen: Boolean,
  setIsCatalogOpen: (arg0: Boolean) => void,
}

const Aside:FC<AsideProps> = ({isCatalogOpen, setIsCatalogOpen, catList}) => {

	return (
		<div className={cl(styles.wrapperAside, isCatalogOpen ? styles.catalogActive : null)}>
			<aside className={styles.mainAside}>
				<div className={styles.mainAside__closeBtn} onClick={() => setIsCatalogOpen(!isCatalogOpen)}></div>
				<Link href="/" className={styles.mainAside__logo}>
					<Image src={logo} alt="Логотип" priority={true} sizes="180" />
				</Link>
				<div className={cl(styles.mainAside__menu, styles.leftMenu)}>
					<ul className={styles.leftMenu__list}>
						{catList && catList.map(({ id, title, slug, icon, childrens }) => (	
							<AsideMenuItem key={id} id={id} childrens={childrens} title={title} slug={slug} icon={icon} />
						))}
					</ul>
				</div>
			</aside>
		</div>
	)
}

export default Aside