'use client';

import { APP_LOADED_STORAGE_KEY, HERO_ANIMATION_DURATION, SCROLL_DISABLED_CLASS } from '@/app/constants';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type MainProps = {
  children: React.ReactNode;
  animationDuration: number;
};

const Main = ({ children }: MainProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasAnimated = window.localStorage.getItem(APP_LOADED_STORAGE_KEY) != null;
    const bodyElement = document.body;

    if (hasAnimated) {
      bodyElement.classList.remove(SCROLL_DISABLED_CLASS);
    }

    setTimeout(() => {
      if (!hasAnimated) {
        window.localStorage.setItem(APP_LOADED_STORAGE_KEY, 'true');
      }

      bodyElement.classList.remove(SCROLL_DISABLED_CLASS);
      setLoaded(true);
    }, HERO_ANIMATION_DURATION);
  }, []);

  return <main className={clsx('main', !loaded && 'app-loading', loaded && 'app-loaded')}>{children}</main>;
};

export default Main;
