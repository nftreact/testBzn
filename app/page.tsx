import { GeneratePlanCallToAction, Hero, RecentPlan, RecentPoints } from '@/components/landing';
import { Flex } from '@/libs/primitives';

export default function Home() {
  return (
    <Flex direction='column' gap='10px' width='760px' m='auto' p='5'>
      <Hero />
      <GeneratePlanCallToAction />
      <RecentPlan />
      <RecentPoints />
    </Flex>
  );
}
