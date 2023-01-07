import About from '../../app/components/screens/about/About';
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

const AboutPage = (data) => {
	return <About naviLinks={data.naviLinks} productsList={data.productsList} />
};

export default AboutPage;

