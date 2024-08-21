'use client';

import { Box } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { GeneratePlanCallToAction, Hero, RecentPlan, RecentPoints } from '@/components/landing';
import { Flex } from '@/libs/primitives';

export default function Home() {
  return (
    <Flex direction='column' gap='10px' m='auto' p='4'>
      <Hero />
      <GeneratePlanCallToAction />
      <BoxRoot />
      <Flex justify='center'>
        <iframe></iframe>
      </Flex>
      <RecentPlan />
      <RecentPoints />
    </Flex>
  );
}

const BoxRoot = styled(Box)`
  height: 1px;
  width: 100%;
  background-color: #6a6a6a;
  margin: 30px 0 20px; /* Spacing around the line */
`;
