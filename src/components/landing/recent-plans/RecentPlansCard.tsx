import React from 'react';
import { FaUser } from 'react-icons/fa';

import * as Avatar from '@radix-ui/react-avatar';
import * as Primitive from '@radix-ui/themes';
import styled from 'styled-components';

import { recentPlans } from '@/constants/LandingPage/RecentPlans';
import { Flex, Text } from '@/libs/primitives';

interface CardProps {
  userName: string;
  creationDate: string;
  from: string;
  to: string;
  travelDays: number;
  companionCount?: number;
  isPremium?: boolean;
}

const RecentPlansCard: React.FC<CardProps> = ({
  userName,
  creationDate,
  from,
  to,
  travelDays,
  companionCount,
  isPremium = false,
}) => {
  return (
    <CardContainer>
      <Primitive.Flex>
        <CardHeader direction='row'>
          <Avatar.Root
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '100%',
              backgroundColor: '#D4D4D4',
              marginRight: '10px',
              marginLeft: '10px',
            }}
          >
            <Avatar.Image
              src=''
              alt={userName}
              style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
            />
            <Avatar.Fallback delayMs={600} style={{ color: '#373737', fontSize: '20px', lineHeight: 1 }}>
              <FaUser />
            </Avatar.Fallback>
          </Avatar.Root>
          <CardInfo>
            <UserName>{userName}</UserName>
            {isPremium && <PremiumBadge>★</PremiumBadge>}
          </CardInfo>
        </CardHeader>
      </Primitive.Flex>
      <CreationDate>{creationDate}</CreationDate>
      <Flex direction={'column'}>
        <TravelRoute>
          {from} ------------------------ {to}
        </TravelRoute>
        {companionCount !== undefined && (
          <Flex p={'1'} justify={'between'}>
            <Text size={'1'} weight={'light'}>
              {recentPlans.companions}
            </Text>
            <Text size={'1'} weight={'light'}>
              {companionCount}
            </Text>
          </Flex>
        )}
        <Flex p={'1'} justify={'between'}>
          <Text size={'1'} weight={'light'}>
            {recentPlans.days}
          </Text>
          <Text size={'1'} weight={'light'}>
            {travelDays}
          </Text>
        </Flex>
      </Flex>
    </CardContainer>
  );
};

export default RecentPlansCard;

// Styled components using Radix UI Primitives
const CardContainer = styled(Primitive.Box)`
  border: 1px solid #6a6a6a;
  border-radius: 8px;
  padding: 8px;
  background-color: #fcfdfc;
  width: 200px; // Fixed width for each card
  max-width: auto; // Ensure consistency
  margin: 10px 0 0 16px;
`;

const CardHeader = styled(Primitive.Flex)`
  align-items: center;
`;

const CardInfo = styled(Primitive.Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`;

const UserName = styled(Primitive.Text)`
  justify-items: center;
  font-size: 12px;
  font-weight: 400;
`;

const CreationDate = styled(Primitive.Text)`
  display: flex;
  justify-content: center;
  font-size: 10px;
  color: #373737;
`;

const PremiumBadge = styled(Primitive.Text)`
  background-color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 20px;
`;

const TravelRoute = styled(Primitive.Text)`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;
