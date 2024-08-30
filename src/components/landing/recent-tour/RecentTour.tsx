'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Text } from '@/libs/primitives';

import { RecentTourCardProps } from '../types';
import RecentTourCard from './RecentTourCard';

interface Props {
  data: RecentTourCardProps[];
}

const RecentTour: React.FC<Props> = ({ data }) => {
  return (
    <Flex direction={'column'}>
      <Text size={'3'}>تورها</Text>
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
              <RecentTourCard
                badge={['طبیعت گردی', 'تاریخ گردی']}
                image={item.image}
                key={index}
                from={item.from}
                to={item.to}
                travelDays={item.travelDays}
                userName={item.userName}
                isPremium={item.isPremium}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default RecentTour;
