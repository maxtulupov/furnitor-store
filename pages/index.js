import Home from '../app/components/screens/home/Home';
import nextConfig from '../next.config';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	const response2 = await fetch(`${nextConfig.env.API_URL}/productList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, productsList: data2 }
	}
};

const HomePage = (data) => {
	return <Home naviLinks={data.naviLinks} productsList={data.productsList} />
};

export default HomePage;

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/product`)
//   const data = await res.json()
//   return {
//     props: {product} 
//   }
// }
