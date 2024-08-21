import React from 'react';

import { Flex } from '@radix-ui/themes';

import PlannerRoot from '@/components/planner/PlannerRoot';
import { Text } from '@/libs/primitives';

const PlannerPage = () => {
  return (
    <Flex p={'16px'} gap={'16px'} direction={'column'}>
      <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</Text>
      <PlannerRoot />
    </Flex>
  );
};

export default PlannerPage;
