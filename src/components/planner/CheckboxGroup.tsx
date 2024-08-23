'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@radix-ui/themes';

import { Flex, Text } from '@/libs/primitives';

type Props = {
  store: string;
  items: {
    key: string;
    value: number;
    id: number;
  }[];
};

const CheckboxGroup = ({ items, store }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={store}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;

        const handleCheckboxChange = (checkboxValue: number) => {
          if (value.includes(checkboxValue)) {
            onChange(value.filter((v: number) => v !== checkboxValue));
          } else {
            onChange([...value, checkboxValue]);
          }
        };
        return (
          <Flex gap={'10px'}>
            {items.map(item => (
              <Text as='label' size='2' key={item.id}>
                <Flex gap='2'>
                  <Checkbox
                    value={item.value}
                    checked={value.includes(item.value)}
                    onCheckedChange={() => handleCheckboxChange(item.value)}
                  />
                  {item.key}
                </Flex>
              </Text>
            ))}
          </Flex>
        );
      }}
    />
  );
};

export default CheckboxGroup;
