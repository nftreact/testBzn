'use client';

import React, { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField as RadixTextField } from '@radix-ui/themes';

/**
 * props
 * _______________________________________________________________________________
 */
type TextFieldComponentProps = {
  name: string;
  placeholder: string;
} & Omit<React.ComponentProps<typeof RadixTextField.Root>, 'size' | 'name'>;

const TextFieldComponent = forwardRef<HTMLInputElement, TextFieldComponentProps>(
  ({ name, placeholder, ...rest }, ref) => {
    const { control } = useFormContext();

    return (
      <Controller
        name={name}
        control={control}
        render={() => <RadixTextField.Root placeholder={placeholder} {...ref} {...rest} />}
      />
    );
  }
);

TextFieldComponent.displayName = 'TextFieldComponent';

export default TextFieldComponent;
