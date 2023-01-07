import Link from "next/link"
import { React, useState } from "react"
import logo from "../../assets/img/logo.svg"
import Image from "next/image"
import styles from "../aside/Aside.module.scss"
import cl from "classnames"
import AsideMenuItem from "./asideMenuItem"

const catalogNavs = [
	{
		id: 1,
		title: "Офисная мебель",
		path: "/catalog/ofis-mebel",
		// icon: "/app/assets/img/left-menu/catalog-icon_1.svg",
		childrens: [
			{
				id: 11,
				title: "Диваны",
				path: "/catalog/ofis-mebel/divani"
			},
			{
				id: 12,
				title: "Столы",
				path: "/catalog/ofis-mebel/tables"
			}
		]
	},
	{
		id: 2,
		title: "Мебель для дома",
		path: "/catalog/home-mebel",
		// icon: "../../assets/img/catalog/catalog-img-02.jpg",
		childrens: [
			{
				id: 22,
				title: "Диваны",
				path: "/catalog/home-mebel/divani"
			},
			{
				id: 23,
				title: "Столы",
				path: "/catalog/home-mebel/tables"
			}
		]
	},
	{
		id: 3,
		title: "Мягкая мебель",
		path: "/catalog/myg-mebel",
		// icon: "../../assets/img/catalog/catalog-img-03.jpg",
	}
];

const Aside = ({isCatalogOpen, setIsCatalogOpen}) => {

	return (
		<div className={cl(styles.wrapperAside, isCatalogOpen ? styles.catalogActive : null)}>
			<aside className={styles.mainAside}>
				<div className={styles.mainAside__closeBtn} onClick={() => setIsCatalogOpen(!isCatalogOpen)}></div>
				<Link href="/" className={styles.mainAside__logo}>
					<Image src={logo} alt="Логотип" />
				</Link>
				<div className={cl(styles.mainAside__menu, styles.leftMenu)}>
					<ul className={styles.leftMenu__list}>
						{catalogNavs && catalogNavs.map(({ id, title, path, icon, childrens }) => (	
							<AsideMenuItem key={id} childrens={childrens} title={title} path={path} icon={icon} />
						))}
					</ul>
				</div>
			</aside>
		</div>
	)
}

export default Aside