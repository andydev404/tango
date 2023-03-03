import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { baseStyles, variantStyles, sizes } from './variants';
import {
  BaseStylesProps,
  VariantStylesValuesProps,
  VariantStylesProps,
  ButtonSizeProps
} from './types';
import { cn } from '@common/utils';

type Props = Pick<ComponentPropsWithoutRef<'link'>, 'href' | 'children'> & {
  variant?: string;
  color?: string;
  size?: string;
  className?: string;
};

const Link = motion(NextLink);

export function Button({
  variant = 'solid',
  color = 'slate',
  size = 'base',
  className,
  href,
  ...props
}: Props) {
  className = cn(
    baseStyles[variant as keyof BaseStylesProps],
    variantStyles[variant as keyof VariantStylesProps][
      color as keyof VariantStylesValuesProps
    ],
    sizes[size as keyof ButtonSizeProps],
    className
  );

  return href ? (
    <Link
      whileTap={{ scale: 0.9 }}
      href={href}
      className={className}
      {...props}
    />
  ) : (
    <motion.button whileTap={{ scale: 0.9 }} className={className} {...props} />
  );
}
