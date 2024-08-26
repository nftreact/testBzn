import React from 'react';

import { RegisterDesktopview, RegisterMobileview } from '@/components/auth';

const RegisterPage = () => {
  return (
    <>
      <RegisterDesktopview />
      <RegisterMobileview />
    </>
  );
};

export default RegisterPage;
