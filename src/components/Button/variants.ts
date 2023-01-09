import { BaseStylesProps, VariantStylesProps, ButtonSizeProps } from './types';

const baseStyles: BaseStylesProps = {
  solid:
    'group inline-flex items-center justify-center rounded-full font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full focus:outline-none'
};

const sizes: ButtonSizeProps = {
  base: 'py-2 px-4',
  large: 'py-4 px-7'
};

const variantStyles: VariantStylesProps = {
  solid: {
    slate:
      'bg-brand-900 text-white transition hover:bg-brand-400 hover:text-brand-900 active:bg-brand-900 active:text-white focus-visible:outline-brand-900',
    brand:
      'bg-brand-400 transition hover:bg-brand-900 hover:text-white active:bg-brand-400 active:text-brand-900 focus-visible:outline-brand-900',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white'
  },
  outline: {
    slate:
      'ring-brand-900 transition text-brand-900 hover:text-white hover:bg-brand-900',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white'
  }
};

export { baseStyles, variantStyles, sizes };
