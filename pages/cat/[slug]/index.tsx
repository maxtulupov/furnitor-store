import Catalog from '../../../app/components/screens/catalog/Catalog';
import nextConfig from '../../../next.config';
import { NextPage } from 'next';
import { CatListAside, NaviLinks, OneProduct, CatInfoCatalog } from '../../../types';


export async function getStaticPaths() {
	const response = await fetch(`${nextConfig.env.API_URL}/catList/`);
	const data = await response.json();

	const paths = data.map((cat: { slug: any; }) => {
		return {
			params: {
        slug: cat.slug
      }
		}
	});

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: { params: { slug: any; }; }) => {
	const slug = context.params.slug;


	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	const response2 = await fetch(`${nextConfig.env.API_URL}/catList/?slug=${slug}`);
	const data2 = await response2.json();

	const response3 = await fetch(`${nextConfig.env.API_URL}/productList/`);
	const data3 = await response3.json();


  const response4 = await fetch(`${nextConfig.env.API_URL}/catList/`);
	const data4 = await response4.json();

	return {
		props: { naviLinks: data, catInfo: data2[0], productsList: data3, catList: data4 },
	}
};

interface CatPageProps {
  naviLinks: NaviLinks[],
  productsList: OneProduct[],
  catList: CatListAside[]
  catInfo: CatInfoCatalog
}

const CatPage:NextPage<CatPageProps> = (data) => {
	return <Catalog naviLinks={data.naviLinks} catInfo={data.catInfo} productsList={data.productsList} catList={data.catList} />
};

export default CatPage;

