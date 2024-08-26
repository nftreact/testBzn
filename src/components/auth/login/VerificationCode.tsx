'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@radix-ui/themes';
import styled from 'styled-components';
import * as Yup from 'yup';

import { Button, Flex, Heading, Text } from '@/libs/primitives';

import Timer from './Timer';

/**
 * yup validation
 * _______________________________________________________________________________
 */
interface IFormInput {
  verificationCode: string;
}

const VERIFICATION_CODE_LENGTH = 6;
const persianEnglishDigitRegex = /^[0-9۰-۹]+$/;
const validationSchema = Yup.object().shape({
  verificationCode: Yup.string()
    .matches(persianEnglishDigitRegex, 'کد تأیید مورد نیاز است')
    .length(VERIFICATION_CODE_LENGTH, `کد باید دقیقاً ۶ رقمی باشد`)
    .required('کد تأیید مورد نیاز است'),
});

const VerificationCode = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isEnd, setIsEnd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    // Handle verification logic here
  };

  const handleEndTime = (value: boolean) => {
    setIsEnd(value);
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Flex width={'100%'} direction={'column'} height={'100vh'}>
        <Container
          p={'24px 16px'}
          width={{ initial: '100%' }}
          maxWidth={{ initial: '100%', md: '500px' }}
          m='auto'
          justify={'between'}
          direction={'column'}
          gap={'50px'}
        >
          <Heading m={'auto'}>logo</Heading>
          <Flex direction={'column'} gap={'16px'}>
            <Text>برای ورود به حساب کاربری شماره تماس خود را وارد کنید. </Text>
            <Flex pb={'18px'} position={'relative'} width={'100%'} direction={'column'}>
              <TextField.Root
                autoFocus
                id='verificationCode'
                type='text'
                {...register('verificationCode')}
                maxLength={VERIFICATION_CODE_LENGTH}
                size={'3'}
                placeholder='کد تایید'
              ></TextField.Root>
              {errors.verificationCode && (
                <Text
                  style={{
                    color: 'red',
                    position: 'absolute',
                    bottom: '-4px',
                    fontSize: '12px',
                    paddingRight: '10px',
                  }}
                >
                  {errors.verificationCode.message}
                </Text>
              )}
            </Flex>
            <Button size={'3'}>ثبت و ادامه</Button>
            <Button disabled={!isEnd} size={'3'} variant='outline'>
              <Flex gap={'5px'}>
                <Timer handleEndTime={handleEndTime} />
                <Text>مانده تا دریافت کد مجدد</Text>
              </Flex>
            </Button>
          </Flex>
        </Container>
      </Flex>
    </form>
  );
};

export default VerificationCode;
/**
 * styled-component
 * _______________________________________________________________________________
 */
const Container = styled(Flex)`
  @media (min-width: 1024px) {
    border: 1px solid #0000002c;
    border-radius: 8px;
  }
`;
