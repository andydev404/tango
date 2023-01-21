import { IStats } from '@common/types';

type Props = {
  title?: string;
  stats: IStats[];
};

export function Stats({ title, stats }: Props) {
  return (
    <>
      {title && (
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
      )}

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(item => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5  shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-brand-900 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
