import { DashboardLayout } from '@layouts/DashboardLayout';
import { ReactElement } from 'react';

export default function Shops() {
  return (
    <>
      <div className="pt-6 pb-20">
        <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="font-serif text-3xl font-semibold">Tiendas</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">content</div>
      </div>
    </>
  );
}

Shops.getLayout = (page: ReactElement) => {
  return <DashboardLayout page={{ title: 'Tiendas' }}>{page}</DashboardLayout>;
};
