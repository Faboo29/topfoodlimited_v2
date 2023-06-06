'use client';

import { APP_LOADED_STORAGE_KEY } from '@/app/constants';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type MainProps = {
  children: React.ReactNode;
  animationDuration: number;
};

const Main = ({ children, animationDuration = 2 }: MainProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);

  return (
    <main
      className={clsx('main', !loaded && 'app-loading', loaded && 'app-loaded')}
    >
      {children}
    </main>
  );
};

export default Main;
