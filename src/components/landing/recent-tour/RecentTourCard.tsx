import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

import { RecentTourCardProps } from '../types';

const RecentTourCard: React.FC<RecentTourCardProps> = ({
  image,
  userName,
  from,
  to,
  travelDays,
  isPremium = false,
  badge,
}) => {
  return (
    <Root direction={'column'} p={'2'} gap={'10px'}>
      <Flex direction={'column'} gap={'8px'}>
        <Flex justify={'between'}>
          <Text>{from}</Text>
          <Text>{to}</Text>
        </Flex>

        <Flex justify={'between'}>
          <Text>تعداد روز</Text>
          <Text>{travelDays}روز</Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex gap={'10px'} align={'center'}>
        <Flex align={'center'}>
          <Image src={image} alt='recent-plan-image' height={32} width={32} />
        </Flex>
        <Flex direction={'column'}>
          <Text>{userName}</Text>
        </Flex>
        {isPremium && <Text>.</Text>}
      </Flex>
      <Flex gap={'3px'}>
        {badge.map((item, index) => {
          return (
            <Badge key={index}>
              <Text style={{ fontSize: '9px' }}>{item}</Text>
            </Badge>
          );
        })}
      </Flex>
    </Root>
  );
};

export default RecentTourCard;

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

const Badge = styled.div`
  padding: 2px 12px;
  border-radius: 8px;
  background-color: #eff0f3;
  font-size: 10px;
  color: #1e1f246e;
`;
