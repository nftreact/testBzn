import React, { ReactNode, useState } from 'react';
import Dropzone from 'react-dropzone';

import { Flex } from '../primitives';

type Props = {
  children: ReactNode;
  handleImagePicker: (value: string) => void;
  defaultImage?: string;
};

export const urlToObject = async (image: string) => {
  const response = await fetch(image);
  const blob = await response.blob();
  const file = new File([blob], `${image}`, { type: 'image/*' });
  return file;
};

const ImagePicker = ({ children, handleImagePicker, defaultImage }: Props) => {
  const [image, setImage] = useState(defaultImage);

  const onDrop = (files: File[]) => {
    if (files && files[0]) {
      setImage(URL.createObjectURL(files[0]));
      handleImagePicker(image as string);
    }
  };

  console.log(image, 'image');

  return (
    <>
      <Dropzone
        onDrop={onDrop}
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
    </>
  );
};

export default ImagePicker;
