import { NavigationItem, AccountInfo } from '@common/types';
import {
  ShoppingBagIcon,
  HomeIcon,
  InboxIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline';

export const navigation: NavigationItem[] = [
  { name: 'Inicio', href: '#', icon: HomeIcon, current: true },
  { name: 'Tiendas', href: '#', icon: BuildingStorefrontIcon, current: false },
  { name: 'Productos', href: '#', icon: ArchiveBoxIcon, current: false },
  { name: 'Categorias', href: '#', icon: InboxIcon, current: false },
  { name: 'Ordenes', href: '#', icon: ShoppingBagIcon, current: false }
];

export const account: AccountInfo = {
  profileImage:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  fullName: 'Jonas Cook'
};
