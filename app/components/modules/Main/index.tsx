'use client';

import { APP_LOADED_COOKIE, HERO_ANIMATION_DURATION, SCROLL_DISABLED_CLASS } from '@/app/constants';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type MainProps = {
  children: React.ReactNode;
  animationDuration: number;
};

const Main = ({ children }: MainProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasAnimated = Cookies.get(APP_LOADED_COOKIE) != undefined;

    setTimeout(() => {
      if (!hasAnimated) {
        Cookies.set(APP_LOADED_COOKIE, '1', { expires: 0.5 });
      }

      document.body.classList.remove(SCROLL_DISABLED_CLASS);
      setLoaded(true);
    }, HERO_ANIMATION_DURATION);
  }, []);

  return <main className={clsx('main', !loaded && 'app-loading', loaded && 'app-loaded')}>{children}</main>;
};

export default Main;
