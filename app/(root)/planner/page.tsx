import React from 'react';

import { DesktopPlannerRoot, MobilePlannerRoot } from '@/components/planner';
import { Root } from '@/components/planner/Planner.styled';
import { Text } from '@/libs/primitives';

const PlannerPage = () => {
  return (
    <Root
      p={{ md: '16px' }}
      gap={'16px'}
      direction={'column'}
      maxWidth={{ initial: '100%', md: '800px' }}
      m='auto'
    >
      <Text style={{ color: '#62636C' }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
      </Text>
      <DesktopPlannerRoot />
      <MobilePlannerRoot />
    </Root>
  );
};

export default PlannerPage;
