'use client';

import { Avatar, Inset } from '@radix-ui/themes';

import { Flex, Text } from '@/libs/primitives';

interface CardProps {
  pictureUrl: string;
  title: string;
  rating: number;
  address: string;
}

const RecentPointsCard: React.FC<CardProps> = ({ pictureUrl, title, rating, address }) => {
  return (
    <Flex direction={'row'} style={{ border: '1px solid #6A6A6A', borderRadius: '8px' }}>
      <Flex>
        <Inset clip='padding-box' side='right'>
          <Avatar
            size='8'
            src={pictureUrl}
            // src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
            fallback='A'
          />
        </Inset>
      </Flex>
      <Flex gap={'8'} p={'3'} direction={'column'} width={'100%'}>
        <Flex justify={'between'}>
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
  );
};

export default RecentPointsCard;
