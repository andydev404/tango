import { DefaultSeoProps } from 'next-seo';

export const SEOValues: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    url: 'www.tango.com',
    title: 'Tango',
    description:
      'Crea un sitio web con todos tus productos y recibe órdenes directamente en tu WhatsApp de manera fácil, segura y rápida, sin cobros adicionales.',
    images: [
      {
        url: 'https://i.ibb.co/j3vKCf3/tangoads.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image'
  }
};
