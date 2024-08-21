'use client';

import { styled } from 'styled-components';

import { callToActionTypo } from '@/constants/LandingPage/GeneratePlanCallToAction';
import { Box, Button, Flex, Text } from '@/libs/primitives';

const GeneratePlanCallToAction = () => {
  return (
    <>
      <Flex direction='column'>
        <BoxRoot p='3'>
          <Flex direction='column' gap='20px' align='start'>
            <Text align='right' mb='5'>
              {callToActionTypo.Description}
            </Text>
          </Flex>
          <Flex align='center'>
            <ButtonRoot>
              <Text align='right'>{callToActionTypo.makePlans}</Text>
            </ButtonRoot>
          </Flex>
        </BoxRoot>
      </Flex>
    </>
  );
};

export default GeneratePlanCallToAction;

const BoxRoot = styled(Box)`
  background-color: #d4d4d4;
  border-radius: 8px !important;
`;

const ButtonRoot = styled(Button)`
  width: -webkit-fill-available;
  background-color: #373737;
  border-radius: 12px;
`;
