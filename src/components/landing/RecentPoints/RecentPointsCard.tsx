'use client';

import { Text } from '@radix-ui/themes';

import { Flex } from '@/libs/primitives';

interface CardProps {
  pictureUrl: string;
  title: string;
  rating: number;
  address: string;
}

const RecentPointsCard: React.FC<CardProps> = ({ address, rating, title }) => {
  return (
    <Flex gap={'10px'} p={'10px'} style={{ border: '1px solid #000', borderRadius: '8px' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '8px', border: '1px solid #000' }} />
      <Flex direction={'column'} py={'12px'} justify={'between'} style={{ flex: 1 }}>
        <Flex justify={'between'}>
          <Text>{title}</Text>
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
