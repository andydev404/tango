import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'link'> & { href: string };

export function MobileNavLink({ href, children }: Props) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}
