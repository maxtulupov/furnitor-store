import { NextPage } from "next";
import nextConfig from '../../next.config';
import { CatListAside, NaviLinks, OneProduct } from "../../types";
import Checkout from '../../app/components/screens/checkout/Checkout';

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

interface CheckoutPageProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const CheckoutPage:NextPage<CheckoutPageProps> = (data) => {
	return <Checkout naviLinks={data.naviLinks} catList={data.catList} />
};

export default CheckoutPage;

