import Cart from "../../app/components/screens/cart/Cart";
import nextConfig from '../../next.config';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	const response2 = await fetch(`${nextConfig.env.API_URL}/productList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, productsList: data2 }
	}
};

const CartPage = (data) => {
	return <Cart naviLinks={data.naviLinks} productsList={data.productsList} />
};

export default CartPage;

