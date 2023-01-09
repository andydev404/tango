import Link from 'next/link';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { baseStyles, variantStyles, sizes } from './variants';
import {
  BaseStylesProps,
  VariantStylesValuesProps,
  VariantStylesProps,
  ButtonSizeProps
} from './types';

type Props = Pick<ComponentPropsWithoutRef<'link'>, 'href' | 'children'> & {
  variant?: string;
  color?: string;
  size?: string;
  className?: string;
};

export function Button({
  variant = 'solid',
  color = 'slate',
  size = 'base',
  className,
  href,
  ...props
}: Props) {
  className = clsx(
    baseStyles[variant as keyof BaseStylesProps],
    variantStyles[variant as keyof VariantStylesProps][
      color as keyof VariantStylesValuesProps
    ],
    sizes[size as keyof ButtonSizeProps],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
