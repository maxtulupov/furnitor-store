import React from "react"
import styles from "../footer/Footer.module.scss"
import Link from "next/link"
import logo from "../../assets/img/logo.svg"
import Image from "next/image"
import cl from "classnames"
import devLogo from "../../assets/img/dev.svg"
import { FC } from 'react';
import { NaviLinks } from "../../../types"

interface FooterProps {
  naviLinks: NaviLinks[],
}

const Footer:FC<FooterProps> = (props) => {
	const naviLinks = props.naviLinks;
	return (
		<footer className={styles.footer}>
			<div className={cl("container", styles.footer__content)}>
			<Link href="/" className={styles.footer__logo}>
			  <Image src={logo} alt="Логотип" />
			</Link>
				<div className={cl(styles.footer__menu, styles.menuFooter)}>
					<ul className={styles.menuFooter__list}>
						{naviLinks && naviLinks.map(({id, title, path}) => (
							<li key={id}><Link href={path}>{title}</Link></li>
						))}
					</ul>
				</div>
				<div className={styles.footer__right}>
					<Link href="/policy" className={styles.footer__policy}>Политика конфиденциальности</Link>
					<Link href="/" className={styles.footer__developer}>
						Разработка сайта —
						<Image src={devLogo} alt="ForestWeb" />
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer