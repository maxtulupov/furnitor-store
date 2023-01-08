import styles from "../about/HomeAbout.module.scss"
import cl from "classnames"
import Image from "next/image"
import Link from "next/link"
import AboutImage from "../../../../assets/img/about/about-image.png"
import CertifIcon from "../../../../assets/img/icons/certificate-icon.svg"

const HomeAbout = () => {

	return (
		<section className={styles.about}>
			<div className="container">
				<div className={styles.about__content}>
					<div className={cl(styles.about__left, styles.leftAbout)}>
						<div className={styles.leftAbout__img}>
							<Image src={AboutImage} alt="Фото интерьера" />
						</div>
					</div>
					<div className={cl(styles.about__right, styles.rightAbout)}>
						<div className={styles.rightAbout__subtitle}>О компании</div>
						<div className={styles.rightAbout__title}>Фортуна Мебель — первая сеть магазинов, торгующих по оптовым ценам в розницу</div>
						<div className={styles.rightAbout__text}>
							Мы являемся дилерами Российских фабрик по производству корпусной мебели для дома, офисов, школ и детских садов, наши цены вне конкуренции. Заключаем договора, принимаем участие в аукционах, конкурсах.
						</div>
						<Link href="/about" className={styles.rightAbout__link}>Узнать больше</Link>
						<div className={cl(styles.rightAbout__certif, styles.certifRightAbout)}>
							<div className={styles.certifRightAbout__img}>
								<Image src={CertifIcon} alt="Иконка сертификата" />
							</div>
							<div className={styles.certifRightAbout__text}>
								Весь товар сертифицирован
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
