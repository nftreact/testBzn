import React from 'react';

import { Flex } from '@radix-ui/themes';

import { DesktopPlannerRoot, MobilePlannerRoot } from '@/components/planner';
import { Text } from '@/libs/primitives';

const PlannerPage = () => {
  return (
    <Flex p={'16px'} gap={'16px'} direction={'column'}>
      <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</Text>
      <DesktopPlannerRoot />
      <MobilePlannerRoot />
    </Flex>
  );
};

export default PlannerPage;
