import { Flex } from '@/libs/primitives';

import RecentPointsCard from '../RecentPoints/RecentPointsCard';

interface RecentPointProps {
  data: Array<{
    pictureUrl: string;
    title: string;
    rating: number;
    address: string;
  }>;
}
const RecentPoints: React.FC<RecentPointProps> = ({ data }) => {
  return (
    <Flex direction='column' gap='10px'>
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
