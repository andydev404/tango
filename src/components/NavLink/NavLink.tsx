import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Props = ComponentPropsWithoutRef<'link'> & { href: string };

export function NavLink({ href, children, className }: Props) {
  className = clsx(
    'inline-block rounded-lg hover:underline underline-offset-8',
    className
  );
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
