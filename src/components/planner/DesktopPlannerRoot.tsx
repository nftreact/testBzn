'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Flex, Text } from '@/libs/primitives';

import SelectCompnent from './Select';
import TimeAndDate from './TimeAndDate';

/**
 * props
 * _______________________________________________________________________________
 */

const DesktopPlannerRoot = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const cityItem = [
    {
      key: 'تبریز',
      value: 'آذربايجان شرقی - تبریز',
      id: 1,
      places_count: 81,
      province_id: 1,
      trip_value: 8,
    },
    {
      key: 'تبریز',
      value: 'آذربايجان شرقی - تبریز',
      id: 2,
      places_count: 81,
      province_id: 1,
      trip_value: 8,
    },
  ];

  const means_of_travelItems = [
    {
      key: 'کوله ( پیاده )',
      value: 'کوله ( پیاده )',
      id: 1,
    },
    {
      key: 'خودرو شخصی',
      value: 'خودرو شخصی',
      id: 2,
    },
    {
      key: 'تاکسی',
      value: 'تاکسی',
      id: 3,
    },
    {
      key: 'اتوبوس',
      value: 'اتوبوس',
      id: 4,
    },
    {
      key: 'قطار',
      value: 'قطار',
      id: 5,
    },
    {
      key: 'هواپیما',
      value: 'هواپیما',
      id: 6,
    },
  ];

  const place_of_residence = [
    { key: 'هتل آپارتمان', value: 'هتل آپارتمان', id: 1 },
    { key: 'ویلا', value: 'ویلا', id: 2 },
    { key: 'کلبه جنگلی', value: 'کلبه جنگلی', id: 3 },
  ];

  const Type_of_tourist_place = [
    {
      key: 'طبیعت گردی',
      value: 'طبیعت گردی',
      id: 1,
    },
    {
      key: 'هنرگردی',
      value: 'هنرگردی',
      id: 2,
    },
    {
      key: 'تاریخ گردی',
      value: 'تاریخ گردی',
      id: 3,
    },
    {
      key: 'گردشگری مذهبی',
      value: 'گردشگری مذهبی',
      id: 4,
    },
    {
      key: 'شهرگردی',
      value: 'شهرگردی',
      id: 5,
    },
  ];

  const SortByItem = [
    { key: 'پربازدید', value: 'پربازدید', id: 1 },
    { key: 'معمولی', value: 'معمولی', id: 2 },
    { key: 'بکرو ناشناخته', value: 'بکرو ناشناخته', id: 3 },
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
      means_of_travel: '',
      place_of_residence: '',
      Type_of_tourist_place: '',
      sortBy: '',
    },
  });
  const { watch } = methods;

  console.log(watch(), 'datakhjblkjfdsbgksfdg');

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex display={{ initial: 'none', md: 'flex' }} gap={'16px'} direction={'column'}>
      <FormProvider {...methods}>
        <Flex gap={'10px'} direction={'column'}>
          <Text>آدرس مبدا</Text>
          <Flex gap={'20px'}>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='origin[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='origin[city]' />
          </Flex>
        </Flex>
        <Flex gap={'10px'} direction={'column'}>
          <Text>آدرس مبدا</Text>
          <Flex gap={'20px'}>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='destination[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='destination[city]' />
          </Flex>
        </Flex>
        <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} />
        <Flex gap={'10px'} direction={'column'}>
          <Text>وسیله و اسکان</Text>
          <Flex gap={'20px'}>
            <SelectCompnent items={means_of_travelItems} placeholder={'وسیله سفر'} store='means_of_travel' />
            <SelectCompnent items={place_of_residence} placeholder={'محل اسکان'} store='place_of_residence' />
          </Flex>
        </Flex>
        <Flex gap={'10px'} direction={'column'}>
          <Text>گردشگری</Text>
          <Flex gap={'20px'}>
            <SelectCompnent
              items={Type_of_tourist_place}
              placeholder={'نوع مکان گردشگری'}
              store='Type_of_tourist_place'
            />
            <SelectCompnent items={SortByItem} placeholder={'نمایش بر اساس'} store='sortBy' />
          </Flex>
        </Flex>
        <Flex gap={'10px'} direction={'column'}>
          <Text>مسافران</Text>
          <Flex gap={'20px'}>
            <SelectCompnent
              items={Type_of_tourist_place}
              placeholder={'نوع مکان گردشگری'}
              store='Type_of_tourist_place'
            />
            <SelectCompnent items={SortByItem} placeholder={'نمایش بر اساس'} store='sortBy' />
          </Flex>
        </Flex>
      </FormProvider>
    </Flex>
  );
};

export default DesktopPlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
