import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es" className="h-full scroll-smooth bg-white">
      <Head />
      <body className="flex h-full flex-col font-sans text-brand-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
