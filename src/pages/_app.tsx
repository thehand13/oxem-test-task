import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import Header from '@/components/header/Header';
import '../styles/globals.css';

const font = localFont({
  src: [
    {
      path: '../../public/fonts/gilroy/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/nekst/Nekst-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
