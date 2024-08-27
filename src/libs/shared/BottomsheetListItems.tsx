'use client';

import React, { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';

import { Button as RadixButton } from '@radix-ui/themes';

import { FormData } from '@/components/planner/type';
import { Flex, Text } from '@/libs/primitives';

/**
 * Form data interface
 */

/**
 * Component props
 */
type Props = {
  store: string; // Simplified to just `string` to handle any form path
  items: {
    key: string;
    value: string;
    id: number;
  }[];
} & React.ComponentProps<typeof RadixButton>;

const BottomsheetListItems = forwardRef<HTMLButtonElement, Props>(({ items, store, ...rest }, ref) => {
  const { control, watch, setValue } = useFormContext<FormData>();

  console.log(watch(store as keyof FormData), 'sample'); // Cast to keyof FormData for watch

  return (
    <Controller
      name={store as keyof FormData} // Cast to keyof FormData
      control={control}
      render={() => {
        const handleCheckboxChange = (checkboxValue: string) => {
          console.log(checkboxValue, 'checkboxValue');
          setValue(store as keyof FormData, checkboxValue); // Cast to keyof FormData
        };

        return (
          <Flex gap='15px' direction='column' width='100%'>
            {items.map(item => (
              <RadixButton
                size='4'
                variant={watch(store as keyof FormData) === item.value ? 'solid' : 'outline'}
                ref={ref}
                {...rest}
                style={{ textAlign: 'right' }}
                key={item.id}
              >
                <Flex
                  justify={'between'}
                  onClick={() => handleCheckboxChange(item.value)}
                  gap='10px'
                  width='100%'
                >
                  <Text size='2'>{item.value}</Text>
                  {watch(store as keyof FormData) === item.value ? (
                    <FaRegCircleCheck style={{ scale: 1.2 }} />
                  ) : (
                    <FaRegCircle style={{ scale: 1.2 }} />
                  )}
                </Flex>
              </RadixButton>
            ))}
          </Flex>
        );
      }}
    />
  );
});

BottomsheetListItems.displayName = 'BottomsheetListItems';

export default BottomsheetListItems;
