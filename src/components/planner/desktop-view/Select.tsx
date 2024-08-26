'use client';

import { useFormContext } from 'react-hook-form';

import { Select } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { Flex } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type SelectCompnentProps = {
  store: string;
  items: Record<string, any>[];
  placeholder: string;
};

const SelectCompnent = ({ store, items, placeholder }: SelectCompnentProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { setValue, watch } = useFormContext();

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
    <Root width={'100%'}>
      <Select.Root
        size={'3'}
        value={watch(store)}
        onValueChange={value => setValue(store, value)} // Replace 'city' with the actual field name
      >
        <Select.Trigger placeholder={placeholder} />
        <Select.Content position='popper' style={{ maxHeight: '200px' }}>
          <Select.Group style={{ width: '100%' }}>
            {items.map(item => (
              <Select.Item key={item.id} value={item.key}>
                {item.value}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Root>
  );
};

export default SelectCompnent;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  & .rt-SelectTrigger:where(.rt-variant-surface) {
    width: 100%;
  }

  & .rt-Flex {
    width: 100%;
  }
`;
