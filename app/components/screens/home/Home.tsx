import Link from "next/link"
import { FC, useState } from "react"
import styles from "../home/Home.module.scss"
import topBannerImg from "../../../assets/img/top-banner/top-banner-1.png"
import topBannerImgMobile from "../../../assets/img/top-banner/top-banner-1__mob.png"
import Image from "next/image"
import Advantages from "./advantages/Advantages"
import Popular from "./popular/Popular"
import Layout from "../../layout/Layout"
import HomeAbout from "./about/HomeAbout"
import YaMap from "./yamap/YaMap"
import { CatListAside, IsModal, NaviLinks, OneProduct } from '../../../../types';

interface HomeProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[],
  productsList: OneProduct[],
}

const Home:FC<HomeProps> = (props) => {
	const [isModal, setModal] = useState<IsModal>({ open: false, id: 0, title: 'kek', slug: 'test', price: '9999', images: [], img: '/img/about/about-image.png'});

	return (
		<Layout naviLinks={props.naviLinks} isModal={isModal} setModal={setModal} catList={props.catList}>
			<main className="main">
				<section className={styles.topBanner}>
					<div className="container">
						<Link href="" className={styles.topBannerItem}>
							<Image src={topBannerImg} alt="TopBanner" />
						</Link>
					</div>
				</section>
				<Advantages />
				<Popular productsList={props.productsList} isModal={isModal} setModal={setModal} />
				<HomeAbout />
				<YaMap />
			</main>
		</Layout>
	)
}

export default Home