import React from 'react';
import { useTable, useFlexLayout, usePagination } from 'react-table';
import { IOrder, OrderStatus } from '@common/types';

const COLUMNS = [
  {
    Header: 'Número de orden',
    accessor: 'orderNumber',
    minWidth: 60,
    maxWidth: 80
  },
  {
    Header: 'Total',
    accessor: 'total',
    // @ts-ignore
    Cell: ({ cell: { value } }) => <div>${value}</div>,
    minWidth: 140,
    maxWidth: 260
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        Fecha
      </div>
    ),
    accessor: 'createdAt',
    // @ts-ignore
    Cell: ({ cell: { value } }) => <div>{value}</div>,
    minWidth: 100,
    maxWidth: 140
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        Estado
      </div>
    ),
    accessor: 'status',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div
        className={`ltr:text-right rtl:text-left ${
          value === OrderStatus.Completed ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {value}
      </div>
    ),
    minWidth: 100,
    maxWidth: 140
  }
];

export function OrderTable({ orders }: { orders: IOrder[] }) {
  const data = React.useMemo(() => orders, [orders]);
  const columns = React.useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        // @ts-ignore
        columns,
        data
      },
      useFlexLayout,
      usePagination
    );
  return (
    <>
      <div className="border-b border-dashed border-gray-200 pb-5">
        <h2 className="mb-3 font-serif text-lg font-bold uppercase text-black sm:text-xl md:mb-0 md:text-2xl">
          últimas ordenes
        </h2>
      </div>
      <div className=" overflow-hidden overflow-x-auto">
        <table
          {...getTableProps()}
          className="transaction-table w-full border-separate border-0"
        >
          <thead className="text-sm text-gray-500">
            {headerGroups.map((headerGroup, idx) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column, idx) => (
                  <th
                    {...column.getHeaderProps()}
                    key={idx}
                    className="group bg-white px-2 py-5 font-normal first:rounded-bl-lg last:rounded-br-lg md:px-4"
                  >
                    <div>{column.render('Header')}</div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="3xl:text-sm text-xs font-medium"
          >
            {rows.map((row, idx) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={idx}
                  className="mb-3 items-center rounded-lg bg-white uppercase shadow last:mb-0"
                >
                  {row.cells.map((cell, idx) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={idx}
                        className="3xl:py-5 px-2 py-4 tracking-[1px] md:px-4 md:py-6"
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
