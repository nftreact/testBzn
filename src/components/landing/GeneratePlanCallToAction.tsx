'use client';

import { styled } from 'styled-components';

import { callToActionTypo } from '@/constants/LandingPage/GeneratePlanCallToAction';
import { Button, Flex, Text } from '@/libs/primitives';

const GeneratePlanCallToAction = () => {
  return (
    <>
      <FlexRoot direction='column' gap='20px' style={{ border: '1px solid red' }} p='2'>
        <Text align='right'>{callToActionTypo.Description}</Text>
        <Button variant='outline'>
          <Text align='right'>{callToActionTypo.makePlans}</Text>
        </Button>
      </FlexRoot>
    </>
  );
};

export default GeneratePlanCallToAction;

const FlexRoot = styled(Flex)`
  background-color: #d4d4d4;
  border-radius: 12px;
`;
