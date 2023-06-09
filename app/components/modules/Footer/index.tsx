import { navigationItems } from '@/app/utils';
import styles from './footer.module.scss';
import Circles from '../../common/icons/Circles';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2>Site map</h2>
        <ul className={styles['site-map']}>
          {navigationItems.map((nav, index) => (
            <li key={`site-map-${index}`}>
              <a href={`#${nav.anchor}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.copyright}>&copy; Topfood limited</div>
      </div>
      <div className={styles.patterns}>
        <Circles />
      </div>
    </footer>
  );
};

export default Footer;
