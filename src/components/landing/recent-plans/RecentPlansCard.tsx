import React from 'react';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

import { RecentPlanCard } from '../types';

const RecentPlansCard: React.FC<RecentPlanCard> = ({
  userName,
  creationDate,
  from,
  to,
  travelDays,
  companionCount,
  isPremium = false,
}) => {
  return (
    <Root direction={'column'} p={'2'} gap={'10px'}>
      <Flex gap={'10px'}>
        <Flex align={'center'}>
          <div style={{ borderRadius: '50%', width: '32px', height: '32px', border: '1px solid #000' }} />
        </Flex>
        <Flex direction={'column'}>
          <Text>{userName}</Text>
          <Text>{creationDate}</Text>
        </Flex>
        {isPremium && <Text>.</Text>}
      </Flex>
      <Divider />
      <Flex direction={'column'} gap={'8px'}>
        <Flex justify={'between'}>
          <Text>{from}</Text>
          <Text>{to}</Text>
        </Flex>
        <Flex justify={'between'}>
          <Text>تعداد همسفر</Text>
          <Text>{companionCount}</Text>
        </Flex>
        <Flex justify={'between'}>
          <Text>تعداد روز</Text>
          <Text>{travelDays}</Text>
        </Flex>
      </Flex>
    </Root>
  );
};

export default RecentPlansCard;

// Styled components using Radix UI Primitives
const Root = styled(Flex)`
  border: 1px solid #6a6a6a;
  border-radius: 8px;
  padding: 8px;
  background-color: #fcfdfc;
  width: 250px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #000;
  opacity: 0.2;
  width: 100%;
`;
