import { ReactNode } from 'react';

import BottomNavigation from './BottomNavigation';
import DesktopHeader from './DesktopHeader';
import Footer from './Footer';
import MobileHeader from './MobileHeader';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <main>{children}</main>
      <BottomNavigation />
      <Footer />
    </>
  );
};
export default RootLayout;
