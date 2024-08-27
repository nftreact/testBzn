'use client';

import React, { forwardRef } from 'react';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useFormContext } from 'react-hook-form';
import { IoMdTime } from 'react-icons/io';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

import { styled } from 'styled-components';

import { Flex } from '../primitives';

type TimePickerProps = {
  inputMode: 'text' | 'none';
  name: string;
} & React.HTMLAttributes<HTMLInputElement>;

/**
 * props
 * _______________________________________________________________________________
 */

const TimePickerComponent = forwardRef<HTMLInputElement, TimePickerProps>(({ name }) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Root position={'relative'} align={'center'}>
          <DatePicker
            inputMode='none'
            inputClass='input-class'
            locale={persian_fa}
            placeholder='ساعت'
            onChange={(dateObject: DateObject | DateObject[] | any) => {
              setValue(name, dateObject.format());
            }}
            key={'time'}
            disableDayPicker
            format='HH:mm:ss'
            plugins={[<TimePicker key={'time'} />]}
          />
          <IoMdTime style={{ position: 'absolute', left: '20px', scale: 1.2 }} />
        </Root>
      )}
    />
  );
});

TimePickerComponent.displayName = 'TimePickerComponent';

export default TimePickerComponent;

/**
 * styled-component
 * _______________________________________________________________________________
 */
const Root = styled(Flex)`
  & .rmdp-container {
    display: flex;
    width: -webkit-fill-available !important;
    flex: 1;
  }

  .input-class {
    padding: 15px 11px;
    border-radius: 8px;
    border: 1px solid #6a6a6a9b;
    text-align: right;
    background-color: #fff;
    width: -webkit-fill-available;
  }
`;
