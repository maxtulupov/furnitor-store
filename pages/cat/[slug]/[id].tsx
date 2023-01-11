import { NextPage } from 'next';
import Head from 'next/head';
import Catalog from '../../../app/components/screens/catalog/Catalog';
import nextConfig from '../../../next.config';
import { CatInfoCatalog, CatListAside, NaviLinks, OneProduct } from '../../../types';

export async function getStaticPaths(query: any) {
	const response = await fetch(`${nextConfig.env.API_URL}/catList/?slug=${query}`);
	const data = await response.json();

	const paths = data.map((cat: { slug: any; childrens: { map: () => any; }; }) => {
		return {
			params: {
        slug: cat.slug,
        id: cat.childrens.map()
      }
		}
	});

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context: { params: { slug: any; id: any; }; }) => {
  const parentSlug = context.params.slug;
	const slug = context.params.id;


	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	const response2 = await fetch(`${nextConfig.env.API_URL}/catList/?slug=${parentSlug}`);
	const data2 = await response2.json();

	const response3 = await fetch(`${nextConfig.env.API_URL}/productList/?cat=${parentSlug}`);
	const data3 = await response3.json();


  const response4 = await fetch(`${nextConfig.env.API_URL}/catList/`);
	const data4 = await response4.json();

	return {
		props: { naviLinks: data, catInfo: data2[0].childrens.filter((subCat: { childSlug: any; }) => subCat.childSlug == context.params.id)[0], productsList: data3, catList: data4, contextTest: context.params},
	}
};

interface CatPageProps {
  naviLinks: NaviLinks[],
  productsList: OneProduct[],
  catList: CatListAside[]
  catInfo: CatInfoCatalog
}

const CatPage:NextPage<CatPageProps> = (data) => {
	return (
    <>
      <Head>
        <title>{data.catInfo.title} — Сибирь мебель</title>
        <meta name="description" content={`${data.catInfo.title}. Сибирь мебель - мебель по оптовым ценам в Новосибирске.`} />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Catalog naviLinks={data.naviLinks} catInfo={data.catInfo} productsList={data.productsList} catList={data.catList} />
    </>
  )
};

export default CatPage;

