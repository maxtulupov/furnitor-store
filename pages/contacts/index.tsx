import { NextPage } from 'next';
import Head from 'next/head';
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
	return (
    <>
      <Head>
        <title>Контакты — Сибирь мебель</title>
        <meta name="description" content="Контакты. Сибирь мебель - мебель по оптовым ценам в Новосибирске." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Contacts naviLinks={data.naviLinks} catList={data.catList} />
    </>
  )
};

export default ContactsPage;