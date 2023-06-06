'use client';

import { useState } from 'react';
import MenuIcon from '../../common/icons/MenuIcon';
import CloseMenuIcon from '../../common/icons/CloseMenuIcon';
import clsx from 'clsx';
import BorderCircle from '../../common/icons/BorderCircle';
import styles from './navigation.module.scss';

const Navigation = () => {
  const navigationItems = [
    {
      title: 'Services',
      anchor: 'services'
    },
    {
      title: 'About',
      anchor: 'about'
    },
    {
      title: 'Advantages',
      anchor: 'advantages'
    },
    {
      title: 'Contact us',
      anchor: 'contact'
    }
  ];

  const [active, setActive] = useState(false);

  return (
    <nav id={styles.navMain} className={styles.loaded}>
      <div
        className={clsx(styles.navButton, active && styles.active)}
        onClick={() => setActive((prevProps) => !prevProps)}
      >
        <MenuIcon />
      </div>
      <div
        className={clsx(
          styles.sidenavWrapper,
          active && styles.active,
          active && styles.visible
        )}
      >
        <div className={styles.sidenavWrapper__inner}>
          <div className={styles.content}>
            <BorderCircle />
            <div className={styles.navItems}>
              {navigationItems.map((item, index) => (
                <div className={styles.navItems__item} key={`nav_${index}`}>
                  <a href={item.anchor}>{item.title}</a>
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
