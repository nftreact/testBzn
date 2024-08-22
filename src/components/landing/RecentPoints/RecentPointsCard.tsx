'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Text } from '@radix-ui/themes';
import styled from 'styled-components';

import { Box, Flex } from '@/libs/primitives';

interface CardProps {
  pictureUrl: string;
  title: string;
  rating: number;
  address: string;
}

const RecentPointsCard: React.FC<CardProps> = ({ pictureUrl, title, rating, address }) => {
  return (
    <CardWrapper align='center' justify='between'>
      <CardInfo>
        <StyledAvatar>
          <AvatarImage src={pictureUrl} alt={title} />
          <AvatarFallback>?</AvatarFallback>
        </StyledAvatar>
        <CardTitle>
          <Text>{title}</Text>
          <CardRating>
            <Text>★{rating.toFixed(1)}/5</Text>
          </CardRating>
        </CardTitle>
        <CardAddress>
          <Text>{address}</Text>
        </CardAddress>
      </CardInfo>
    </CardWrapper>
  );
};

export default RecentPointsCard;

const CardWrapper = styled(Flex)`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
`;

const CardInfo = styled(Box)`
  flex-grow: 1;
  margin-right: 10px;
`;

const CardTitle = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardRating = styled(Box)`
  color: #666666;
`;

const CardAddress = styled(Box)`
  color: #666666;
`;

const StyledAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #e0e0e0;
`;
