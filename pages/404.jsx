import nextConfig from '../next.config';
import Error404 from '../app/components/screens/error/Error404';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	return {
		props: { naviLinks: data}
	}
};

const Error404Page = (data) => {
	return <Error404 naviLinks={data.naviLinks} />
};

export default Error404Page;

