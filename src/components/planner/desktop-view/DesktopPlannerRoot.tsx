'use client';

import { FormProvider, useForm } from 'react-hook-form';

import styled from 'styled-components';

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
import { DatePicker, TimePicker } from '@/libs/shared';

import Checkbox from '../shared/CheckboxGroup';
import Wrapper from '../shared/Wrapper';
import SelectCompnent from './Select';

/**
 * props
 * _______________________________________________________________________________
 */

const PlannerRoot = () => {
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
  const methods = useForm<FormData>({
    defaultValues: defaultFormValues,
  });

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex display={{ initial: 'none', md: 'flex' }} gap={'16px'} direction={'column'}>
      <FormProvider {...methods}>
        {/* ADDRESS */}
        <Wrapper title='آدرس مبدا'>
          <Container>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='origin[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='origin[city]' />
          </Container>
        </Wrapper>

        <Wrapper title='آدرس مبدا'>
          <Container>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='destination[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='destination[city]' />
          </Container>
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
        {/* <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} /> */}

        {/* MEANS OF TRAVEL */}
        <Wrapper title='وسیله و اسکان'>
          <Container>
            <SelectCompnent items={means_of_travelItems} placeholder={'وسیله سفر'} store='means_of_travel' />
            <SelectCompnent items={place_of_residence} placeholder={'محل اسکان'} store='place_of_residence' />
          </Container>
        </Wrapper>

        {/* Type_of_tourist_place */}
        <Container display={{ initial: 'none', md: 'flex' }}>
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
        </Container>

        <Flex display={{ initial: 'flex', md: 'none' }}>
          <Accordion triggerText='نوع مسافران'>
            <Checkbox isRow={false} items={Type_Of_Passengers} store='Type_Of_Passengers' />
          </Accordion>
        </Flex>

        {/* number_Of_Adult_Passengers */}
        <Wrapper title='مسافران'>
          <Container>
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
          </Container>

          <Container>
            <Flex width={{ initial: '100%', md: '50%' }}>
              <SelectCompnent
                items={Number_Of_Passengers}
                placeholder={'تعداد مسافرین خردسال'}
                store='number_Of_Minor_Passengers'
              />
            </Flex>
            {/* sortby */}
            <Flex width={{ initial: '100%', md: '50%' }}>
              <SelectCompnent items={SortByItem} placeholder={'نمایش بر اساس'} store='sortBy' />
            </Flex>
          </Container>
        </Wrapper>
      </FormProvider>
    </Flex>
  );
};

export default PlannerRoot;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Container = styled(Flex)`
  width: 100%;
  gap: 20px;
`;
