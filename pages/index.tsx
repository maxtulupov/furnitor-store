import { NextPage } from 'next';
import Home from '../app/components/screens/home/Home';
import nextConfig from '../next.config';

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

const HomePage:NextPage = (data: any) => {
	return <Home naviLinks={data.naviLinks} productsList={data.productsList} catList={data.catList} />
};

export default HomePage;

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/product`)
//   const data = await res.json()
//   return {
//     props: {product} 
//   }
// }
