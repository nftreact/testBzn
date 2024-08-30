'use client';

import Link from 'next/link';

import { styled } from 'styled-components';

import { callToActionTypo } from '@/constants/LandingPage/GeneratePlanCallToAction';
import { heroTypo } from '@/constants/LandingPage/hero';
import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { formattedDate } from '@/libs/utils/GetCurrentDay';

const Hero = () => {
  return (
    <Flex
      width={'100%'}
      m='auto'
      height={{ initial: 'max-content', md: '480px' }}
      maxWidth={{ initial: '100%', md: '1000px' }}
      direction={{ initial: 'column', md: 'row' }}
      align={{ md: 'center' }}
      justify={{ md: 'between' }}
      gap={'24px'}
    >
      <Flex direction={'column'} gap='5px'>
        <Text>{formattedDate}</Text>
        <Heading>{heroTypo.Title}</Heading>
      </Flex>
      <FlexRoot direction='column' gap='20px' p='12px' maxWidth={{ md: '480px' }}>
        <Text align='right'>{callToActionTypo.Description}</Text>
        <ButtonStyle size={'4'} variant='soft'>
          <Link href={'/planner'}>
            <Text align='right'>{callToActionTypo.makePlans}</Text>
          </Link>
        </ButtonStyle>
      </FlexRoot>
    </Flex>
  );
};

export default Hero;

const FlexRoot = styled(Flex)`
  border-radius: 8px;
  border: 1px solid #d8d9e0;
`;

const ButtonStyle = styled(Button)`
  &.rt-Button:where(.rt-r-size-4):where(:not(.rt-variant-ghost)) {
    border-radius: 12px;
    background-color: #009c9b;
    font-size: 14px;
    padding: 11px 12px;
    max-height: 40px;
    color: #fcfcfd;
  }
`;
