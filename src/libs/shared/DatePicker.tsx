'use client';

import React, { forwardRef } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Controller, useFormContext } from 'react-hook-form';
import { LuCalendarCheck } from 'react-icons/lu';
import DatePicker, { DateObject } from 'react-multi-date-picker';

import { Flex } from '@radix-ui/themes';
import { styled } from 'styled-components';

/**
 * props
 * _______________________________________________________________________________
 */
type DatePickerComponent = {
  inputMode: 'none' | 'text';
  name: string;
  minDate?: Date;
  placeholder?: string;
  calendarPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
} & React.HTMLAttributes<HTMLInputElement>;

const DatePickerComponent = forwardRef<HTMLInputElement, DatePickerComponent>(
  ({ name, minDate, placeholder = 'تاریخ', calendarPosition = 'bottom-right', inputMode, ...rest }, ref) => {
    const { control, setValue } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Root position={'relative'} align={'center'}>
            <DatePicker
              inputMode={inputMode}
              inputClass={`input-class`}
              {...rest}
              {...ref}
              //   inputClass='input-class'
              value={field.value}
              placeholder={placeholder}
              minDate={minDate || new Date()}
              calendar={persian}
              locale={persian_fa}
              calendarPosition={calendarPosition}
              onChange={(dateObject: DateObject | DateObject[] | null) => {
                const formattedDate = Array.isArray(dateObject)
                  ? dateObject.map(d => d.format()).join(', ')
                  : dateObject?.format() || '';
                setValue(name, formattedDate);
              }}
            />
            <LuCalendarCheck style={{ position: 'absolute', left: '20px' }} />
          </Root>
        )}
      />
    );
  }
);

DatePickerComponent.displayName = 'DatePickerComponent';

export default DatePickerComponent;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  input {
    width: -webkit-fill-available !important;
    padding: 15px 20px !important;
  }

  & .rmdp-container {
    display: flex;
    width: -webkit-fill-available !important;
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
