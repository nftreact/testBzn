import { Hero, RecentPlan, RecentPoints } from '@/components/landing';
import Banner from '@/components/landing/Banner';
import { recentPlansData, recentPointsData } from '@/constants/LandingPage/MockData';
import { Flex } from '@/libs/primitives';

export default function Home() {
  return (
    <Flex direction='column' gap='24px' m='auto' p='4'>
      <Hero />
      <Banner />
      <RecentPlan data={recentPlansData} />
      <Banner />
      <RecentPoints data={recentPointsData} />
    </Flex>
  );
}
