import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

import { RecentPlanCard } from '../types';

const RecentPlansCard: React.FC<RecentPlanCard> = ({
  image,
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
          <Image src={image} alt='recent-plan-image' height={32} width={32} />
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
          <Text size={'1'}>{companionCount} روز</Text>
        </Flex>
        <Flex justify={'between'}>
          <Text>تعداد روز</Text>
          <Text size={'1'}>{travelDays} روز</Text>
        </Flex>
      </Flex>
    </Root>
  );
};

export default RecentPlansCard;

// Styled components using Radix UI Primitives
const Root = styled(Flex)`
  border-radius: 8px;
  padding: 8px;
  background-color: #fcfdfc;
  width: 250px;

  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
    0 0 0 0.5px var(--black-a1),
    0 1px 1px 0 var(--gray-a2),
    0 2px 1px -1px var(--black-a1),
    0 1px 3px 0 var(--black-a1);

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
