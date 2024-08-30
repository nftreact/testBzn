'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
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
import { Accordion, Button, Flex, Grid, Text } from '@/libs/primitives';
import { DatePicker, TimePicker } from '@/libs/shared';
import { plannerValidationSchema } from '@/validations/planner';

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
    resolver: yupResolver(plannerValidationSchema) as any,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'} display={{ initial: 'none', md: 'flex' }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={'20px'} direction={'column'}>
            <Wrapper title='آدرس مبدا'>
              <Container>
                <SelectCompnent
                  errorText={errors.origin?.province?.message}
                  items={cityItem}
                  placeholder={'استان'}
                  store='origin[province]'
                />
                <SelectCompnent
                  errorText={errors.origin?.city?.message}
                  items={cityItem}
                  placeholder={'شهر'}
                  store='origin[city]'
                />
              </Container>
            </Wrapper>

            <Wrapper title='آدرس مبدا'>
              <Container>
                <SelectCompnent
                  errorText={errors.destination?.province?.message}
                  items={cityItem}
                  placeholder={'استان'}
                  store='destination[province]'
                />
                <SelectCompnent
                  errorText={errors.destination?.city?.message}
                  items={cityItem}
                  placeholder={'شهر'}
                  store='destination[city]'
                />
              </Container>
            </Wrapper>

            {/* TIME AND DATE */}
            <Flex direction={'column'} gap={'5px'}>
              <Text style={{ paddingRight: '10px' }}>تاریخ و ساعت حرکت</Text>
              <Grid columns={'2'} gap={'10px'}>
                <DatePicker
                  errorText={errors.startTime?.date?.message}
                  placeholder='تاریخ'
                  name='startTime[date]'
                  inputMode='none'
                />
                <TimePicker
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
                  errorText={errors.endTime?.date?.message}
                  placeholder='تاریخ'
                  name='endTime[date]'
                  inputMode='none'
                />
                <TimePicker
                  errorText={errors.endTime?.time?.message}
                  placeholder='ساعت'
                  name='endTime[time]'
                  inputMode='none'
                />
              </Grid>
            </Flex>
            {/* <TimeAndDate dateStore={'startTime[date]'} timeStore={'startTime[time]'} />
        <TimeAndDate dateStore={'endTime[date]'} timeStore={'endTime[time]'} /> */}

            {/* MEANS OF TRAVEL */}
            <Wrapper title='وسیله و اسکان'>
              <Container>
                <SelectCompnent
                  errorText={errors.means_of_travel?.message}
                  items={means_of_travelItems}
                  placeholder={'وسیله سفر'}
                  store='means_of_travel'
                />
                <SelectCompnent
                  errorText={errors.place_of_residence?.message}
                  items={place_of_residence}
                  placeholder={'محل اسکان'}
                  store='place_of_residence'
                />
              </Container>
            </Wrapper>

            {/* Type_of_tourist_place */}
            <Container display={{ initial: 'none', md: 'flex' }}>
              <Flex gap={'20px'} width={'50%'} direction={'column'}>
                <Text style={{ paddingRight: '5px' }}>گردشگری</Text>
                <Flex align={'center'} wrap={'wrap'}>
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
                  errorText={errors.number_Of_Adult_Passengers?.message}
                  placeholder={'تعداد مسافرین بزرگسال'}
                  store='number_Of_Adult_Passengers'
                />
                <SelectCompnent
                  errorText={errors.number_Of_Child_Passengers?.message}
                  items={Number_Of_Passengers}
                  placeholder={'تعداد مسافرین کودک'}
                  store='number_Of_Child_Passengers'
                />
              </Container>

              <Container>
                <Flex width={{ initial: '100%', md: '50%' }}>
                  <SelectCompnent
                    errorText={errors.number_Of_Minor_Passengers?.message}
                    items={Number_Of_Passengers}
                    placeholder={'تعداد مسافرین خردسال'}
                    store='number_Of_Minor_Passengers'
                  />
                </Flex>
                {/* sortby */}
                <Flex width={{ initial: '100%', md: '50%' }}>
                  <SelectCompnent
                    errorText={errors.Type_Of_Passengers?.message}
                    items={SortByItem}
                    placeholder={'نمایش بر اساس'}
                    store='sortBy'
                  />
                </Flex>
              </Container>
            </Wrapper>

            <ButtonStyle type='submit' variant='soft' size={'4'}>
              ساخت برنامه
            </ButtonStyle>
          </Flex>
        </form>
        {/* ADDRESS */}
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
  margin-bottom: 10px;
`;

const ButtonStyle = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    color: #fcfcfd;
    border-radius: 12px;
    padding: 12px 35px;
    background-color: #009c9b;
    max-height: 40px;
    font-size: 14px;
    margin: auto;
  }
`;
