'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Flex } from '@/libs/primitives';

import CityAndProvince from './CityAndProvince';
import TimeAndDate from './TimeAndDate';

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
      origin: {
        city: '',
        province: '',
      },
      destination: {
        city: '',
        province: '',
      },
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
        <CityAndProvince
          provinceStore={'origin[province]'}
          cityStore={'origin[city]'}
          provinceItems={cityItem}
          cityItems={cityItem}
          title='آدرس مبدا'
          cityPlaceholder={'استان'}
          provincePlaceholder={'شهر'}
        />
        <CityAndProvince
          provinceStore={'destination[province]'}
          cityStore={'destination[city]'}
          provinceItems={cityItem}
          cityItems={cityItem}
          title='آدرس مبدا'
          cityPlaceholder={'استان'}
          provincePlaceholder={'شهر'}
        />
        <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} />
      </Flex>
    </FormProvider>
  );
};

export default PlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
