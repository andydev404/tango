import { IOrderTable } from '@common/types';
import { Button } from '@components/Button';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren &
  IOrderTable & {
    showActionButton?: boolean;
  };

export function OrderList({
  children,
  columns,
  showActionButton,
  rows
}: Props) {
  return (
    <>
      {children}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map(col => (
                      <th
                        key={col}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                      >
                        {col}
                      </th>
                    ))}
                    {showActionButton && (
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {rows.map(order => (
                    <tr key={order.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {order.number}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.total}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.createdAt}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {order.status}
                      </td>
                      {showActionButton && (
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Button
                            href="/login"
                            variant="outline"
                            className="font-bold"
                          >
                            Detalles
                          </Button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OrderList.heading = function TableHeading({ children }: PropsWithChildren) {
  return <>{children}</>;
};
