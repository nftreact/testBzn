'use client';

import { Select } from '@radix-ui/themes';
import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type CityProps = {
  title: string;
  provinceItems: Record<string, any>[];
  cityItems: Record<string, any>[];
  cityPlaceholder: string;
  provincePlaceholder: string;
};

const City = ({ provinceItems, title, cityPlaceholder, provincePlaceholder, cityItems }: CityProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root width={'100%'} direction={'column'} gap={'8px'}>
      <Text>{title}</Text>
      <Flex gap={'10px'} direction={'column'}>
        <Select.Root defaultValue=''>
          <Select.Trigger placeholder={cityPlaceholder} />
          <Select.Content position='popper' style={{ maxHeight: '200px' }}>
            <Select.Group style={{ width: '100%' }}>
              {provinceItems.map(item => {
                return (
                  <Select.Item key={item.id} value={item.name}>
                    {item.full_name}
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Select.Root defaultValue=''>
          <Select.Trigger placeholder={provincePlaceholder} />
          <Select.Content position='popper' style={{ maxHeight: '200px' }}>
            <Select.Group style={{ width: '100%' }}>
              {cityItems.map(item => {
                return (
                  <Select.Item key={item.id} value={item.name}>
                    {item.full_name}
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
    </Root>
  );
};

export default City;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  & .rt-SelectTrigger:where(.rt-variant-surface) {
    width: 100%;
  }
`;
