import Link from 'next/link';
import Image from 'next/image';

type Props = {
  size?: number;
};

export function Logo({ size = 100 }: Props) {
  return (
    <Link href="/" className="inline-block">
      <Image src="/tango.svg" alt="Logo" width={size} height="100" />
    </Link>
  );
}
