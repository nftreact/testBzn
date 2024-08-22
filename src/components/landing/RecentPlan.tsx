'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import RecentPlansCard from '@/components/landing/RecentPlans/RecentPlansCard';
import { recentPlans } from '@/constants/LandingPage/RecentPlans';
import { Flex, Section, Text } from '@/libs/primitives';

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
    <Section p='2'>
      <Text size='4' weight='medium'>
        {recentPlans.recentPlans}
      </Text>
      <Flex>
        <Swiper
          spaceBetween={1}
          slidesPerView={'auto'}
          style={{ width: '100%', flexDirection: 'row' }} // Ensure Swiper takes full width
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex', // Ensure slide content is centered
                justifyContent: 'end',
                width: 'auto', // Ensure slide takes width of its content
              }}
            >
              <RecentPlansCard
                {...item}
                key={index}
                creationDate='تاریخ ساخت'
                from='تهران'
                to='شیراز'
                travelDays={10}
                userName='نام کاربر'
                companionCount={8}
                isPremium={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Section>
  );
};

export default RecentPlan;
