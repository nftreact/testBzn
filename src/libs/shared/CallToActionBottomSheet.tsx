'use client';

import React, { forwardRef } from 'react';

import { CaretLeftIcon } from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';

import { Button, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  errorText?: string;
  value: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Button>, 'children'>;

const CallToActionBottomSheet = forwardRef<HTMLButtonElement, Props>(({ value, errorText, ...rest }, ref) => {
  return (
    <ButtonStyle
      type='button'
      ref={ref}
      {...rest}
      size={'4'}
      variant='soft'
      style={{ backgroundColor: '#F9F9FB', borderRadius: '8px' }}
    >
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Text size={'2'} style={{ width: '100%', textAlign: 'right', color: '#62636c8b' }}>
          {value}
        </Text>
        <CaretLeftIcon style={{ scale: 1.3 }} />
      </Flex>
      <Text
        weight={'medium'}
        color='red'
        style={{ position: 'absolute', bottom: '-20px', fontSize: '10px', right: '10px' }}
      >
        {errorText}
      </Text>
    </ButtonStyle>
  );
});

CallToActionBottomSheet.displayName = 'CallToActionBottomSheet';

export default CallToActionBottomSheet;

const ButtonStyle = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    position: relative;
    margin-bottom: 10px;
    color: #62636c;
    background-color: #f9f9fb;
    padding: 15px 16px;
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
      0 0 0 0.5px var(--black-a1),
      0 1px 1px 0 var(--gray-a2),
      0 2px 1px -1px var(--black-a1),
      0 1px 3px 0 var(--black-a1);
  }
`;
