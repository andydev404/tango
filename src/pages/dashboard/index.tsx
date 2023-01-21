import { ReactElement } from 'react';
import { DashboardLayout } from '@layouts/DashboardLayout';
import { Stats } from '@components/Stats';
import {
  ShoppingBagIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Ordenes (ultimos 30 dias)', stat: '71,897', icon: ShoppingBagIcon },
  {
    name: 'Productos vendidos (ultimos 30 dias)',
    stat: 250,
    icon: ArchiveBoxIcon
  },
  { name: 'Cantidad de tiendas', stat: 2, icon: BuildingStorefrontIcon }
];

function Dashboard() {
  return (
    <>
      <div className="py-6">
        <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="font-serif text-3xl font-semibold text-gray-900">
            Resumen
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Stats stats={stats} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

Dashboard.getLayout = (page: ReactElement) => {
  return <DashboardLayout page={{ title: 'Inicio' }}>{page}</DashboardLayout>;
};
