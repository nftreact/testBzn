import { Flex, Section } from '@/libs/primitives';

import RecentPointsCard from './RecentPointsCard';

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
    <Section>
      <Flex direction='column' gap='10px'>
        {data.map((item, index) => (
          <RecentPointsCard
            {...item}
            key={index}
            pictureUrl='#'
            title='نام و عنوان'
            rating={4.5}
            address='تهران، خیابان اول، محله دوم، کوچه سوم، پلاک چهارم'
          />
        ))}
      </Flex>
    </Section>
  );
};

export default RecentPoints;
