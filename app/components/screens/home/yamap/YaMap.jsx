import styles from "../yamap/YaMap.module.scss"
import cl from "classnames"
import Image from "next/image"
import Link from "next/link"
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

const YaMap = (props) => {
	const defaultState = {
		center: [52.046760, 113.509572],
		zoom: 13,
	};

	return (
		<section className={styles.mapArea}>
			<div className={styles.mapArea__content}>
				<div className="container">
					{
						!props.noneContent && 
							<div className={cl(styles.mapArea__info, styles.infoMapArea)}>
							<div className={styles.infoMapArea__content}>
								<div className={styles.infoMapArea__title}>Адреса магазинов в Чите</div>
								<div className={cl(styles.infoMapArea__contacts, styles.contactsInfoMap)}>
									<div className={styles.contactsInfoMap__mail}>
										<Link href="mailto:fortuna-mebel75@mail.ru">fortuna-mebel75@mail.ru</Link>
									</div>
									<div className={cl(styles.contactsInfoMap__phone, styles.phoneInfo)}>
										<Link href="tel:+7 (3022) 21-71-50" className={styles.phoneInfo__tel}>+7 (3022) 21-71-50</Link>
										<Link href="#callback" className={styles.phoneInfo__callback}>Перезвоните мне</Link>
									</div>
								</div>
							</div>
						</div>
					}
				</div>
			</div>
			<YMaps>
				<Map className={styles.mapArea__map} id="map-area-map" defaultState={defaultState} width="100%" height="100%">
					<Placemark geometry={[52.043532, 113.492058]} />
					<ZoomControl />
				</Map>
			</YMaps>
		</section>
	)
}

export default YaMap
