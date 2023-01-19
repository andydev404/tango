import { SidebarDesktopMenu } from './SidebarDesktopMenu';
import { SidebarMobileMenu } from './SidebarMobileMenu';
import { navigation, account } from './dummyData';

export function SidebarMenu() {
  return (
    <>
      <SidebarMobileMenu menuItems={navigation} account={account} />
      <SidebarDesktopMenu menuItems={navigation} account={account} />
    </>
  );
}
