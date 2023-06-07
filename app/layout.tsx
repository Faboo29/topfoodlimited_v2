import clsx from 'clsx';
import Providers from './Providers';
import Navigation from './components/modules/Navigation';
import './styles/global.scss';
import { Kumbh_Sans } from 'next/font/google';
import { SCROLL_DISABLED_CLASS } from './constants';
import Footer from './components/modules/Footer';

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(kumbh.className, SCROLL_DISABLED_CLASS)}>
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
