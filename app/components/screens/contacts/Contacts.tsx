import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import styles from "../Contacts/Contacts.module.scss"
import cl from "classnames";
import YaMap from "../home/yamap/YaMap";
import Link from "next/link";
import { FC } from 'react';
import { CatListAside, NaviLinks } from "../../../../types";

interface ContactsProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[],
  noneContent?: Boolean
}

const Contacts:FC<ContactsProps> = (props) => {
	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList}>
			<main className="main">
				<Breadcrumbs pageTitle="Контакты" />
				<section className={styles.contactsPage}>
					<div className="container">
						<h1 className={styles.contactsPage__title}>Адреса магазинов в Новосибирске</h1>
						<div className={styles.contactsPage__content}>
							<div className={cl(styles.contactsPage__item, styles.itemContactsPage)}>
								<Link href="mailto:sibir-mebel@sibmebel.ru" className={styles.itemContactsPage__link}>
									<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_14_839)">
										<path d="M1.80007 4.7002C1.56423 4.7002 1.34053 4.74979 1.13439 4.8314L11.3156 13.7279C11.7556 14.1123 12.2244 14.1128 12.6655 13.7279L22.8654 4.8314C22.6595 4.74958 22.4356 4.7002 22.1997 4.7002H1.79991H1.80007ZM0.0188331 6.24706C0.00732395 6.32888 0 6.41488 0 6.50006V18.4999C0 19.4971 0.802707 20.3 1.80009 20.3H22.1999C23.197 20.3 24 19.4973 24 18.4999V6.50006C24 6.41489 23.9927 6.32888 23.9812 6.24685L13.8466 15.0877C12.7892 16.0099 11.1915 16.0113 10.1341 15.0877L0.0188266 6.24685L0.0188331 6.24706Z" fill="#E3302C"/>
										</g>
										<defs>
										<clipPath id="clip0_14_839">
										<rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
										</clipPath>
										</defs>
									</svg>
									sibir-mebel@sibmebel.ru
								</Link>
							</div>
							<div className={cl(styles.contactsPage__item, styles.itemContactsPage)}>
								<Link href="tel:+7 (3022) 21-71-50" className={styles.itemContactsPage__link}>
									<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M22 17.4201V20.4201C22.0011 20.6986 21.9441 20.9743 21.8325 21.2294C21.7209 21.4846 21.5573 21.7137 21.3521 21.902C21.1469 22.0902 20.9046 22.2336 20.6407 22.3228C20.3769 22.412 20.0974 22.4452 19.82 22.4201C16.7428 22.0857 13.787 21.0342 11.19 19.3501C8.77382 17.8148 6.72533 15.7663 5.18999 13.3501C3.49997 10.7413 2.44824 7.77109 2.11999 4.6801C2.095 4.40356 2.12787 4.12486 2.21649 3.86172C2.30512 3.59859 2.44756 3.35679 2.63476 3.15172C2.82196 2.94665 3.0498 2.78281 3.30379 2.67062C3.55777 2.55843 3.83233 2.50036 4.10999 2.5001H7.10999C7.5953 2.49532 8.06579 2.66718 8.43376 2.98363C8.80173 3.30008 9.04207 3.73954 9.10999 4.2201C9.23662 5.18016 9.47144 6.12282 9.80999 7.0301C9.94454 7.38802 9.97366 7.77701 9.8939 8.15098C9.81415 8.52494 9.62886 8.86821 9.35999 9.1401L8.08999 10.4101C9.51355 12.9136 11.5864 14.9865 14.09 16.4101L15.36 15.1401C15.6319 14.8712 15.9751 14.6859 16.3491 14.6062C16.7231 14.5264 17.1121 14.5556 17.47 14.6901C18.3773 15.0286 19.3199 15.2635 20.28 15.3901C20.7658 15.4586 21.2094 15.7033 21.5265 16.0776C21.8437 16.4519 22.0122 16.9297 22 17.4201Z" fill="#E3302C"/>
									</svg>
									+7 (383) 77-77-77
								</Link>
							</div>
							<div className={cl(styles.contactsPage__item, styles.itemContactsPage)}>
								<button className={styles.itemContactsPage__btn}>Перезвоните мне</button>
							</div>
						</div>
					</div>
				</section>
				<YaMap noneContent={true} />
			</main>
		</Layout>
	)
};

export default Contacts;

