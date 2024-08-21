'use client';

import { Flex } from '@/libs/primitives';

import City from './City';

/**
 * props
 * _______________________________________________________________________________
 */

const PlannerRoot = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const cityItem = [
    {
      full_name: 'آذربايجان شرقی - تبریز',
      id: 1,
      name: 'تبریز',
      places_count: 81,
      province_id: 1,
      trip_value: 8,
    },
    {
      full_name: 'آذربايجان شرقی - مراغه',
      id: 4,
      name: 'مراغه',
      places_count: 8,
      province_id: 1,
      trip_value: 2,
    },
  ];

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
    <Flex>
      <City
        provinceItems={cityItem}
        cityItems={cityItem}
        title='آدرس مبدا'
        cityPlaceholder={'استان'}
        provincePlaceholder={'استان'}
      />
    </Flex>
  );
};

export default PlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
