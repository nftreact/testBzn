'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Flex } from '@/libs/primitives';

import City from './City';
import EndTimeAndDate from './EndTimeAndDate';
import StartTimeAndDate from './StartTimeAndDate';

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

  const methods = useForm({
    defaultValues: {
      citties: '',
      origin_province: '',
      startTime: {
        time: '',
        date: '',
      },
      endTime: {
        time: '',
        date: '',
      },
    },
  });
  const { watch } = methods;

  console.log(watch(), 'datakhjblkjfdsbgksfdg');

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex gap={'16px'} direction={'column'}>
        <City
          provinceItems={cityItem}
          cityItems={cityItem}
          title='آدرس مبدا'
          cityPlaceholder={'استان'}
          provincePlaceholder={'شهر'}
        />
        <StartTimeAndDate />
        <EndTimeAndDate />
      </Flex>
    </FormProvider>
  );
};

export default PlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
