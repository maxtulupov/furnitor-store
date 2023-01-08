import Layout from "../../layout/Layout";
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs";
import styles from "../About/About.module.scss"
import cl from "classnames";
import YaMap from "../home/yamap/YaMap";
import aboutImg from "../../../assets/img/about/about-image1.png"
import Image from "next/image";
import Link from "next/link";
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-thumbnail.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const About = (props) => {
	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList}>
			<main className="main">
				<Breadcrumbs pageTitle="О компании" />
				<section className={styles.singlePage}>
					<div className={cl(styles.singlePage__row, 'container')}>
						<div className={styles.singlePage__content}>
							<h1 className={styles.singlePage__title}>О компании</h1>
							<Image src={aboutImg} alt="О компании" />
							<p>Мы рады приветствовать вас на страницах нашего сайта! Фортуна Мебель — первая в нашем городе сеть магазинов, торгующих по оптовым ценам в розницу. Так как мы являемся дилерами Российских фабрик по производству корпусной мебели для дома, офисов,школ и детских садов, наши цены вне конкуренции. Весь товар сертифицирован. Заключаем договора, принимаем участие в аукционах, конкурсах.</p>
							<p>Наши основные поставщики: Волжск, Пенза, Белгород, Ульяновск, Новосибирск, Иркутск, Москва — достойно зарекомендовали себя качеством выпускаемой продукции. Доставка бесплатная по городу до подъезда, услуга подъёма мебели на этаж оплачивается отдельно.Имеется услуга сборки и установки мебели! Для оптовиков специальные предложения и дополнительные скидки. Для организаций бесплатная доставка и сборка, персональный менеджер.</p>
							<hr />
							<h3>Раздел включает модели для персонала:</h3>
							<ul>
								<li><b>Прямые.</b> Используются для работы с бумагами и приёма клиентов, для экономии площади объединяются в несколько рабочих мест;</li>
								<li><b>Угловые.</b> На Г-образных офисных столах хватит места для установки монитора, клавиатуры и другого оборудования, канцелярии и документов — это удобная рабочая станция, где под рукой все необходимое. Модели подходят для работы с важными бумагами — в конструкции предусмотрены тумбы с замком;</li>
								<li><b>С эргономичной столешницей.</b> Рабочая поверхность имеет увеличенную площадь, а также вырез с правой или левой стороны, чтобы не приходилось тянуться за нужными предметами.</li>
							</ul>
							<hr />
							<h3>Хотите всю жизнь наслаждаться Италией?</h3>
							<ol>
								<li>Магазин итальянской брендовой мебели Степаччо распродаёт коллекцию диванов прошлого года с огромными скидками</li>
								<li>Это диваны из натуральной кожи с уникальным дизайном и ортопедическим действием (есть даже поддержка шеи и поясницы). Вы наконец-то поймёте, что такое настоящий отдых. А соседи сойдут с ума от зависти.</li>
								<li>Все ещё хотите поехать в Европу по горящей путёвке? Поездка заканчивается через две недели, а с диваном Степаччо частичка итальянского отдыха остаётся с вами годами. На акции осталось всего 12 моделей. Позвоните <Link href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</Link> и менеджер зарезервирует скидку за вами.</li>
							</ol>
							<hr />
							<blockquote>
								<h4>Дорогие наши покупатели!</h4>
								<p>Мы рады приветствовать вас на страницах нашего сайта! Фортуна Мебель — первая в нашем городе сеть магазинов, торгующих по оптовым ценам в розницу.</p>
							</blockquote>
							<hr />
							<h2>Фотогалерея</h2>
							<LightGallery
								// onInit={onInit}
								speed={500}
								plugins={[lgThumbnail, lgZoom]}
								elementClassNames={styles.singlePage__gallery}
							>
								{props.naviLinks && props.naviLinks.map(({id, title, path, childrens, gallery}) => (
									gallery ? gallery.map(({id, img}) => (
										<Link key={id} href={img}>
											<Image src={img} alt="Gallery image" fill />
										</Link>
									)) : null
								))}
							</LightGallery>
							<hr />
							<h2>Стоимость работ</h2>
							<table>
								<tbody>
								<tr>
								<th>Название услуги</th>
								<th>Стоимость</th>
								</tr>
								<tr>
								<td>Сборка корпусной мебели</td>
								<td>1 200 руб.</td>
								</tr>
								<tr>
								<td>Сборка распашного шкафа с одной дверью</td>
								<td>690 руб.</td>
								</tr>
								<tr>
								<td>Сборка угловых шкафов</td>
								<td>1 290 руб.</td>
								</tr>
								<tr>
								<td>Сборка встроенного шкафа-купе (на старое место после ремонта)</td>
								<td>1 590 руб.</td>
								</tr>
								<tr>
								<td>Сборка комбинированного комода</td>
								<td>1 390 руб.</td>
								</tr>
								<tr>
								<td>Сборка письменного стола с двумя тумбами</td>
								<td>1 590 руб.</td>
								</tr>
								</tbody>
							</table>
						</div>
						<aside className={cl(styles.singlePage__sidebar, styles.sidebar)}>
							<div className={cl(styles.sidebar__nav, styles.navSidebar)}>
								<ul className={styles.navSidebar__list}>
									{props.naviLinks && props.naviLinks.map(({id, title, path, childrens}) => (
										childrens ? childrens.map(({id, title, path, children}) => (
											<li key={id}><Link href={path}>{title}</Link></li>
										)) : null
									))}
								</ul>
							</div>
						</aside>
					</div>
				</section>
				<YaMap />
			</main>
		</Layout>
	)
};

export default About;

