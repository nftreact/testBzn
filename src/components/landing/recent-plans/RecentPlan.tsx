'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { recentPlans } from '@/constants/LandingPage/RecentPlans';
import { Flex, Text } from '@/libs/primitives';

import RecentPlansCard from './RecentPlansCard';

interface RecentPlanProps {
  data: Array<{
    userName: string;
    creationDate: string;
    from: string;
    to: string;
    travelDays: number;
    companionCount: number;
    isPremium: boolean;
  }>;
}

const RecentPlan: React.FC<RecentPlanProps> = ({ data }) => {
  return (
    <Flex direction={'column'} gap={'10px'}>
      <Text size='4' weight='medium'>
        {recentPlans.recentPlans}
      </Text>
      <Flex gap={'10px'}>
        <Swiper spaceBetween={'10px'} slidesPerView={'auto'} style={{ width: '100%', flexDirection: 'row' }}>
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'end',
                width: 'auto',
              }}
            >
              <RecentPlansCard
                key={index}
                creationDate={item.creationDate}
                from={item.from}
                to={item.to}
                travelDays={item.travelDays}
                userName={item.userName}
                companionCount={item.companionCount}
                isPremium={item.isPremium}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default RecentPlan;
