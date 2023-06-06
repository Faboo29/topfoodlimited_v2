import { IAbout } from '@/types';
import Circle from '../../common/icons/Circle';
import styles from './about.module.scss';
import clsx from 'clsx';

type AboutProps = {
  content: IAbout;
};

const About = ({ content }: AboutProps) => {
  return (
    <section className={clsx('container', styles.about)}>
      <div className={styles.circleBackground}>
        <Circle classNames={[]} />
      </div>
      <div className={styles.aboutContent}>
        <h2>{content.title}</h2>

        {content.aboutContent.json.content.map((p: any, i: number) => (
          <p key={i}>{p.content[0].value}</p>
        ))}
      </div>
      <div className={styles.aboutImage}>
        <img src={content.aboutImage.url} alt={content.aboutImage.title} />
      </div>

      {/* <CustomerSection
        customers={customers}
        customerSection={customerSection}
      /> */}
    </section>
  );
};

export default About;
