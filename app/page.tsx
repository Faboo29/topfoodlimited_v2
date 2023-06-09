import { initializeApollo } from '@/apollo';
import { GET_HOME } from './query';
import HomeHero from './components/modules/HomeHero';
import styles from './page.module.scss';
import clsx from 'clsx';
import About from './components/modules/About';
import Advantages from './components/modules/Advantages';
import Staff from './components/modules/Staff';
import { IHomeContent } from '@/types';
import Main from './components/modules/Main';
import Contact from './components/modules/Contact';

const fetchHomeData = async (): Promise<IHomeContent | null> => {
  const apolloClient = initializeApollo();
  try {
    const { data } = await apolloClient.query({
      query: GET_HOME
    });

    return {
      hero: data.heroCollection.items[0],
      about: data.aboutCollection.items[0],
      customers: data.customersCollection.items,
      customerSection: data.customerSectionCollection.items[0],
      advantages: data.advantagesCollection.items[0],
      staffSection: data.staffSectionCollection.items[0],
      staffs: data.staffCollection.items,
      contact: data.contactCollection.items[0]
    };
  } catch (error) {
    console.error('fetchHomeData error: ', error);
    return null;
  }
};

export default async function Home() {
  const content = await fetchHomeData();

  if (!content) {
    return null;
  }

  return (
    <Main animationDuration={content.hero.animationDuration}>
      <HomeHero content={content.hero} />
      <div className={clsx(styles.primary, styles.loaded)}>
        <About content={content.about} customers={content.customers} customerSection={content.customerSection} />
        <Advantages content={content.advantages} />
        <Staff content={content.staffSection} staffs={content.staffs} />
        <Contact content={content.contact} />
      </div>
    </Main>
  );
}
