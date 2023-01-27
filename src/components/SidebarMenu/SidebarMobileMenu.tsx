import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { shallow } from 'zustand/shallow';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from '@components/Logo';
import { NavigationItem, AccountInfo } from '@common/types';
import { useSidebarMenuStore } from '@stores/sidebarMenuStore';
import { useRouter } from 'next/router';

type Props = {
  menuItems: NavigationItem[];
  account: AccountInfo;
};

export function SidebarMobileMenu({ menuItems, account }: Props) {
  const router = useRouter();
  const { menuIsOpen, closeSideMenu } = useSidebarMenuStore(
    state => ({
      menuIsOpen: state.menuIsOpen,
      closeSideMenu: state.closeSideMenu
    }),
    shallow
  );

  return (
    <Transition.Root show={menuIsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 md:hidden"
        onClose={closeSideMenu}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={closeSideMenu}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center justify-center px-4">
                  <Logo />
                </div>
                <nav className="mt-8 space-y-2 px-4">
                  {menuItems.map(item => (
                    <Link
                      key={item.name}
                      onClick={closeSideMenu}
                      href={item.href}
                      className={clsx(
                        router.asPath.startsWith(item.href)
                          ? 'bg-brand-900 text-white'
                          : 'text-gray-600 hover:bg-brand-900 hover:text-white',
                        'group flex items-center rounded-lg px-4 py-3 font-semibold transition'
                      )}
                    >
                      <item.icon
                        className={clsx(
                          router.asPath.startsWith(item.href)
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-white',
                          'mr-4 h-6 w-6 flex-shrink-0 transition'
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
                      <p className="font-semibold text-gray-700 group-hover:text-gray-900">
                        {account.fullName}
                      </p>
                      <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
