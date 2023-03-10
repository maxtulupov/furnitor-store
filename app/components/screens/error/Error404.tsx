import styles from "../error/Error404.module.scss"
import Layout from "../../layout/Layout"
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs"
import { CatListAside, NaviLinks } from '../../../../types';
import { FC } from 'react';

interface Error404Props {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const Error404:FC<Error404Props> = (props) => {
	return (
		<Layout naviLinks={props.naviLinks} catList={props.catList}>
			<main className="main">
        <Breadcrumbs pageTitle="Ошибка 404" />
				<section className={styles.errorSection}>
          <div className="container">
            <h1 className={styles.errorSection__h1}>Ошибка 404 <br/> Страница не найдена</h1>
          </div>
        </section>
			</main>
		</Layout>
	)
}

export default Error404