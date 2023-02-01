import { useMemo } from 'react';
import {
  useTable,
  useFlexLayout,
  usePagination,
  Column,
  Row
} from 'react-table';
import { useRouter } from 'next/router';
import { Button } from '@components/Button';

type Props = {
  readonly columns: Column<any>[];
  readonly data: Object[];
  // eslint-disable-next-line no-unused-vars
  onClickRow?: (row: Row<object>) => void;
  title?: string;
  showCreateButton?: boolean;
  createButtonTitle?: string;
};

export function SimpleTable(props: Props) {
  const {
    columns,
    data,
    onClickRow,
    title,
    showCreateButton,
    createButtonTitle
  } = props;
  const dataList = useMemo(() => data, [data]);
  const columnList = useMemo(() => columns, [columns]);
  const router = useRouter();

  const handleOnClickRow = (row: Row<object>) => {
    if (onClickRow) {
      onClickRow(row);
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columnList,
        data: dataList
      },
      useFlexLayout,
      usePagination
    );
  return (
    <>
      {(title || showCreateButton) && (
        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-5">
          {title && (
            <h2 className="mb-3 font-serif text-lg font-bold uppercase text-black sm:text-xl md:mb-0 md:text-2xl">
              {title}
            </h2>
          )}

          {showCreateButton && (
            <Button
              href={`${router.asPath}/create`}
              variant="outline"
              className="ml-auto"
            >
              {createButtonTitle ?? 'Crear'}
            </Button>
          )}
        </div>
      )}
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
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOnClickRow(row)}
                  className="mb-3 items-center rounded-lg bg-white uppercase shadow transition last:mb-0 hover:bg-brand-900 hover:text-white"
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
