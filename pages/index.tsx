import { NextPage } from 'next';
import Head from 'next/head';
import Home from '../app/components/screens/home/Home';
import nextConfig from '../next.config';
import { CatListAside, NaviLinks, OneProduct } from '../types';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	const response2 = await fetch(`${nextConfig.env.API_URL}/productList`);
	const data2 = await response2.json();

	const response3 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data3 = await response3.json();

	return {
		props: { naviLinks: data, productsList: data2, catList: data3 }
	}
};

interface HomePageProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[],
  productsList: OneProduct[],
}

const HomePage:NextPage<HomePageProps> = (data) => {
	return (
    <>
      <Head>
        <title>Сибирь мебель - мебель по оптовым ценам</title>
        <meta name="description" content="Сибирь мебель - мебель по оптовым ценам в Новосибирске." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Home naviLinks={data.naviLinks} productsList={data.productsList} catList={data.catList} />
    </>
  )
};

export default HomePage;