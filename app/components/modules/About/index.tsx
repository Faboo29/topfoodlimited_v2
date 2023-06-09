import { IAbout, ICustomer, ICustomerSection } from '@/types';
import Circle from '../../common/icons/Circle';
import styles from './about.module.scss';
import CustomerSection from './Customers';
import clsx from 'clsx';
import { kumbh } from '@/app/utils/fonts';

type AboutProps = {
  content: IAbout;
  customers: ICustomer[];
  customerSection: ICustomerSection;
};

const About = ({ content, customers, customerSection }: AboutProps) => {
  return (
    <section id="about" className={styles.about}>
      <div className={clsx('container', styles['about-inner'])}>
        <div className={styles.circleBackground}>
          <Circle classNames={[]} />
        </div>
        <div className={styles.aboutContent}>
          <h2 className={kumbh.className}>{content.title}</h2>

          {content.aboutContent.json.content.map((p: any, i: number) => (
            <p key={i}>{p.content[0].value}</p>
          ))}
        </div>
        <div className={styles.aboutImage}>
          <img src={content.aboutImage.url} alt={content.aboutImage.title} />
        </div>
      </div>

      <CustomerSection customers={customers} customerSection={customerSection} />
    </section>
  );
};

export default About;
