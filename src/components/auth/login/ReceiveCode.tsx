'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@radix-ui/themes';
import styled from 'styled-components';
import * as yup from 'yup';

import { Button, Flex, Heading, Text } from '@/libs/primitives';

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
    console.log('Form Data:', data);
    push('/auth/login/verificationCode');
    // Handle form submission, e.g., send data to the server
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <Text>برای ورود به حساب کاربری شماره تماس خود را وارد کنید.</Text>
            <Flex pb={'24px'} position={'relative'} width={'100%'} direction={'column'}>
              <TextField.Root
                autoFocus
                id='mobileNumber'
                {...register('mobileNumber')}
                size={'3'}
                placeholder='شماره تماس'
              />
              {errors.mobileNumber && (
                <Text
                  style={{
                    color: 'red',
                    position: 'absolute',
                    bottom: 0,
                    fontSize: '12px',
                    paddingRight: '10px',
                  }}
                >
                  {errors.mobileNumber.message}
                </Text>
              )}
            </Flex>
            <Button disabled={errors.mobileNumber ? true : false} type='submit' size={'3'}>
              ورود
            </Button>
            <Link href={'/auth/register'}>
              <Button style={{ width: '100%' }} size={'3'} variant='outline'>
                ثبت نام
              </Button>
            </Link>
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
  }
`;
