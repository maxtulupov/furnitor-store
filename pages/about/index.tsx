import { NextPage } from 'next';
import Head from 'next/head';
import About from '../../app/components/screens/about/About';
import nextConfig from '../../next.config';
import { CatListAside, NaviLinks } from '../../types';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

  const response2 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, catList: data2}
	}
};

interface AboutPageProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const AboutPage:NextPage<AboutPageProps> = (data) => {
	return (
    <>
      <Head>
        <title>О компании — Сибирь мебель</title>
        <meta name="description" content="О Компании. Сибирь мебель - мебель по оптовым ценам в Новосибирске." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <About naviLinks={data.naviLinks} catList={data.catList} />
    </>
  )
};

export default AboutPage;

