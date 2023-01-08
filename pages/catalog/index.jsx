// import Home from '../app/components/screens/home/Home';
import nextConfig from '../../next.config';
import Catalog from '../../app/components/screens/catalog/Catalog';

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

const CatalogPage = (data) => {
	return <Catalog naviLinks={data.naviLinks} productsList={data.productsList} catList={data.catList} />
};

export default CatalogPage;

