'use client';

import { styled } from 'styled-components';

import { callToActionTypo } from '@/constants/LandingPage/GeneratePlanCallToAction';
import { heroTypo } from '@/constants/LandingPage/hero';
import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { formattedDate } from '@/libs/utils/GetCurrentDay';

const Hero = () => {
  return (
    <Flex direction={{ initial: 'column', md: 'row' }} gap={'3'}>
      <Flex direction={'column'} gap='5px'>
        <Text>{formattedDate}</Text>
        <Heading>{heroTypo.Title}</Heading>
      </Flex>
      <FlexRoot direction='column' gap='20px' p='2'>
        <Text align='right'>{callToActionTypo.Description}</Text>
        <Button variant='outline'>
          <Text align='right'>{callToActionTypo.makePlans}</Text>
        </Button>
      </FlexRoot>
    </Flex>
  );
};

export default Hero;

const FlexRoot = styled(Flex)`
  background-color: #d4d4d4;
  border-radius: 12px;
`;
