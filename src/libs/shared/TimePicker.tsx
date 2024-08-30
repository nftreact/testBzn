'use client';

import React, { forwardRef } from 'react';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useFormContext } from 'react-hook-form';
import { IoMdTime } from 'react-icons/io';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

import { styled } from 'styled-components';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';

type TimePickerProps = {
  errorText?: string;
  inputMode: 'text' | 'none';
  name: string;
} & React.HTMLAttributes<HTMLInputElement>;

/**
 * props
 * _______________________________________________________________________________
 */

const TimePickerComponent = forwardRef<HTMLInputElement, TimePickerProps>(({ name, errorText }) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Root pb={'10px'} position={'relative'} align={'center'}>
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
          <IoMdTime style={{ position: 'absolute', left: '20px', scale: 1.2, fill: '#C3A437' }} />
          <ErrorText text={errorText} />
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
    --default-font-family: var(--yekan-font) !important;
    font-family: var(--yekan-font) !important;
    border-radius: 8px;
    text-align: right;
    background-color: #f9f9fb;
    width: -webkit-fill-available;
    padding: 15px 16px;
    outline: none;
    border: none;
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
      0 0 0 0.5px var(--black-a1),
      0 1px 1px 0 var(--gray-a2),
      0 2px 1px -1px var(--black-a1),
      0 1px 3px 0 var(--black-a1);
  }
`;
