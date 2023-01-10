import { NextPage } from 'next';
import Contacts from '../../app/components/screens/contacts/Contacts';
import nextConfig from '../../next.config';
import { CatListAside, NaviLinks } from '../../types';

export const getStaticProps = async () => {
	const response = await fetch(`${nextConfig.env.API_URL}/navi`);
	const data = await response.json();

  const response2 = await fetch(`${nextConfig.env.API_URL}/catList`);
	const data2 = await response2.json();

	return {
		props: { naviLinks: data, catList: data2 }
	}
};


interface ContactsPageProps {
  naviLinks: NaviLinks[],
  catList: CatListAside[]
}

const ContactsPage:NextPage<ContactsPageProps> = (data) => {
	return <Contacts naviLinks={data.naviLinks} catList={data.catList} />
};

export default ContactsPage;