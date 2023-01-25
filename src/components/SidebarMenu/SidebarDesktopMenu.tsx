import clsx from 'clsx';
import { Logo } from '@components/Logo';
import { NavigationItem, AccountInfo } from '@common/types/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  menuItems: NavigationItem[];
  account: AccountInfo;
};

export function SidebarDesktopMenu({ menuItems, account }: Props) {
  const router = useRouter();
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center justify-center px-4">
            <Logo />
          </div>
          <nav className="mt-8 flex-1 space-y-2 bg-white px-4">
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  router.asPath === item.href
                    ? 'bg-brand-900 text-white'
                    : 'text-gray-600 hover:bg-brand-900 hover:text-white',
                  'group flex items-center rounded-lg px-4 py-3 font-semibold transition'
                )}
              >
                <item.icon
                  className={clsx(
                    router.asPath === item.href
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white',
                    'mr-3 h-6 w-6 flex-shrink-0 transition'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 p-4 ">
          <a
            href="#"
            className="group block w-full flex-shrink-0 rounded-lg bg-gray-100 p-4"
          >
            <div className="flex items-center">
              <div>
                <Image
                  className="inline-block h-9 w-9 rounded-full"
                  src={account.profileImage}
                  width={36}
                  height={36}
                  alt="Account image"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                  {account.fullName}
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
