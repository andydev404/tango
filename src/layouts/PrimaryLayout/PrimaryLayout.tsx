import Head from 'next/head';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { LayoutProps } from '@common/types';

export function PrimaryLayout({ children, page }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
