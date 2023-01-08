import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors, fonts } from 'src/styles/theme';

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: () => ({
      body: {
        fontFamily: fonts.body,
        color: 'brand.900'
      }
    })
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />{' '}
    </ChakraProvider>
  );
}
