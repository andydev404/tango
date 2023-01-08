import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';

function Logo() {
  return (
    <Link as={NextLink} href="/">
      <Image src="/tango.svg" alt="Logo" width="100" height="100" />
    </Link>
  );
}

export { Logo };
