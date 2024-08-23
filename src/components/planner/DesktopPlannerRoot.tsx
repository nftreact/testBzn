'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Flex, Text } from '@/libs/primitives';

import Checkbox from './CheckboxGroup';
import SelectCompnent from './Select';
import SelectWrapper from './SelectWrapper';
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
      value: 1,
      id: 1,
    },
    {
      key: 'هنرگردی',
      value: 2,
      id: 2,
    },
    {
      key: 'تاریخ گردی',
      value: 3,
      id: 3,
    },
    {
      key: 'گردشگری مذهبی',
      value: 4,
      id: 4,
    },
    {
      key: 'شهرگردی',
      value: 5,
      id: 5,
    },
  ];

  const SortByItem = [
    { key: 'پربازدید', value: 'پربازدید', id: 1 },
    { key: 'معمولی', value: 'معمولی', id: 2 },
    { key: 'بکرو ناشناخته', value: 'بکرو ناشناخته', id: 3 },
  ];

  const Number_Of_Passengers = [
    {
      value: 'صفر',
      key: '0',
      id: 1,
    },
    {
      value: '1 نفر',
      key: '1',
      id: 2,
    },
    {
      value: '2 نفر',
      key: '2',
      id: 3,
    },
    {
      value: '3 نفر',
      key: '3',
      id: 4,
    },
    {
      value: '4 نفر',
      key: '4',
      id: 5,
    },
    {
      value: '5 نفر',
      key: '5',
      id: 6,
    },
    {
      value: '6 نفر',
      key: '6',
      id: 7,
    },
    {
      value: '7 نفر',
      key: '7',
      id: 8,
    },
    {
      value: '8 نفر',
      key: '8',
      id: 9,
    },
    {
      value: '9 نفر',
      key: '9',
      id: 10,
    },
    {
      value: '10 نفر',
      key: '10',
      id: 11,
    },
    {
      value: '11 نفر',
      key: '11',
      id: 12,
    },
  ];

  const Type_Of_Passengers = [
    {
      key: 'بانوان',
      value: 1,
      id: 1,
    },
    {
      key: 'کودک و نوجوان',
      value: 2,
      id: 2,
    },
    {
      key: 'سالمندان',
      value: 3,
      id: 3,
    },
    {
      key: 'معلولین',
      value: 4,
      id: 4,
    },
    {
      key: 'دارای بیماری خاص',
      value: 5,
      id: 5,
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
      means_of_travel: '',
      place_of_residence: '',
      Type_of_tourist_place: [1],
      sortBy: '',
      number_Of_Adult_Passengers: '',
      number_Of_Child_Passengers: '',
      number_Of_Minor_Passengers: '',
      Type_Of_Passengers: [1],
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
        {/* ADDRESS */}
        <SelectWrapper title='آدرس مبدا'>
          <Flex width={'100%'} gap={'20px'}>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='origin[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='origin[city]' />
          </Flex>
        </SelectWrapper>
        <SelectWrapper title='آدرس مبدا'>
          <Flex width={'100%'} gap={'20px'}>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='destination[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='destination[city]' />
          </Flex>
        </SelectWrapper>
        {/* TIME AND DATE */}
        <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} />
        {/* MEANS OF TRAVEL */}
        <SelectWrapper title='وسیله و اسکان'>
          <Flex width={'100%'} gap={'20px'}>
            <SelectCompnent items={means_of_travelItems} placeholder={'وسیله سفر'} store='means_of_travel' />
            <SelectCompnent items={place_of_residence} placeholder={'محل اسکان'} store='place_of_residence' />
          </Flex>
        </SelectWrapper>
        {/* Type_of_tourist_place */}
        <Flex width={'100%'} gap={'20px'}>
          <Flex gap={'20px'} width={'50%'} direction={'column'}>
            <Text style={{ paddingRight: '5px' }}>گردشگری</Text>
            <Flex align={'center'}>
              <Checkbox items={Type_of_tourist_place} store={'Type_of_tourist_place'} />
            </Flex>
          </Flex>
          {/* Type_Of_Passengers */}
          <Flex direction={'column'} gap={'20px'} width={'50%'}>
            <Text style={{ paddingRight: '5px' }}>نوع مسافران</Text>
            <Flex align={'center'}>
              <Checkbox items={Type_Of_Passengers} store='Type_Of_Passengers' />
            </Flex>
          </Flex>
        </Flex>
        {/* number_Of_Adult_Passengers */}
        <SelectWrapper title='مسافران'>
          <Flex width={'100%'} gap={'20px'}>
            <SelectCompnent
              items={Number_Of_Passengers}
              placeholder={'تعداد مسافرین بزرگسال'}
              store='number_Of_Adult_Passengers'
            />
            <SelectCompnent
              items={Number_Of_Passengers}
              placeholder={'تعداد مسافرین کودک'}
              store='number_Of_Child_Passengers'
            />
          </Flex>
          <Flex width={'100%'} gap={'20px'}>
            <Flex width={'50%'}>
              <SelectCompnent
                items={Number_Of_Passengers}
                placeholder={'تعداد مسافرین خردسال'}
                store='number_Of_Minor_Passengers'
              />
            </Flex>
            {/* sortby */}
            <Flex width={'50%'}>
              <SelectCompnent items={SortByItem} placeholder={'نمایش بر اساس'} store='sortBy' />
            </Flex>
          </Flex>
        </SelectWrapper>
      </FormProvider>
    </Flex>
  );
};

export default DesktopPlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
