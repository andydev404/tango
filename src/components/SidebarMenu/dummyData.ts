import { NavigationItem, AccountInfo } from '@common/types';
import {
  ShoppingBagIcon,
  HomeIcon,
  InboxIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline';

export const navigation: NavigationItem[] = [
  { name: 'Inicio', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Tiendas',
    href: '/shops',
    icon: BuildingStorefrontIcon
  },
  { name: 'Productos', href: '#', icon: ArchiveBoxIcon },
  { name: 'Categorias', href: '/categories', icon: InboxIcon },
  { name: 'Ordenes', href: '#', icon: ShoppingBagIcon }
];

export const account: AccountInfo = {
  profileImage:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  fullName: 'Jonas Cook'
};
