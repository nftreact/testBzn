'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import * as Yup from 'yup';

import { Button, Flex, Text, TextField } from '@/libs/primitives';

import AuthLogo from '../../../../public/image/auth-log.png';
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
  const cookies = new Cookies(null, { path: '/' });
  const { push } = useRouter();
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

    cookies.set('Authorization', true);
    push('/');
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
      <Flex width={'100%'} direction={'column'} minHeight={'90vh'}>
        <Container
          p={'24px 16px'}
          width={{ initial: '100%' }}
          maxWidth={{ initial: '100%', md: '500px' }}
          m='auto'
          justify={'between'}
          direction={'column'}
          gap={'40px'}
        >
          <Image style={{ margin: 'auto' }} src={AuthLogo} alt='auth-logo-image' width={160} height={116} />
          <Flex direction={'column'} gap={'16px'}>
            <Text>برای ورود به حساب کاربری شماره تماس خود را وارد کنید. </Text>
            <TextField
              type='number'
              errorText={errors.verificationCode?.message}
              autoFocus
              id='verificationCode'
              {...register('verificationCode')}
              size={'3'}
              placeholder='کد تایید'
            />
            <RegisterButton size={'4'}>ثبت و ادامه</RegisterButton>
            <ResendCodeButton type='button' size={'4'} variant='outline'>
              <Flex gap={'5px'}>
                {!isEnd && <Timer handleEndTime={handleEndTime} />}
                {isEnd && <Text>مانده تا دریافت کد مجدد</Text>}
              </Flex>
            </ResendCodeButton>
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

const ResendCodeButton = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    color: #009c9b;
    padding: 11px 12px;
    border-radius: 12px;
    border: 1px solid #009c9b;
    font-size: 14px;
    max-height: 40px;
    outline: none;
    box-shadow: none;
  }
`;

const RegisterButton = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    border-radius: 12px;
    background-color: #009c9b;
    font-size: 14px;
    padding: 11px 12px;
    max-height: 40px;
  }
`;
