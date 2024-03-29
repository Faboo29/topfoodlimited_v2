'use client';

import { useState } from 'react';
import MenuIcon from '../../common/icons/MenuIcon';
import clsx from 'clsx';
import BorderCircle from '../../common/icons/BorderCircle';
import styles from './navigation.module.scss';
import { navigationItems } from '@/app/utils';
import { kumbh } from '@/app/utils/fonts';
import LinkedinIcon from '../../common/icons/Linkedin';

const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <nav id={styles.navMain} className={styles.loaded}>
      <div className={styles['nav-buttons']}>
        <a href="https://www.linkedin.com/in/vu-nguyen-topfood/" target="_blank" className={styles.contact}>
          <LinkedinIcon />
        </a>
        <div
          className={clsx(styles.navButton, active && styles.active)}
          onClick={() => setActive((prevProps) => !prevProps)}
        >
          <MenuIcon />
        </div>
      </div>
      <div className={clsx(styles.sidenavWrapper, active && styles.active, active && styles.visible)}>
        <div className={styles.sidenavWrapper__inner}>
          <div className={styles.content}>
            <BorderCircle />
            <div className={styles.navItems}>
              {navigationItems.map((item, index) => (
                <div className={styles.navItems__item} key={`nav_${index}`}>
                  <a className={kumbh.className} href={`#${item.anchor}`} onClick={() => setActive(false)}>
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
