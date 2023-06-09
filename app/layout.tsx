import { cookies } from 'next/headers';
import clsx from 'clsx';
import Providers from './Providers';
import Navigation from './components/modules/Navigation';
import { APP_LOADED_COOKIE, SCROLL_DISABLED_CLASS } from './constants';
import Footer from './components/modules/Footer';
import './styles/global.scss';
import { roboto } from './utils/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasAnimated = cookies().get(APP_LOADED_COOKIE) != undefined;

  return (
    <html lang="en">
      <body className={clsx(roboto.className, !hasAnimated && SCROLL_DISABLED_CLASS)}>
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
