import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface SidebarMenuState {
  menuIsOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useSidebarMenuStore = create<SidebarMenuState>()(
  devtools(set => ({
    menuIsOpen: false,
    openSideMenu: () => set({ menuIsOpen: true }),
    closeSideMenu: () => set({ menuIsOpen: false })
  }))
);
