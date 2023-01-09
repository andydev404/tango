import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Props = ComponentPropsWithoutRef<'link'> & { href: string };

export function NavLink({ href, children, className }: Props) {
  className = clsx(
    'inline-block rounded-lg py-1 px-2 hover:bg-slate-100',
    className
  );
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
