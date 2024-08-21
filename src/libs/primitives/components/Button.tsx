import React, { ForwardedRef } from 'react';

import { Button } from '@radix-ui/themes';

type AppButtonProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
};

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ children, ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
    <Button ref={forwardedRef} {...props}>
      {children}
    </Button>
  )
);

AppButton.displayName = 'Button';

export default AppButton;
