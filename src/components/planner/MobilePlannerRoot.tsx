'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Flex } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

const MobilePlannerRoot = () => {
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
    <Flex display={{ initial: 'flex', md: 'none' }} gap={'16px'} direction={'column'}>
      <FormProvider {...methods}>
        moblie view
        {/* <CityAndProvince
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
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} /> */}
      </FormProvider>
    </Flex>
  );
};

export default MobilePlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
