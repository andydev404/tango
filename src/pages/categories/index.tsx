import { SimpleTable } from '@components/SimpleTable';
import { DashboardLayout } from '@layouts/DashboardLayout';
import { ReactElement } from 'react';
import { Row } from 'react-table';

const COLUMNS = [
  {
    Header: 'Nombre',
    accessor: 'name'
  }
];

const DATA = [{ name: 'Cat #1' }, { name: 'Cat #2' }];

export default function Categories() {
  const handleOnClickRow = (row: Row<object>) => {
    console.log(row);
  };
  return (
    <>
      <div className="pt-6 pb-20">
        <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="font-serif text-3xl font-semibold">Categorías</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <SimpleTable
            columns={COLUMNS}
            data={DATA}
            onClickRow={handleOnClickRow}
            showCreateButton
            createButtonTitle="Nueva categoría"
          />
        </div>
      </div>
    </>
  );
}

Categories.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout page={{ title: 'Categorias' }}>{page}</DashboardLayout>
  );
};
