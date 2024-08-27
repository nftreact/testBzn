'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { defaultFormValues, FormData } from '@/components/planner/type';
import {
  cityItem,
  means_of_travelItems,
  Number_Of_Passengers,
  place_of_residence,
  SortByItem,
  Type_Of_Passengers,
  Type_of_tourist_place,
} from '@/constants/planner/planner';
import { Accordion, Flex, Grid, Text } from '@/libs/primitives';
import BottomSheet from '@/libs/primitives/components/BottomSheet';
import { BottomsheetListItems, DatePicker, TimePicker } from '@/libs/shared';
import CallToActionBottomSheet from '@/libs/shared/CallToActionBottomSheet';

import Checkbox from '../shared/CheckboxGroup';
import Wrapper from '../shared/Wrapper';
import BottomSheetWrapper from './BottomSheetWrapper';

/**
 * props
 * _______________________________________________________________________________
 */

type key =
  | 'origin[province]'
  | 'origin[city]'
  | 'destination[province]'
  | 'destination[city]'
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

  const methods = useForm<FormData>({
    defaultValues: defaultFormValues,
  });

  const handleClick = (key: key) => {
    setState({
      isOpen: true,
      key,
    });
  };

  const renderElement = (key: key) => {
    switch (key) {
      case 'origin[province]':
        return (
          <BottomSheetWrapper title='استان'>
            <BottomsheetListItems items={cityItem} store='origin[province]' />
          </BottomSheetWrapper>
        );
      case 'origin[city]':
        return (
          <BottomSheetWrapper title='شهر'>
            <BottomsheetListItems items={cityItem} store='origin[city]' />
          </BottomSheetWrapper>
        );
      case 'destination[province]':
        return (
          <BottomSheetWrapper title='استان'>
            <BottomsheetListItems items={cityItem} store='destination[province]' />
          </BottomSheetWrapper>
        );
      case 'destination[city]':
        return (
          <BottomSheetWrapper title='شهر'>
            <BottomsheetListItems items={cityItem} store='destination[city]' />
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
            <BottomsheetListItems items={place_of_residence} store='place_of_residence' />
          </BottomSheetWrapper>
        );
      case 'means_of_travel':
        return (
          <BottomSheetWrapper title='وسیله سفر'>
            <BottomsheetListItems items={means_of_travelItems} store='place_of_residence' />
          </BottomSheetWrapper>
        );
      case 'number_Of_Adult_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین بزرگسال'>
            <BottomsheetListItems items={Number_Of_Passengers} store='number_Of_Adult_Passengers' />
          </BottomSheetWrapper>
        );

      case 'number_Of_Child_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین کودک'>
            <BottomsheetListItems items={Number_Of_Passengers} store='number_Of_Child_Passengers' />
          </BottomSheetWrapper>
        );
      case 'number_Of_Minor_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین خردسال'>
            <BottomsheetListItems items={Number_Of_Passengers} store='number_Of_Minor_Passengers' />
          </BottomSheetWrapper>
        );
      case 'sortBy':
        return (
          <BottomSheetWrapper title='محبوبیت نقطه'>
            <BottomsheetListItems items={SortByItem} store='sortBy' />
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
      <Flex direction={'column'} gap={'20px'} display={{ initial: 'flex', md: 'none' }}>
        {/* ADDRESS */}
        <Wrapper title='آدرس مبدا'>
          <CallToActionBottomSheet value='استان' onClick={() => handleClick('origin[province]')} />
          <CallToActionBottomSheet value='شهر' onClick={() => handleClick('origin[city]')} />
        </Wrapper>

        <Wrapper title='آدرس مقصد'>
          <CallToActionBottomSheet value='استان' onClick={() => handleClick('destination[province]')} />
          <CallToActionBottomSheet value='شهر' onClick={() => handleClick('destination[city]')} />
        </Wrapper>

        {/* TIME AND DATE */}
        <Flex direction={'column'} gap={'5px'}>
          <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت حرکت</Text>
          <Grid columns={'2'} gap={'10px'}>
            <DatePicker placeholder='تاریخ' name='startTime[date]' inputMode='none' />
            <TimePicker placeholder='ساعت' name='startTime[time]' inputMode='none' />
          </Grid>
        </Flex>
        <Flex direction={'column'} gap={'5px'}>
          <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت بازگشت</Text>
          <Grid columns={'2'} gap={'10px'}>
            <DatePicker placeholder='تاریخ' name='endTime[date]' inputMode='none' />
            <TimePicker placeholder='ساعت' name='endTime[time]' inputMode='none' />
          </Grid>
        </Flex>

        {/* MORE */}
        <Accordion triggerText='تنظیمات بیشتر'>
          <Flex direction={'column'} gap={'30px'}>
            <Wrapper title='وسیله و اسکان'>
              <CallToActionBottomSheet value='محل اسکان' onClick={() => handleClick('place_of_residence')} />
              <CallToActionBottomSheet value='وسیله سفر' onClick={() => handleClick('means_of_travel')} />
            </Wrapper>
            <Wrapper title='گردشگری'>
              <CallToActionBottomSheet
                value='نوع مکان گردشگری'
                onClick={() => handleClick('Type_of_tourist_place')}
              />
              <CallToActionBottomSheet value='محبوبیت نقطه' onClick={() => handleClick('sortBy')} />
            </Wrapper>
            <Wrapper title='مسافران'>
              <CallToActionBottomSheet
                value='تعداد مسافرین بزرگسال'
                onClick={() => handleClick('number_Of_Adult_Passengers')}
              />
              <CallToActionBottomSheet
                value='تعداد مسافرین کودک'
                onClick={() => handleClick('number_Of_Child_Passengers')}
              />
              <CallToActionBottomSheet
                value='تعداد مسافرین خردسال'
                onClick={() => handleClick('number_Of_Minor_Passengers')}
              />
              <CallToActionBottomSheet
                value='نوع مسافران'
                onClick={() => handleClick('Type_Of_Passengers')}
              />
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
