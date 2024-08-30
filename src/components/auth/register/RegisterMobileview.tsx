'use client';

import { useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';

import { yupResolver } from '@hookform/resolvers/yup';
import { TextArea } from '@radix-ui/themes';
import styled from 'styled-components';

import BottomSheetWrapper from '@/components/planner/mobile-view/BottomSheetWrapper';
import CheckboxGroup from '@/components/planner/shared/CheckboxGroup';
import { cityItem, expertise, genderItems, languages } from '@/constants/auth/register';
import { Button, Checkbox, Flex, Grid, Text, TextField } from '@/libs/primitives';
import BottomSheet from '@/libs/primitives/components/BottomSheet';
import { BottomsheetListItems, DatePicker, ErrorText, ImagePicker } from '@/libs/shared';
import CallToActionBottomSheet from '@/libs/shared/CallToActionBottomSheet';
import RegisterValidationSchema from '@/validations/register';

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
  const [state, setState] = useState<{ key: any; isOpen: boolean }>({
    isOpen: false,
    key: '',
  });
  const methods = useForm<FormData>({
    defaultValues: defaultFormValues,
    resolver: yupResolver(RegisterValidationSchema) as any,
  });
  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  const renderElement = (key: any) => {
    switch (key) {
      case 'gender':
        return (
          <BottomSheetWrapper title='جنسیت'>
            <BottomsheetListItems items={genderItems} store='gender' />
          </BottomSheetWrapper>
        );
      case 'Province':
        return (
          <BottomSheetWrapper title='استان'>
            <BottomsheetListItems items={cityItem} store='Province' />
          </BottomSheetWrapper>
        );
      case 'city':
        return (
          <BottomSheetWrapper title='شهر'>
            <BottomsheetListItems items={cityItem} store='city' />
          </BottomSheetWrapper>
        );
      case 'specialtyOne':
        return (
          <BottomSheetWrapper title='تخصص اول'>
            <BottomsheetListItems items={expertise} store='specialtyOne' />
          </BottomSheetWrapper>
        );
      case 'specialtyTwo':
        return (
          <BottomSheetWrapper title='تخصص دوم'>
            <BottomsheetListItems items={expertise} store='specialtyTwo' />
          </BottomSheetWrapper>
        );
      case 'languages':
        return (
          <BottomSheetWrapper title='نوع مسافران'>
            <CheckboxGroup items={languages} store='languages' isRow={false} />
          </BottomSheetWrapper>
        );
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction={'column'}
          display={{ initial: 'flex', md: 'none' }}
          justify={'center'}
          p='16px'
          gap={'20px'}
        >
          <ImagePicker errorText={errors.image?.message} name='image'>
            <Image
              src={watch('image') ? (watch('image') as string) : DefaultImage}
              width={130}
              height={130}
              alt='register-image-uploader'
              style={{ borderRadius: watch('image') ? '50%' : '', objectFit: 'contain' }}
            />
          </ImagePicker>
          <TextField placeholder='نام' {...register('firstName')} errorText={errors.firstName?.message} />
          <TextField
            placeholder='نام خانوادگی'
            {...register('lastName')}
            errorText={errors.lastName?.message}
          />
          <DatePicker
            inputMode='none'
            placeholder='تاریخ تولد'
            name='birthDate'
            errorText={errors.birthDate?.message}
          />
          <CallToActionBottomSheet
            onClick={() => setState({ key: 'gender', isOpen: true })}
            value={'جنسیت'}
          />
          <TextField placeholder='ایمیل' {...register('email')} errorText={errors.email?.message} />
          <Controller
            name='isTourLeader'
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                label='تورلیدر'
                onCheckedChange={checked => field.onChange(checked)}
              />
            )}
          />
          {watch('isTourLeader') && (
            <>
              <ImagePicker errorText={errors.national_card_image?.message} name='national_card_image'>
                <ImageWrapper
                  width={'100%'}
                  position={'relative'}
                  style={{ backgroundColor: '#F2F2F2' }}
                  justify={'center'}
                  align={'center'}
                >
                  <Flex align={'center'} gap={'30px'} direction={'column'}>
                    <Text>تصویر کارت</Text>
                    <Text>svg icon</Text>
                  </Flex>
                  {watch('national_card_image') && (
                    <Image alt='National-card-image' fill src={watch('national_card_image') as string} />
                  )}
                </ImageWrapper>
              </ImagePicker>

              <Flex position={'relative'} gap={'10px'} direction={'column'}>
                <Text>لطفا مدت فعالیت خود را بر اساس سال وارد کنید.</Text>
                <TextField placeholder='مدت فعالیت' type='number' name='activityDuration' />
                <ErrorText text={errors.activityDuration?.message} />
              </Flex>
              <CallToActionBottomSheet
                onClick={() =>
                  setState({
                    key: 'Province',
                    isOpen: true,
                  })
                }
                value={'استان فعالیت'}
              />
              <CallToActionBottomSheet
                onClick={() =>
                  setState({
                    key: 'city',
                    isOpen: true,
                  })
                }
                value={'شهر فعالیت'}
              />
              <CallToActionBottomSheet
                onClick={() =>
                  setState({
                    isOpen: true,
                    key: 'specialtyOne',
                  })
                }
                value={' تخصص اول'}
              />
              <CallToActionBottomSheet
                onClick={() =>
                  setState({
                    isOpen: true,
                    key: 'specialtyTwo',
                  })
                }
                value={'تخصص دوم'}
              />
              <TextArea
                placeholder='درباره من'
                variant='soft'
                style={{ minHeight: '144px', backgroundColor: '#FCFDFC', border: '1px solid #00000033' }}
              />
              <Grid gap={'10px'} columns={'2'}>
                <DatePicker name='cardIssueDate' placeholder='صدور کارت' inputMode='none' />
                <DatePicker name='cardExpiryDate' placeholder='انقضای کارت' inputMode='none' />
              </Grid>
              <CallToActionBottomSheet
                onClick={() => setState({ key: 'languages', isOpen: true })}
                value={'تسلط بر زبان ها'}
              />
            </>
          )}
          <Button type='submit' size={'4'} variant='surface'>
            <Text>ثبت و ادامه</Text>
          </Button>
        </Flex>
      </form>
      <BottomSheet isOpen={state.isOpen} onClose={() => setState({ key: '', isOpen: false })}>
        {renderElement(state.key)}
      </BottomSheet>
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
