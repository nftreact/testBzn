'use client';

import { styled } from 'styled-components';

import { callToActionTypo } from '@/constants/LandingPage/GeneratePlanCallToAction';
import { heroTypo } from '@/constants/LandingPage/hero';
import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { formattedDate } from '@/libs/utils/GetCurrentDay';

const Hero = () => {
  return (
    <Flex direction={{ initial: 'column', md: 'row' }} align={{md:"center"}} justify={{ md: 'between' }} gap={'24px'}>
      <Flex direction={'column'} gap='5px'>
        <Text>{formattedDate}</Text>
        <Heading>{heroTypo.Title}</Heading>
      </Flex>
      <FlexRoot direction='column' gap='20px' p='12px'>
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
  border-radius: 12px;
  border: 1px solid #00000052;
`;
