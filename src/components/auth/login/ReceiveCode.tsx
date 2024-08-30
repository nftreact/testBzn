'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import * as yup from 'yup';

import { Button, Flex, Text, TextField } from '@/libs/primitives';

import AuthLogo from '../../../../public/image/auth-log.png';

/**
 * yup validation
 * _______________________________________________________________________________
 */
const iranianMobileNumberRegex = /^(\+98|0|۰)?[9۹][0-9۰-۹]{9}$/;

const validationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(iranianMobileNumberRegex, 'شماره موبایل نادرست است')
    .required('لطفا این قسمت را خالی نگذارید'),
});

/**
 * props
 * _______________________________________________________________________________
 */

interface LoginFormInputs {
  mobileNumber: string;
}

const ReceiveCode = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const { push } = useRouter();

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    push('/auth/login/verificationCode');
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Flex direction={'column'} gap={'15px'}>
            <Text>برای ورود به حساب کاربری شماره تماس خود را وارد کنید.</Text>
            <TextField
              type='number'
              errorText={errors.mobileNumber?.message}
              autoFocus
              id='mobileNumber'
              {...register('mobileNumber')}
              size={'3'}
              placeholder='شماره تماس'
            />
            <ButtonStyle
              variant='soft'
              disabled={errors.mobileNumber ? true : false}
              type='submit'
              size={'4'}
            >
              ورود
            </ButtonStyle>
          </Flex>
        </Container>
      </Flex>
    </form>
  );
};

export default ReceiveCode;
/**
 * styled-component
 * _______________________________________________________________________________
 */

const Container = styled(Flex)`
  @media (min-width: 1024px) {
    border: 1px solid #0000002c;
    border-radius: 8px;
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
      0 0 0 0.5px var(--black-a1),
      0 1px 1px 0 var(--gray-a2),
      0 2px 1px -1px var(--black-a1),
      0 1px 3px 0 var(--black-a1);
  }
`;

const ButtonStyle = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    color: #fcfcfd;
    border-radius: 12px;
    padding: 12px 15px;
    background-color: #009c9b;
    max-height: 40px;
    font-size: 14px;
  }
`;
