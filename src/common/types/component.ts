import { FC, SVGProps } from 'react';

export interface IStats {
  name: string;
  stat: string | number;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export interface IChartData {
  name: string;
  total: number;
}
