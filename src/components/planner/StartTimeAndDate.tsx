'use client';

import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useFormContext } from 'react-hook-form';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/analog_time_picker';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

const StartTimeAndDate = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { setValue, watch } = useFormContext();

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root gap={'8px'} direction={'column'}>
      <Text style={{ paddingInline: '7px' }}>تاریخ و ساعت حرکت</Text>
      <Flex gap={'10px'} justify={'between'}>
        <DatePicker
          key={'date'}
          placeholder='تاریخ'
          value={watch().startTime.date}
          minDate={new Date()}
          calendar={persian}
          locale={persian_fa}
          calendarPosition='bottom-right'
          onChange={(dateObject: DateObject | DateObject[] | any) => {
            console.log(dateObject.format(), 'dateObjectdateObjectdateObject');
            setValue('startTime[date]', dateObject.format());
          }}
        />
        <DatePicker
          key={'time'}
          locale={persian_fa}
          placeholder='ساعت'
          onChange={(dateObject: DateObject | DateObject[] | any) => {
            console.log(dateObject.format(), 'time');
            setValue('startTime[time]', dateObject.format());
          }}
          disableDayPicker
          format='HH:mm:ss'
          plugins={[<TimePicker key={'time'} />]}
        />
      </Flex>
    </Root>
  );
};

export default StartTimeAndDate;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  & .rmdp-input {
    width: -webkit-fill-available;
    padding: 9px 14px;
    border-radius: 8px;
  }
  & .rmdp-container {
    display: flex;
    flex: 1;
  }
`;
