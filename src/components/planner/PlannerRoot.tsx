'use client';

import { FormProvider, useForm } from 'react-hook-form';

import styled from 'styled-components';

import {
  cityItem,
  means_of_travelItems,
  Number_Of_Passengers,
  place_of_residence,
  SortByItem,
  Type_Of_Passengers,
  Type_of_tourist_place,
} from '@/constants/planner/planner';
import { Flex, Text } from '@/libs/primitives';

import Checkbox from './CheckboxGroup';
import SelectCompnent from './Select';
import SelectWrapper from './SelectWrapper';
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
    <Flex gap={'16px'} direction={'column'}>
      <FormProvider {...methods}>
        {/* ADDRESS */}
        <SelectWrapper title='آدرس مبدا'>
          <Container>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='origin[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='origin[city]' />
          </Container>
        </SelectWrapper>
        <SelectWrapper title='آدرس مبدا'>
          <Container>
            <SelectCompnent items={cityItem} placeholder={'استان'} store='destination[province]' />
            <SelectCompnent items={cityItem} placeholder={'شهر'} store='destination[city]' />
          </Container>
        </SelectWrapper>
        {/* TIME AND DATE */}
        <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} />
        {/* MEANS OF TRAVEL */}
        <SelectWrapper title='وسیله و اسکان'>
          <Container>
            <SelectCompnent items={means_of_travelItems} placeholder={'وسیله سفر'} store='means_of_travel' />
            <SelectCompnent items={place_of_residence} placeholder={'محل اسکان'} store='place_of_residence' />
          </Container>
        </SelectWrapper>
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
        {/* number_Of_Adult_Passengers */}
        <SelectWrapper title='مسافران'>
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
        </SelectWrapper>
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
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
