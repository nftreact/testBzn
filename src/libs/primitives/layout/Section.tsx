'use client';

import React, { ForwardedRef } from 'react';

import { Section } from '@radix-ui/themes';

type AppSectionProps = React.ComponentProps<typeof Section> & {
  children: React.ReactNode;
};

const Appsection = React.forwardRef<HTMLDivElement, AppSectionProps>(
  ({ children, ...props }: AppSectionProps, forwardedRef: ForwardedRef<HTMLDivElement>) => (
    <Section ref={forwardedRef} {...props}>
      {children}
    </Section>
  )
);

Appsection.displayName = 'Section';

export default Appsection;
