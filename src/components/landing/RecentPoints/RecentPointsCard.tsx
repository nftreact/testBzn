'use client';

import { Avatar, Card, Inset, Text } from '@radix-ui/themes';

import { Box, Flex } from '@/libs/primitives';

interface CardProps {
  pictureUrl: string;
  title: string;
  rating: number;
  address: string;
}

const RecentPointsCard: React.FC<CardProps> = ({ pictureUrl, title, rating, address }) => {
  return (
    <Box>
      <Card size='1'>
        <Flex direction={'column'}>
          <Inset clip='padding-box' side='right'>
            <Avatar
              size='8'
              src={pictureUrl}
              // src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
              fallback='A'
            />
          </Inset>
          <Flex direction={'column'}>
            <Flex justify={'between'} mb={'2'}>
              <Text weight={'bold'} size={'4'}>
                {title}
              </Text>

              <Text>★{rating.toFixed(1)}</Text>
            </Flex>
            <Flex>
              <Text>{address}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};

export default RecentPointsCard;
