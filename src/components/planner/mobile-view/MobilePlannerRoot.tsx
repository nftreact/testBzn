'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  cityItem,
  means_of_travelItems,
  Number_Of_Passengers,
  place_of_residence,
  SortByItem,
  Type_Of_Passengers,
  Type_of_tourist_place,
} from '@/constants/planner/planner';
import { Accordion, Flex } from '@/libs/primitives';
import BottomSheet from '@/libs/primitives/components/BottomSheet';

import Checkbox from '../shared/CheckboxGroup';
import TimeAndDate from '../shared/TimeAndDate';
import Wrapper from '../shared/Wrapper';
import BottomSheetWrapper from './BottomSheetWrapper';
import Card from './Card';
import ListItem from './ListItem';

/**
 * props
 * _______________________________________________________________________________
 */

type key =
  | 'city'
  | 'province'
  | 'means_of_travel'
  | 'place_of_residence'
  | 'Type_of_tourist_place'
  | 'sortBy'
  | 'number_Of_Adult_Passengers'
  | 'number_Of_Child_Passengers'
  | 'number_Of_Minor_Passengers'
  | 'Type_Of_Passengers'
  | '';

const MobilePlannerRoot = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const [state, setState] = useState<{ key: key; isOpen: boolean }>({
    isOpen: false,
    key: '',
  });

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
  const handleClick = (key: key) => {
    setState({
      isOpen: true,
      key,
    });
  };
  console.log(state, 'state');

  const renderElement = (key: key) => {
    switch (key) {
      case 'province':
        return (
          <BottomSheetWrapper title='استان'>
            <ListItem items={cityItem} store='' />
          </BottomSheetWrapper>
        );
      case 'city':
        return (
          <BottomSheetWrapper title='شهر'>
            <ListItem items={cityItem} store='' />
          </BottomSheetWrapper>
        );
      case 'Type_Of_Passengers':
        return (
          <BottomSheetWrapper title='نوع مسافران'>
            <Checkbox items={Type_Of_Passengers} store='Type_Of_Passengers' isRow={false} />
          </BottomSheetWrapper>
        );
      case 'Type_of_tourist_place':
        return (
          <BottomSheetWrapper title='نوع مکان گردشگری'>
            <Checkbox items={Type_of_tourist_place} store='Type_Of_Passengers' isRow={false} />
          </BottomSheetWrapper>
        );
      case 'place_of_residence':
        return (
          <BottomSheetWrapper title='محل اسکان'>
            <ListItem items={place_of_residence} store='' />
          </BottomSheetWrapper>
        );
      case 'means_of_travel':
        return (
          <BottomSheetWrapper title='وسیله سفر'>
            <ListItem items={means_of_travelItems} store='' />
          </BottomSheetWrapper>
        );
      case 'number_Of_Adult_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین بزرگسال'>
            <ListItem items={Number_Of_Passengers} store='' />
          </BottomSheetWrapper>
        );

      case 'number_Of_Child_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین کودک'>
            <ListItem items={Number_Of_Passengers} store='' />
          </BottomSheetWrapper>
        );
      case 'number_Of_Minor_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین خردسال'>
            <ListItem items={Number_Of_Passengers} store='' />
          </BottomSheetWrapper>
        );
      case 'sortBy':
        return (
          <BottomSheetWrapper title='محبوبیت نقطه'>
            <ListItem items={SortByItem} store='' />
          </BottomSheetWrapper>
        );
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex direction={'column'} gap={'40px'} display={{ initial: 'flex', md: 'none' }}>
        {/* ADDRESS */}
        <Wrapper title='آدرس مبدا'>
          <Card value='استان' onClick={() => handleClick('province')} />
          <Card value='شهر' onClick={() => handleClick('city')} />
        </Wrapper>

        <Wrapper title='آدرس مقصد'>
          <Card value='استان' onClick={() => handleClick('province')} />
          <Card value='شهر' onClick={() => handleClick('city')} />
        </Wrapper>

        {/* TIME AND DATE */}
        <Flex direction={'column'} gap={'20px'}>
          <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
          <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} />
        </Flex>

        {/* MORE */}
        <Accordion triggerText='تنظیمات بیشتر'>
          <Flex direction={'column'} gap={'30px'}>
            <Wrapper title='وسیله و اسکان'>
              <Card value='محل اسکان' onClick={() => handleClick('place_of_residence')} />
              <Card value='وسیله سفر' onClick={() => handleClick('means_of_travel')} />
            </Wrapper>
            <Wrapper title='گردشگری'>
              <Card value='نوع مکان گردشگری' onClick={() => handleClick('Type_of_tourist_place')} />
              <Card value='محبوبیت نقطه' onClick={() => handleClick('sortBy')} />
            </Wrapper>
            <Wrapper title='مسافران'>
              <Card value='تعداد مسافرین بزرگسال' onClick={() => handleClick('number_Of_Adult_Passengers')} />
              <Card value='تعداد مسافرین کودک' onClick={() => handleClick('number_Of_Child_Passengers')} />
              <Card value='تعداد مسافرین خردسال' onClick={() => handleClick('number_Of_Minor_Passengers')} />
              <Card value='نوع مسافران' onClick={() => handleClick('Type_Of_Passengers')} />
            </Wrapper>
          </Flex>
        </Accordion>
      </Flex>

      <BottomSheet isOpen={state.isOpen} onClose={() => setState({ key: '', isOpen: false })}>
        {renderElement(state.key)}
      </BottomSheet>
    </FormProvider>
  );
};

export default MobilePlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */
