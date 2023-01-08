import Catalog from '../../../app/components/screens/catalog/Catalog';
import nextConfig from '../../../next.config';
import { useRouter } from 'next/router'

export async function getStaticPaths(query) {
	const response = await fetch(`${nextConfig.env.API_URL}/catList/?slug=${query}`);
	const data = await response.json();

	const paths = data.map(cat => {
		return {
			params: {
        slug: cat.slug,
        id: cat.childrens.map(child => childSlug)
      }
		}
	});
  console.log(paths);

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
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
		props: { naviLinks: data, catInfo: data2[0].childrens.filter(subCat => subCat.childSlug == context.params.id)[0], productList: data3, catList: data4, contextTest: context.params},
	}
};


const CatPage = (data) => {

  // const router = useRouter();
  // const slugTest = (router);

	return <Catalog naviLinks={data.naviLinks} catInfo={data.catInfo} productsList={data.productList} catList={data.catList} />
};

export default CatPage;

