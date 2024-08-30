import dynamic from 'next/dynamic';

import { Hero, LandingSwiperSkeleton, RecentPointsSkeleton } from '@/components/landing';
import Banner from '@/components/landing/Banner';
import { recentPlansData, recentPointsData, recentTourData } from '@/constants/LandingPage/MockData';
import { Flex } from '@/libs/primitives';

import BannerImage from '../../public/image/landing-banner.png';

const RecentPlan = dynamic(() => import('@/components/landing/recent-plans/RecentPlan'), {
  ssr: false,
  loading: () => <LandingSwiperSkeleton />,
});

const RecentTour = dynamic(() => import('@/components/landing/recent-tour/RecentTour'), {
  ssr: false,
  loading: () => <LandingSwiperSkeleton />,
});

const RecentPointsMobileView = dynamic(
  () => import('@/components/landing/recent-points/RecentPointsMobileView'),
  {
    ssr: false,
    loading: () => <RecentPointsSkeleton />,
  }
);

const RecentPointDesktopView = dynamic(
  () => import('@/components/landing/recent-points/RecentPointDesktopView'),
  {
    ssr: false,
    loading: () => <LandingSwiperSkeleton />,
  }
);

export default function Home() {
  return (
    <Flex direction='column' gap='32px' m='auto'>
      <Hero />
      <RecentTour data={recentTourData} />
      <Banner src={BannerImage} />
      <RecentPlan data={recentPlansData} />
      <Banner src={BannerImage} />
      <RecentPointsMobileView data={recentPointsData} />
      <RecentPointDesktopView data={recentPointsData} />
    </Flex>
  );
}
