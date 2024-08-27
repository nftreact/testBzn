'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Image from 'next/image';

import { Checkbox, TextArea } from '@radix-ui/themes';
import styled from 'styled-components';

import { Button, Flex, Grid, Text, TextField } from '@/libs/primitives';
import { DatePicker, ImagePicker } from '@/libs/shared';
import CallToActionBottomSheet from '@/libs/shared/CallToActionBottomSheet';

import DefaultImage from '../../../../public/image/imgae-uploader.png';
import { defaultFormValues, FormData } from './types';

/**
 * props
 * _______________________________________________________________________________
 */

const RegisterMobileview = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [image, setImage] = useState<any>(null);

  const methods = useForm<FormData>({
    defaultValues: defaultFormValues,
  });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const handleImagePicker = (value: string) => {
    console.log(value);
    setImage(value);
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex
        direction={'column'}
        display={{ initial: 'flex', md: 'none' }}
        justify={'center'}
        p='16px'
        gap={'20px'}
      >
        <ImagePicker handleImagePicker={handleImagePicker}>
          <Image
            src={image ? image : DefaultImage}
            width={130}
            height={130}
            alt='register-image-uploader'
            style={{ borderRadius: image ? '50%' : '' }}
          />
        </ImagePicker>
        <TextField placeholder='نام' name='firstName' />
        <TextField placeholder='نام خانوادگی' name='lastName' />
        {/* <TextField placeholder='تاریخ تولد'   /> */}
        <CallToActionBottomSheet value={'جنسیت'} />
        <TextField placeholder='ایمیل' name='email' type='email' />

        <Text as='label' size='2'>
          <Flex gap='2'>
            <Checkbox name='isTourLeader' />
            تورلیدر{' '}
          </Flex>
        </Text>

        <ImageWrapper justify={'center'} align={'center'}>
          <Flex align={'center'} gap={'30px'} direction={'column'}>
            <Text>تصویر کارت</Text>
            <Text>svg icon</Text>
          </Flex>
        </ImageWrapper>
        <Flex gap={'10px'} direction={'column'}>
          <Text>لطفا مدت فعالیت خود را بر اساس سال وارد کنید.</Text>
          <TextField placeholder='مدت فعالیت' type='number' name='activityDuration' />
        </Flex>
        <CallToActionBottomSheet value={'استان فعالیت'} />
        <CallToActionBottomSheet value={'استان فعالیت'} />
        <CallToActionBottomSheet value={' تخصص اول'} />
        <CallToActionBottomSheet value={'تخصص دوم'} />
        <TextArea placeholder='درباره من' variant='soft' style={{ minHeight: '144px' }} />
        <Grid gap={'10px'} columns={'2'}>
          <DatePicker name='cardIssueDate' placeholder='صدور کارت' inputMode='none' />
          <DatePicker name='cardExpiryDate' placeholder='انقضای کارت' inputMode='none' />
        </Grid>
        <CallToActionBottomSheet value={'تسلط بر زبان ها'} />
        <Button size={'4'} variant='surface'>
          <Text>ثبت و ادامه</Text>
        </Button>
      </Flex>
    </FormProvider>
  );
};

export default RegisterMobileview;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const ImageWrapper = styled(Flex)`
  min-height: 160px;
  border: 1px dashed #00000063;
  border-radius: 4px;
`;
