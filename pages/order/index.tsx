import { NextPage } from "next";
import Head from "next/head";
import Order from "../../app/components/screens/order/Order";
import nextConfig from '../../next.config';
import { CatListAside, NaviLinks } from "../../types";

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

  const response2 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, catList: data2 }
	}
};

interface OrderPageProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const OrderPage:NextPage<OrderPageProps> = (data) => {
	return (
    <>
      <Head>
        <title>Заказ оформлен — Сибирь мебель</title>
        <meta name="description" content="Заказ оформлен. Сибирь мебель - мебель по оптовым ценам в Новосибирске." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Order naviLinks={data.naviLinks} catList={data.catList} />
    </>
  )
};

export default OrderPage;

