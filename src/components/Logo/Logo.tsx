import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/">
      <Image src="/tango.svg" alt="Logo" width="100" height="100" />
    </Link>
  );
}
