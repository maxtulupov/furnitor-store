import { NextPage } from "next";
import Head from "next/head";
import Cart from "../../app/components/screens/cart/Cart";
import nextConfig from '../../next.config';
import { CatListAside, NaviLinks, OneProduct } from "../../types";

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

interface CartPageProps {
  naviLinks: NaviLinks[],
  productsList: OneProduct[],
  catList: CatListAside[]
}

const CartPage:NextPage<CartPageProps> = (data) => {
	return (
    <>
      <Head>
        <title>Корзина — Сибирь мебель</title>
        <meta name="description" content="Корзина. Сибирь мебель - мебель по оптовым ценам в Новосибирске." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Cart naviLinks={data.naviLinks} productsList={data.productsList} catList={data.catList} />
    </>
  )
};

export default CartPage;

