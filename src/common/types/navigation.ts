import { FC, SVGProps } from 'react';

export type NavigationItem = {
  name: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  current: boolean;
};

export type AccountInfo = {
  fullName: string;
  profileImage: string;
};
