/* eslint-disable no-unused-vars */
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

export enum OrderStatus {
  Pending = 'PENDING',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED'
}

export interface IOrder {
  id: number;
  number: number | string;
  total: number;
  createdAt: string;
  status: OrderStatus;
}

export interface IOrderTable {
  columns: string[];
  rows: IOrder[];
}
