import React, { forwardRef } from 'react';

import { CaretLeftIcon } from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';

import { Button, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  value: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Button>, 'children'>;

const CallToActionBottomSheet = forwardRef<HTMLButtonElement, Props>(({ value, ...rest }, ref) => {
  return (
    <Button color='gray' ref={ref} {...rest} size={'4'} variant='soft' style={{ paddingInline: '15px' }}>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Text size={'2'} style={{ width: '100%', textAlign: 'right' }}>
          {value}
        </Text>
        <CaretLeftIcon style={{ scale: 1.7 }} />
      </Flex>
    </Button>
  );
});

CallToActionBottomSheet.displayName = 'CallToActionBottomSheet';

export default CallToActionBottomSheet;
