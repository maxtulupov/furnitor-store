import Link from "next/link"
import { FC, useEffect, useState, useRef } from "react"
import logo from "../../assets/img/logo.svg"
import Image from "next/image"
import styles from "../header/Header.module.scss"
import cl from "classnames"
import SearchIcon from "../ui/icons/SearchIcon"
import { NaviLinks } from "../../../types"

interface HeaderProps {
  naviLinks: NaviLinks[],
  isCatalogOpen: Boolean,
  setIsCatalogOpen: (arg0: Boolean) => void
}

const Header:FC<HeaderProps> = (props) => {
	const naviLinks = props.naviLinks;

	const [offset, setOffset] = useState<Number>(0);
	const [isHeaderShow, setIsHeaderShow] = useState<Boolean>(false);
	const timer = useRef(null);
	const headerShowTimer:number = 500;

	const [menuOpen, setMenuOpen] = useState<Boolean>(false);

	useEffect(() => {

		const onScroll = (e) => {	
			clearTimeout(timer.current);

			if (window.scrollY >= 200) {
				if (window.scrollY > offset) {
					setIsHeaderShow(false);
				} else {
					setIsHeaderShow(true);
				}
			} else {
				setIsHeaderShow(true);
			}

			timer.current = setTimeout(() => {
				!isHeaderShow ? setIsHeaderShow(!isHeaderShow) : null
			}, headerShowTimer);

			setOffset(window.scrollY);	
		};

			setTimeout(() => {
				let windowScroll = new Event("windowScroll");
				window.addEventListener("scroll", () => document.dispatchEvent(windowScroll));
			}, 0);

			document.removeEventListener('windowScroll', onScroll);
			document.addEventListener('windowScroll', onScroll, { passive: true });
			return () => {
				document.removeEventListener('windowScroll', onScroll)
				// window.removeEventListener('scroll', () => document.dispatchEvent(windowScroll))
			};
	}, [isHeaderShow, timer, headerShowTimer, offset]);

	return (
		<header className={cl(styles.header, offset >= 200 ? styles._headerScroll : null, isHeaderShow && offset >= 20 ? styles._headerShow : null)} data-scroll-show data-scroll="200">
			<div className="container">
				<div className={styles.header__content}>
					<div className={cl(styles.header__menu, styles.menu)}>
						<button type="button" onClick={() => setMenuOpen(!menuOpen)} className={cl(styles.menu__icon, styles.iconMenu, menuOpen ? styles.burgerActive : null)} data-burger><span></span></button>
						<nav className={cl(styles.menu__body, menuOpen ? styles.menuActive : null)} data-menu>
							<ul className={styles.menu__list}>
								{naviLinks && naviLinks.slice(0, 3).map(({id, title, path}) => (
									<li key={id} className={styles.menu__item}><Link href={path} className={styles.menu__link}>{title}</Link></li>
								))}
							</ul>
						</nav>
					</div>
					<Link href="/" className={styles.header__logo}>
						<Image src={logo} alt="Логотип" />
					</Link>
					<div className={cl(styles.header__phone, styles.phoneHeader)}>
						<Link href="tel:+7 (383) 77-77-77" className={styles.phoneHeader__tel}>
							+7 (383) 77-77-77
						</Link>
						<div className={styles.phoneHeader__callback} data-popup>
							Перезвоните мне
						</div>
					</div>
					<div className={cl(styles.header__search, styles.searchHeader)}>
						<form action="" className={styles.searchHeader__form}>
							<div className={styles.searchHeaderInput}>
								<input type="text" id="" placeholder="Прихожая «Сити»"></input>
							</div>
							<button type="submit" className={styles.searchHeader__button}>
								<SearchIcon width={20} height={20} />
							</button>
							<ul className={styles.searchHeaderList}>
								{/* <li><a href="">Прихожая «Граф»</a></li>
								<li><a href="">Прихожая «Сити»</a></li>
								<li><a href="">Прихожая «Розолина 1»</a></li>
								<li><a href="">Прихожая «Лира» (БТС)</a></li>
								<li><a href="">Прихожая «Варда» (БТС)</a></li> */}
							</ul>
						</form>
						<div className={styles.searchHeader__open}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M17.5 17.5L13.875 13.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
					</div>
					<Link href="/cart" className={cl(styles.header__car, styles.cartHeader)}>
						<div className={styles.cartHeader__img}>
							<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M44.9915 10.263C44.12 9.1492 42.7636 8.47117 41.3593 8.47117H11.8653L10.945 4.88726C10.4123 2.80493 8.57188 1.35194 6.44121 1.35194H1.50125C0.677979 1.35194 0 2.02995 0 2.85319C0 3.67646 0.678005 4.35444 1.50125 4.35444H6.44121C7.16753 4.35444 7.79726 4.83888 7.99115 5.56519L13.8996 29.1022C14.4324 31.1846 16.2728 32.6376 18.4035 32.6376H37.7271C39.8581 32.6376 41.7468 31.1846 42.2309 29.1022L45.8632 14.1858C46.202 12.8297 45.9115 11.3771 44.9913 10.263H44.9915ZM42.9092 13.5078L39.2769 28.4243C39.0834 29.1506 38.4537 29.6351 37.727 29.6351H18.4034C17.6771 29.6351 17.0473 29.1506 16.8534 28.4243L12.6401 11.5222H41.3592C41.8436 11.5222 42.3277 11.7644 42.6183 12.1519C42.9091 12.5394 43.0544 13.0238 42.9092 13.5079L42.9092 13.5078Z" fill="#1D1D1D"/>
								<path d="M19.4204 34.5749C16.6597 34.5749 14.3838 36.8512 14.3838 39.6115C14.3838 42.3722 16.66 44.6481 19.4204 44.6481C22.181 44.6484 24.4573 42.3722 24.4573 39.6115C24.4573 36.8512 22.181 34.5749 19.4204 34.5749ZM19.4204 41.5972C18.3065 41.5972 17.4346 40.7257 17.4346 39.6115C17.4346 38.4977 18.3062 37.6258 19.4204 37.6258C20.5342 37.6258 21.4061 38.4973 21.4061 39.6115C21.4061 40.677 20.4858 41.5972 19.4204 41.5972Z" fill="#1D1D1D"/>
								<path d="M36.0804 34.5749C33.3197 34.5749 31.0438 36.8512 31.0438 39.6115C31.0438 42.3722 33.32 44.6481 36.0804 44.6481C38.8411 44.6481 41.1169 42.3718 41.1169 39.6115C41.0686 36.8512 38.8411 34.5749 36.0804 34.5749ZM36.0804 41.5972C34.9666 41.5972 34.0947 40.7257 34.0947 39.6115C34.0947 38.4977 34.9662 37.6258 36.0804 37.6258C37.1942 37.6258 38.0661 38.4973 38.0661 39.6115C38.0661 40.677 37.1459 41.5972 36.0804 41.5972Z" fill="#1D1D1D"/>
							</svg>
							<span className={styles.count}>2</span>
						</div>
						<div className={styles.cartHeader__text}>
							<div className={styles.cartHeader__title}>
								Корзина:
							</div>
							<div className={styles.cartHeader__summ}>
								<span>34 600</span> ₽
							</div>
						</div>
					</Link>
				</div>
				<div className={styles.header__mobile}>
					<div className={styles.header__catalogBtn} onClick={() => props.setIsCatalogOpen(!props.isCatalogOpen)}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="#E3302C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M17.5001 2.5H11.6667V8.33333H17.5001V2.5Z" stroke="#E3302C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M17.5001 11.6667H11.6667V17.5H17.5001V11.6667Z" stroke="#E3302C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z" stroke="#E3302C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						Каталог
					</div>
					<div className={cl(styles.searchHeader__open, styles.searchHeader__open__mobile)}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M17.5 17.5L13.875 13.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header