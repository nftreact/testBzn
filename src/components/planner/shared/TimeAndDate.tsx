'use client';

import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useFormContext } from 'react-hook-form';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

/**
 * props
 * _______________________________________________________________________________
 */

type TimeAndDateProps = {
  timeStore: string;
  dateStore: string;
};

const TimeAndDate = ({ dateStore, timeStore }: TimeAndDateProps) => {
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
      <Text style={{ paddingInline: '7px' }}>تاریخ و ساعت بازگشت</Text>
      <Flex gap={'20px'} justify={'between'}>
        <DatePicker
          type='button'
          inputClass='input-class'
          key={'date'}
          value={watch().endTime.date}
          placeholder='تاریخ'
          minDate={new Date()}
          calendar={persian}
          locale={persian_fa}
          calendarPosition='bottom-right'
          onChange={(dateObject: DateObject | DateObject[] | any) => {
            setValue(dateStore, dateObject.format());
          }}
        />
        <DatePicker
          type='button'
          inputClass='input-class'
          locale={persian_fa}
          placeholder='ساعت'
          onChange={(dateObject: DateObject | DateObject[] | any) => {
            setValue(timeStore, dateObject.format());
          }}
          key={'time'}
          disableDayPicker
          format='HH:mm:ss'
          plugins={[<TimePicker key={'time'} />]}
        />
      </Flex>
    </Root>
  );
};

export default TimeAndDate;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  & .rmdp-input {
    padding-block: 9px;
    border-radius: 8px;
    padding-right: 10px;
    width: 89%;

    @media (min-width: 768px) {
      width: -webkit-fill-available;
    }
  }
  & .rmdp-container {
    display: flex;
    flex: 1;
  }

  .input-class {
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    border: 1px solid #6a6a6a9b;
    text-align: right;
    background-color: #fff;
  }
`;
