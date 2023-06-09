import { cookies } from 'next/headers';
import clsx from 'clsx';
import Providers from './Providers';
import Navigation from './components/modules/Navigation';
import './styles/global.scss';
import { Roboto } from 'next/font/google';
import { APP_LOADED_COOKIE, SCROLL_DISABLED_CLASS } from './constants';
import Footer from './components/modules/Footer';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap'
});

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
