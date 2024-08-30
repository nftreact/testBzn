import { ReactNode } from 'react';

import BottomNavigation from './BottomNavigation';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <main style={{ paddingInline: '16px', paddingBlock: '20px 90px' }}>{children}</main>
      <BottomNavigation />
      {/* <Footer /> */}
    </>
  );
};
export default RootLayout;
