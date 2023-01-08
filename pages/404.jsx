import nextConfig from '../next.config';
import Error404 from '../app/components/screens/error/Error404';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

  const response2 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, catList: data2 }
	}
};

const Error404Page = (data) => {
	return <Error404 naviLinks={data.naviLinks} catList={data.catList} />
};

export default Error404Page;

