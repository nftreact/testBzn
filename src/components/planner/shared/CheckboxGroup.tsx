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
  isRow?: boolean;
};

const CheckboxGroup = ({ items, store, isRow = true }: Props) => {
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
          <Flex gap={'10px'} wrap={'wrap'} direction={isRow ? 'row' : 'column'}>
            {items.map(item => (
              <Text style={{ textWrap: 'nowrap' }} as='label' size='2' key={item.id}>
                <Flex gap='2'>
                  <Checkbox
                    value={item.value}
                    checked={value.includes(item.value)}
                    onCheckedChange={() => handleCheckboxChange(item.value)}
                  />
                  <Text>{item.key}</Text>
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
