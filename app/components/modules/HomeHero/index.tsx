import { IHero } from '@/types';
import Circles from '../../common/icons/Circles';
import styles from './homeHero.module.scss';

type HomeHeroProps = {
  content: IHero;
};

const HomeHero = ({ content }: HomeHeroProps) => {
  const titles = content.mainTitle.json.content[0].content;
  const titleTop = titles[0].value;
  const titleBottom = titles[1].value;

  return (
    <section>
      <div className={`${styles['hero-inner']}`}>
        <div className={styles['hero-left']}>
          <div className={styles['hero-left__background']} />
          <div className={styles['image-mask']}></div>
        </div>
        <div className={styles['hero-right']}>
          <div className={styles['hero-right__inner']}>
            <div className={styles.logo}>
              <img src="/assets/topfood_logo.png" alt={content.title} />
            </div>
            <div className={styles.title}>
              <h1>
                <span className={styles.top}>{titleTop} </span>{' '}
                <span className={styles.bottom}>{titleBottom}</span>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles['hero-pattern']}>
          <Circles />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
