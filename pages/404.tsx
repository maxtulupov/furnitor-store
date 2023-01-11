import nextConfig from '../next.config';
import Error404 from '../app/components/screens/error/Error404';
import { NextPage } from 'next';
import { CatListAside, NaviLinks } from '../types';
import Head from 'next/head';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

  const response2 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, catList: data2 }
	}
};

interface Error404PageProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const Error404Page:NextPage<Error404PageProps> = (data) => {
	return (
    <>
      <Head>
        <title>Страница не найдена — Сибирь мебель</title>
        <meta name="description" content="Страница не найдена. Сибирь мебель - мебель по оптовым ценам в Новосибирске." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Error404 naviLinks={data.naviLinks} catList={data.catList} />
    </>
  )
};

export default Error404Page;

