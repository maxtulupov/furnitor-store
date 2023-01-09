import styles from "../breadcrumbs/Breadcrumbs.module.scss"
import Link from "next/link"
import { FC } from 'react';

interface BreadcrumbsProps {
  pageTitle: string,
}

const Breadcrumbs:FC<BreadcrumbsProps> = ({pageTitle}) => {

	return (
		<section className={styles.breadcrumbs}>
			<div className="container">
				<ul className={styles.breadcrumbs__list}>
					<li className="breadcrumbs__item">
						<Link href="/">Главная</Link>
					</li>
					{/* <li class="breadcrumbs__item"><a href="">Офисная мебель</a></li>
					<li class="breadcrumbs__item"><a href="">Столы</a></li> */}
					<li className="breadcrumbs__item active">{pageTitle}</li>
				</ul>
			</div>
		</section>
	)
}

export default Breadcrumbs
