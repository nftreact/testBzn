import { Flex, Text } from '@/libs/primitives';

import { RecentPointCard } from '../types';
import RecentPointsCard from './RecentPointsCard';

interface RecentPointProps {
  data: RecentPointCard[];
}
const RecentPoints: React.FC<RecentPointProps> = ({ data }) => {
  return (
    <Flex direction='column' gap='8px' display={{ initial: 'flex', md: 'none' }}>
      <Text size={'3'}>مشاهده های اخیر</Text>
      {data.map((item, index) => (
        <RecentPointsCard
          key={index}
          pictureUrl={item.pictureUrl}
          title={item.title}
          rating={item.rating}
          address={item.address}
        />
      ))}
    </Flex>
  );
};

export default RecentPoints;
