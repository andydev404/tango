export type BaseStylesProps = Record<'solid' | 'outline', string>;
export type VariantStylesValuesProps = {
  slate: string;
  blue?: string;
  brand?: string;
  white?: string;
};
export type VariantStylesProps = Record<
  'solid' | 'outline',
  VariantStylesValuesProps
>;
