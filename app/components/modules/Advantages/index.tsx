import { IAdvantages } from '@/types';
import Circle from '../../common/icons/Circle';
import styles from './advantages.module.scss';

type AdvantagesProps = {
  content: IAdvantages;
};

const Advantages = ({ content }: AdvantagesProps) => {
  return (
    <section className={styles.advantages}>
      <div className={styles.circleBackground}>
        <Circle classNames={['']} />
      </div>
      <div className={`container ${styles.advantagesWrapper}`}>
        <div className={styles.content}>
          <h2>{content.title}</h2>
          {content.description.json.content.map((p: any, i: number) => (
            <p key={i}>{p.content[0].value}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
