import { NextPage } from 'next';
import Head from 'next/head';
import Product from '../../app/components/screens/product/Product';
import nextConfig from '../../next.config';
import { CatListAside, NaviLinks, OneProduct } from '../../types';

export async function getStaticPaths() {
	const response = await fetch(`${nextConfig.env.API_URL}/productList/`);
	const data = await response.json();

	const paths = data.map(product => {
		return {
			params: {id: product.slug}
		}
	});

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
	const slug = context.params.id;


	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	const response2 = await fetch(`${nextConfig.env.API_URL}/productList/?slug=${slug}`);
	const data2 = await response2.json();

	const response3 = await fetch(`${nextConfig.env.API_URL}/productList/`);
	const data3 = await response3.json();

  const response4 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data4 = await response4.json();

	return {
		props: { naviLinks: data, productInfo: data2[0], productList: data3, catList: data4 }
	}
};

interface ProductPageProps {
  naviLinks: NaviLinks[],
  productList: OneProduct[],
  catList: CatListAside[],
  productInfo: OneProduct
}

const ProductPage:NextPage<ProductPageProps> = (data) => {
	return (
    <>
      <Head>
        <title>{data.productInfo.title} — Сибирь мебель</title>
        <meta name="description" content={`${data.productInfo.title}. Сибирь мебель - мебель по оптовым ценам в Новосибирске.`} />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Product naviLinks={data.naviLinks} productInfo={data.productInfo} productList={data.productList} catList={data.catList} />
    </>
  )
};

export default ProductPage;

