'use client';

import 'react-modern-drawer/dist/index.css';

import Image from 'next/image';
import Link from 'next/link';

import { styled } from 'styled-components';

import header_logo from '../../public/image/header-logo.png';

const MobileHeader = () => {
  return (
    <Root>
      <Link href={'/'}>
        <Image src={header_logo} width={130} height={32} alt='header-logo' />
      </Link>
      {/* <Flex minWidth={'20%'}>
        <IconButton onClick={toggleDrawer} style={{ border: '1px solid #000' }} size={'3'}>
          m
        </IconButton>
        <Drawer
          style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
          open={isOpenMenu}
          onClose={toggleDrawer}
          direction='right'
        >
          <Menu />
        </Drawer>
      </Flex>
      <Link href={'/'}>
        <Text>logo</Text>
      </Link>
      <Flex
        minWidth={'20%'}
        gap={'2px'}
        align={'center'}
        style={{ border: '1px solid #000', borderRadius: '5px' }}
      >
        <Link href={'/auth/login?receiveCode'}>
          <Button variant='soft'>ورود</Button>
        </Link>
        /
        <Link href={'/auth/register'}>
          <Button variant='soft'>عضویت</Button>
        </Link>
      </Flex> */}
    </Root>
  );
};

export default MobileHeader;

const Root = styled.header`
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
    0 0 0 0.5px var(--black-a1),
    0 1px 1px 0 var(--gray-a2),
    0 2px 1px -1px var(--black-a1),
    0 1px 3px 0 var(--black-a1);

  display: block;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;

  @media (min-width: 1024px) {
    display: none;
  }

  button {
    background-color: #fff !important;
  }
`;
