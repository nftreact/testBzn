import { Skeleton } from '@radix-ui/themes';

import { Flex, Grid } from '@/libs/primitives';

export const LandingSwiperSkeleton = () => {
  return (
    <Flex gap={'16px'} direction={'column'} minHeight={'210px'}>
      <Skeleton style={{ borderRadius: '8px' }} height={'26px'} width={'150px'} />
      <Grid
        gap={'20px'}
        columns={'auto-fit'}
        rows={'1'}
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          overflowX: 'auto',
          overflowY: 'hidden',
          minHeight: '150px',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
      >
        {Array(10)
          .fill({})
          .map((_, index) => (
            <Skeleton
              loading
              key={index}
              minHeight={'140px'}
              width={'250px'}
              style={{ borderRadius: '8px' }}
            />
          ))}
      </Grid>
    </Flex>
  );
};

export const RecentPointsSkeleton = () => {
  return (
    <Flex direction={'column'} gap={'16px'} display={{ initial: 'flex', md: 'none' }}>
      <Skeleton style={{ borderRadius: '8px' }} height={'26px'} width={'150px'} />
      <Grid gap={'8px'} columns={'1'} rows={'4'} minHeight={'96px'}>
        {Array(4)
          .fill({})
          .map(item => {
            return (
              <Skeleton
                loading
                key={item}
                minHeight={'80px'}
                width={'100%'}
                style={{ borderRadius: '8px' }}
              />
            );
          })}
      </Grid>
    </Flex>
  );
};
