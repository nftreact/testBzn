'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { recentPlans } from '@/constants/LandingPage/RecentPlans';
import { Flex, Text } from '@/libs/primitives';

import { RecentPointCard } from '../types';
import RecentPointsCard from './RecentPointsCard';

interface Props {
  data: RecentPointCard[];
}

const RecentPointDesktopView: React.FC<Props> = ({ data }) => {
  return (
    <Flex direction={'column'} display={{ initial: 'none', md: 'flex' }}>
      <Text size={'3'}>{recentPlans.recentPlans}</Text>
      <Flex gap={'10px'}>
        <Swiper spaceBetween={'16px'} slidesPerView={'auto'} style={{ width: '100%', flexDirection: 'row' }}>
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: 'fit-content',
                marginBlock: '10px',
              }}
            >
              <RecentPointsCard
                key={index}
                pictureUrl={item.pictureUrl}
                title={item.title}
                rating={item.rating}
                address={item.address}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default RecentPointDesktopView;
