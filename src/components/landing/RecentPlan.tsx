// components/CardCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';

import { recentPlans } from '@/constants/LandingPage/RecentPlans';
import { Flex, Section, Text } from '@/libs/primitives';
import Card from '@/libs/primitives/components/Card';

const RecentPlan: React.FC = () => {
  return (
    <Section>
      <Text size='4' weight='medium'>
        {recentPlans.recentPlans}
      </Text>
      <Flex direction='row'>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          style={{ width: '100%', border: '1px solid red', flexDirection: 'row' }} // Ensure Swiper takes full width
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                border: '1px solid blue',
                display: 'flex', // Ensure slide content is centered
                justifyContent: 'center',
                width: '100%', // Ensure slide takes width of its content
              }}
            >
              <Card
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

const data = [
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },
  {
    userName: 'نام کاربر',
    creationDate: 'تاریخ ساخت',
    from: 'تهران',
    to: 'شیراز',
    travelDays: 10,
    companionCount: 8,
    isPremium: true,
  },

  // Add more card data as needed...
];
