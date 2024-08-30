import React, { ReactNode } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';

type Props = {
  name: string;
  children: ReactNode;
  defaultImage?: string;
  errorText?: string;
};

export const urlToObject = async (image: string) => {
  const response = await fetch(image);
  const blob = await response.blob();
  const file = new File([blob], `${image}`, { type: 'image/*' });
  return file;
};

const ImagePicker = ({ name, children, errorText }: Props) => {
  const { control } = useFormContext();

  const onDrop = (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      onChange(URL.createObjectURL(selectedImage) as any); // Update the form state with the selected file
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Flex position={'relative'} direction={'column'} pb='10px'>
          <Dropzone
            onDrop={files => onDrop(files, field.onChange)}
            accept={{
              'image/*': ['.jpeg', '.png'],
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Flex gap={'2'} justify={'center'} direction={'column'} align={'center'}>
                  {children}
                </Flex>
              </div>
            )}
          </Dropzone>
          {errorText && <ErrorText text={errorText} />}
        </Flex>
      )}
    />
  );
};

export default ImagePicker;
