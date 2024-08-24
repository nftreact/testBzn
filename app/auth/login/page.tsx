'use client';

import React from 'react';

import { ReceiveCode, VerificationCode } from '@/components/auth/login';

const LoginPage = () => {
  const params: 'reciveCode' | 'verificationCode' = 'reciveCode';

  return <>{params === 'reciveCode' ? <ReceiveCode /> : <VerificationCode />}</>;
};

export default LoginPage;
