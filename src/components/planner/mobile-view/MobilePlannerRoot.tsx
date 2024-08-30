'use client';

import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { styled } from 'styled-components';

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
import { Accordion, Button, Flex, Grid, Text } from '@/libs/primitives';
import BottomSheet from '@/libs/primitives/components/BottomSheet';
import { BottomsheetListItems, DatePicker, TimePicker } from '@/libs/shared';
import CallToActionBottomSheet from '@/libs/shared/CallToActionBottomSheet';
import { plannerValidationSchema } from '@/validations/planner';

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
    resolver: yupResolver(plannerValidationSchema) as any,
  });

  const {
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClick = (key: key) => {
    setState({
      isOpen: true,
      key,
    });
  };

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  const renderElement = (key: key) => {
    switch (key) {
      case 'origin[province]':
        return (
          <BottomSheetWrapper title='استان'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('origin.province');
                setState({ key: '', isOpen: false });
              }}
              items={cityItem}
              store='origin[province]'
            />
          </BottomSheetWrapper>
        );
      case 'origin[city]':
        return (
          <BottomSheetWrapper title='شهر'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('origin.city');
                setState({ key: '', isOpen: false });
              }}
              items={cityItem}
              store='origin[city]'
            />
          </BottomSheetWrapper>
        );
      case 'destination[province]':
        return (
          <BottomSheetWrapper title='استان'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('destination.province');
                setState({ key: '', isOpen: false });
              }}
              items={cityItem}
              store='destination[province]'
            />
          </BottomSheetWrapper>
        );
      case 'destination[city]':
        return (
          <BottomSheetWrapper title='شهر'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('destination.city');
                setState({ key: '', isOpen: false });
              }}
              items={cityItem}
              store='destination[city]'
            />
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
            <BottomsheetListItems
              onClick={() => {
                clearErrors('place_of_residence');
                setState({ key: '', isOpen: false });
              }}
              items={place_of_residence}
              store='place_of_residence'
            />
          </BottomSheetWrapper>
        );
      case 'means_of_travel':
        return (
          <BottomSheetWrapper title='وسیله سفر'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('place_of_residence');
                setState({ key: '', isOpen: false });
              }}
              items={means_of_travelItems}
              store='place_of_residence'
            />
          </BottomSheetWrapper>
        );
      case 'number_Of_Adult_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین بزرگسال'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('number_Of_Adult_Passengers');
                setState({ key: '', isOpen: false });
              }}
              items={Number_Of_Passengers}
              store='number_Of_Adult_Passengers'
            />
          </BottomSheetWrapper>
        );

      case 'number_Of_Child_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین کودک'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('number_Of_Child_Passengers');
                setState({ key: '', isOpen: false });
              }}
              items={Number_Of_Passengers}
              store='number_Of_Child_Passengers'
            />
          </BottomSheetWrapper>
        );
      case 'number_Of_Minor_Passengers':
        return (
          <BottomSheetWrapper title='تعداد مسافرین خردسال'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('number_Of_Minor_Passengers');
                setState({ key: '', isOpen: false });
              }}
              items={Number_Of_Passengers}
              store='number_Of_Minor_Passengers'
            />
          </BottomSheetWrapper>
        );
      case 'sortBy':
        return (
          <BottomSheetWrapper title='محبوبیت نقطه'>
            <BottomsheetListItems
              onClick={() => {
                clearErrors('sortBy');
                setState({ key: '', isOpen: false });
              }}
              items={SortByItem}
              store='sortBy'
            />
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction={'column'} gap={'20px'} display={{ initial: 'flex', md: 'none' }}>
          {/* ADDRESS */}
          <Wrapper title='آدرس مبدا'>
            <CallToActionBottomSheet
              errorText={errors.origin?.province?.message}
              value='استان'
              onClick={() => handleClick('origin[province]')}
            />
            <CallToActionBottomSheet
              errorText={errors.origin?.city?.message}
              value='شهر'
              onClick={() => handleClick('origin[city]')}
            />
          </Wrapper>

          <Wrapper title='آدرس مقصد'>
            <CallToActionBottomSheet
              errorText={errors.destination?.province?.message}
              value='استان'
              onClick={() => handleClick('destination[province]')}
            />
            <CallToActionBottomSheet
              errorText={errors.destination?.city?.message}
              value='شهر'
              onClick={() => handleClick('destination[city]')}
            />
          </Wrapper>

          {/* TIME AND DATE */}
          <Flex direction={'column'} gap={'5px'}>
            <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت حرکت</Text>
            <Grid columns={'2'} gap={'10px'}>
              <DatePicker
                onClick={() => clearErrors('startTime.date')}
                errorText={errors.startTime?.date?.message}
                placeholder='تاریخ'
                name='startTime[date]'
                inputMode='none'
              />
              <TimePicker
                onClick={() => clearErrors('startTime.time')}
                errorText={errors.startTime?.time?.message}
                placeholder='ساعت'
                name='startTime[time]'
                inputMode='none'
              />
            </Grid>
          </Flex>
          <Flex direction={'column'} gap={'5px'}>
            <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت بازگشت</Text>
            <Grid columns={'2'} gap={'10px'}>
              <DatePicker
                onClick={() => clearErrors('endTime.date')}
                errorText={errors.endTime?.date?.message}
                placeholder='تاریخ'
                name='endTime[date]'
                inputMode='none'
              />
              <TimePicker
                onClick={() => clearErrors('endTime.time')}
                errorText={errors.endTime?.time?.message}
                placeholder='ساعت'
                name='endTime[time]'
                inputMode='none'
              />
            </Grid>
          </Flex>

          {/* MORE */}
          <Accordion triggerText='تنظیمات بیشتر'>
            <Flex direction={'column'} gap={'30px'}>
              <Wrapper title='وسیله و اسکان'>
                <CallToActionBottomSheet
                  errorText={errors.place_of_residence?.message}
                  value='محل اسکان'
                  onClick={() => handleClick('place_of_residence')}
                />
                <CallToActionBottomSheet
                  errorText={errors.means_of_travel?.message}
                  value='وسیله سفر'
                  onClick={() => handleClick('means_of_travel')}
                />
              </Wrapper>
              <Wrapper title='گردشگری'>
                <CallToActionBottomSheet
                  errorText={errors.Type_of_tourist_place?.message}
                  value='نوع مکان گردشگری'
                  onClick={() => handleClick('Type_of_tourist_place')}
                />
                <CallToActionBottomSheet
                  errorText={errors.sortBy?.message}
                  value='محبوبیت نقطه'
                  onClick={() => handleClick('sortBy')}
                />
              </Wrapper>
              <Wrapper title='مسافران'>
                <CallToActionBottomSheet
                  errorText={errors.number_Of_Adult_Passengers?.message}
                  value='تعداد مسافرین بزرگسال'
                  onClick={() => handleClick('number_Of_Adult_Passengers')}
                />
                <CallToActionBottomSheet
                  errorText={errors.number_Of_Child_Passengers?.message}
                  value='تعداد مسافرین کودک'
                  onClick={() => handleClick('number_Of_Child_Passengers')}
                />
                <CallToActionBottomSheet
                  errorText={errors.number_Of_Minor_Passengers?.message}
                  value='تعداد مسافرین خردسال'
                  onClick={() => handleClick('number_Of_Minor_Passengers')}
                />
                <CallToActionBottomSheet
                  errorText={errors.Type_Of_Passengers?.message}
                  value='نوع مسافران'
                  onClick={() => handleClick('Type_Of_Passengers')}
                />
              </Wrapper>
            </Flex>
          </Accordion>
          <ButtonStyle type='submit' variant='soft' size={'4'}>
            ساخت برنامه
          </ButtonStyle>
        </Flex>
      </form>

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

const ButtonStyle = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    color: #fcfcfd;
    border-radius: 12px;
    padding: 12px 15px;
    background-color: #009c9b;
    max-height: 40px;
    font-size: 14px;
  }
`;
