import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  page: {
    title: string;
  };
};
