import styles from "../pagi/Pagi.module.scss"
import cl from "classnames"
import Link from "next/link"

const Pagi = () => {

	return (
		<div className={cl(styles.catalogPage__pagination, styles.paginationCatalog)}>
			<Link href="" className={styles.paginationCatalog__prev}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.75 4.5L7.25 10L12.75 15.5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</Link>
			<ul className={styles.paginationCatalog__list}>
				{/* <li><a href="">1</a></li>
				<li class="active"><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li>...</li>
				<li><a href="">12</a></li> */}
			</ul>
			<Link href="" className={styles.paginationCatalog__next}>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.75 4.5L7.25 10L12.75 15.5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</Link>
		</div>
	)
}

export default Pagi
