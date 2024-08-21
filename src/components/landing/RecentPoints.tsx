import React from 'react';

import { Flex, Section } from '@/libs/primitives';
import Card from '@/libs/primitives/components/Card';

const RecentPoints: React.FC = () => {
  return (
    <Section>
      <Flex direction='column'>
        <Card userName={'نام و عنوان'} creationDate={''} from={''} to={''} travelDays={0} />
        <Card userName={'نام و عنوان'} creationDate={''} from={''} to={''} travelDays={0} />
        <Card userName={'نام و عنوان'} creationDate={''} from={''} to={''} travelDays={0} />
        <Card userName={'نام و عنوان'} creationDate={''} from={''} to={''} travelDays={0} />
        <Card userName={'نام و عنوان'} creationDate={''} from={''} to={''} travelDays={0} />
      </Flex>
    </Section>
  );
};

export default RecentPoints;
