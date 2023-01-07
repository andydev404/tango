import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors } from '@styles/theme';

const theme = extendTheme({
  colors
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />{' '}
    </ChakraProvider>
  );
}
