'use client';

import Image from 'next/image';

import { Text } from '@radix-ui/themes';
import styled from 'styled-components';

import { Flex } from '@/libs/primitives';

import { RecentPointCard } from '../types';

const RecentPointsCard: React.FC<RecentPointCard> = ({ address, rating, title, pictureUrl }) => {
  return (
    <Rpot gap={'10px'} style={{}}>
      <Flex
        position={'relative'}
        style={{
          width: '93px',
          minHeight: '96px',
          height: '100%',
          borderRadius: '8px',
        }}
      >
        <Image src={pictureUrl} alt='' fill style={{ objectFit: 'cover' }} />
      </Flex>
      <Flex style={{ flex: 1 }} direction={'column'} p={'12px'} justify={'between'}>
        <Flex justify={'between'}>
          <Text>{title}</Text>
          <Text size={'1'}>★{rating.toFixed(1)}</Text>
        </Flex>
        <Text size={'1'}>{address}</Text>
      </Flex>
    </Rpot>
  );
};

export default RecentPointsCard;

const Rpot = styled(Flex)`
  border-radius: 8px;
  box-shadow:
    0 0 0 1px color-mix(in oklab, var(--gray-a3), var(--gray-3) 25%),
    0 0 0 0.5px var(--black-a1),
    0 1px 1px 0 var(--gray-a2),
    0 2px 1px -1px var(--black-a1),
    0 1px 3px 0 var(--black-a1);
`;
