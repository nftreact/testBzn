'use client';

import React, { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { FormData } from '@/components/planner/type';
import { Flex, Button as RadixButton, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';

/**
 * Form data interface
 */

/**
 * Component props
 */
type Props = {
  store: string;
  items: {
    key: string;
    value: string;
    id: number;
  }[];
} & Omit<React.ComponentProps<typeof RadixButton>, 'children'>;

const BottomsheetListItems = forwardRef<HTMLButtonElement, Props>(({ items, store, ...rest }, ref) => {
  const { control, watch, setValue } = useFormContext<FormData>();

  return (
    <Controller
      name={store as keyof FormData}
      control={control}
      render={() => {
        const handleCheckboxChange = (checkboxValue: string) => {
          setValue(store as keyof FormData, checkboxValue);
        };

        return (
          <Flex gap='15px' direction='column' width='100%'>
            {items.map(item => (
              <ButtonStle
                isSelected={watch(store as keyof FormData) === item.value}
                size={'4'}
                variant={'soft'}
                ref={ref}
                {...rest}
                style={{
                  textAlign: 'right',
                  color: watch(store as keyof FormData) === item.value ? '#007E7E' : '#62636C',
                  backgroundColor:
                    watch(store as keyof FormData) === item.value ? colorPalette.turquoise[3] : '#FCFCFD',
                }}
                key={item.id}
              >
                <Flex
                  justify={'between'}
                  onClick={() => handleCheckboxChange(item.value)}
                  gap='10px'
                  width='100%'
                >
                  <Text style={{ lineHeight: '20px' }}>{item.value}</Text>
                </Flex>
              </ButtonStle>
            ))}
          </Flex>
        );
      }}
    />
  );
});

BottomsheetListItems.displayName = 'BottomsheetListItems';

export default BottomsheetListItems;

const ButtonStle = styled(RadixButton)<{ isSelected: boolean }>`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    padding: 15px 12px;
    border-radius: 8px;
    color: #62636c;
    border: ${({ isSelected }) => (isSelected ? '1px solid #009C9B' : '1px solid #EFF0F3')};
  }
`;
