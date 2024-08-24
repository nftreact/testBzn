import React from 'react';

import { PlannerRoot } from '@/components/planner';
import { Flex, Text } from '@/libs/primitives';

const PlannerPage = () => {
  return (
    <Flex gap={'16px'} direction={'column'}>
      <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</Text>
      <PlannerRoot />
    </Flex>
  );
};

export default PlannerPage;
