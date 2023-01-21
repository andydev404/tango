import { ReactElement } from 'react';
import { DashboardLayout } from '@layouts/DashboardLayout';
import { Stats } from '@components/Stats';
import {
  ShoppingBagIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline';
import { Chart } from '@components/Chart';
import { OrderList } from '@components/OrderList';
import { OrderStatus } from '@common/types';

const stats = [
  { name: 'Ordenes (ultimos 30 dias)', stat: '71,897', icon: ShoppingBagIcon },
  {
    name: 'Productos vendidos (ultimos 30 dias)',
    stat: 250,
    icon: ArchiveBoxIcon
  },
  { name: 'Cantidad de tiendas', stat: 2, icon: BuildingStorefrontIcon }
];

const chart = [
  {
    name: 'Enero',
    total: 2500
  },
  {
    name: 'Febrero',
    total: 3000
  },
  {
    name: 'Marzo',
    total: 2000
  },
  {
    name: 'Abril',
    total: 2780
  },
  {
    name: 'Mayo',
    total: 1890
  },
  {
    name: 'Junio',
    total: 2390
  },
  {
    name: 'Julio',
    total: 3490
  }
];

const orders = [
  {
    id: 1,
    number: 123,
    total: 2500,
    createdAt: '20 days ago',
    status: OrderStatus.Pending
  },
  {
    id: 2,
    number: 12345,
    total: 4500,
    createdAt: '10 days ago',
    status: OrderStatus.Completed
  }
];

function Dashboard() {
  return (
    <>
      <div className="pt-6 pb-20">
        <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="font-serif text-3xl font-semibold">Resumen</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Stats stats={stats} />
          <div className="my-8">
            <Chart data={chart} />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <OrderList
                showActionButton
                columns={['Número de orden', 'Total', 'Fecha', 'Estado']}
                rows={orders}
              >
                <OrderList.heading>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Ordenes recientes
                  </h1>
                </OrderList.heading>
              </OrderList>
            </div>
            <div>
              <OrderList
                columns={['Número de orden', 'Total', 'Fecha', 'Estado']}
                rows={orders}
              >
                <OrderList.heading>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Ultimos productos vendidos
                  </h1>
                </OrderList.heading>
              </OrderList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

Dashboard.getLayout = (page: ReactElement) => {
  return <DashboardLayout page={{ title: 'Tango' }}>{page}</DashboardLayout>;
};
