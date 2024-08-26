'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Button, Flex, Text } from '@/libs/primitives';

type Props = {
  store: string;
  items: {
    key: string;
    value: string;
    id: number;
  }[];
};

const ListItem = ({ items, store }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={store}
      control={control}
      render={() => {
        const handleCheckboxChange = (checkboxValue: string) => {
          console.log(checkboxValue, 'checkboxValue');
        };
        return (
          <Flex gap={'15px'} direction={'column'} width={'100%'}>
            {items.map(item => (
              <ButtonStyle style={{ textAlign: 'right' }} variant='outline' key={item.id}>
                <Flex
                  onClick={() => handleCheckboxChange(item.value)}
                  p={'10px'}
                  gap={'10px'}
                  width={'100%'}
                  direction={'column'}
                  key={item.id}
                >
                  <Text>{item.value}</Text>
                </Flex>
              </ButtonStyle>
            ))}
          </Flex>
        );
      }}
    />
  );
};

export default ListItem;

const ButtonStyle = styled(Button)`
  box-shadow: inset 0 0 0 1px #00000047;
  padding-block: 20px;
  color: black;
`;
