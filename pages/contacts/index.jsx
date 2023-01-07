import Contacts from '../../app/components/screens/contacts/Contacts';
import nextConfig from '../../next.config';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

	return {
		props: { naviLinks: data }
	}
};

const ContactsPage = (data) => {
	return <Contacts naviLinks={data.naviLinks} />
};

export default ContactsPage;