import localFont from 'next/font/local';
import '@/styles/globals.css';

const avenir = localFont({
  src: '../fonts/avenir-next.woff',
  subsets: ['latin'],
  variable: '--font-avenir',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${avenir.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
