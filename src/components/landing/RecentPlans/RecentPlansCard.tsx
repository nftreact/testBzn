// components/Card.tsx
import React from 'react';
import { FaUser } from 'react-icons/fa';

import * as Avatar from '@radix-ui/react-avatar';
import * as Primitive from '@radix-ui/themes';
import styled from 'styled-components';

interface CardProps {
  userName: string;
  creationDate: string;
  from: string;
  to: string;
  travelDays: number;
  companionCount?: number;
  isPremium?: boolean;
}

const RecentPlansCard: React.FC<CardProps> = ({
  userName,
  creationDate,
  from,
  to,
  travelDays,
  companionCount,
  isPremium = false,
}) => {
  return (
    <CardContainer>
      <Primitive.Flex>
        <CardHeader direction='column'>
          <Avatar.Root
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '100%',
              backgroundColor: '#D4D4D4',
              marginRight: '10px',
            }}
          >
            <Avatar.Image
              src=''
              alt={userName}
              style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
            />
            <Avatar.Fallback delayMs={600} style={{ color: '#373737', fontSize: '20px', lineHeight: 1 }}>
              <FaUser />
            </Avatar.Fallback>
          </Avatar.Root>
          <CardInfo>
            <UserName>{userName}</UserName>
            <CreationDate>{creationDate}</CreationDate>
          </CardInfo>
          {isPremium && <PremiumBadge>★</PremiumBadge>}
        </CardHeader>
      </Primitive.Flex>
      <CardBody>
        <TravelRoute>
          {from} to {to}
        </TravelRoute>
        {companionCount !== undefined && <CompanionCount>Companions: {companionCount}</CompanionCount>}
        <TravelDays>Days: {travelDays}</TravelDays>
      </CardBody>
    </CardContainer>
  );
};

export default RecentPlansCard;

// Styled components using Radix UI Primitives
const CardContainer = styled(Primitive.Box)`
  border: 1px solid #6a6a6a;
  border-radius: 8px;
  padding: 8px;
  background-color: #fcfdfc;
  width: 200px; // Fixed width for each card
  max-width: auto; // Ensure consistency
  margin: 10px 0 0 16px;
`;

const CardHeader = styled(Primitive.Flex)`
  align-items: center;
`;

const CardInfo = styled(Primitive.Box)`
  flex-grow: 1;
`;

const UserName = styled(Primitive.Text)`
  font-size: 12px;
  font-weight: 400;
`;

const CreationDate = styled(Primitive.Text)`
  font-size: 10px;
  color: #373737;
`;

const PremiumBadge = styled(Primitive.Text)`
  background-color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 20px;
`;

const CardBody = styled(Primitive.Box)`
  margin-top: 16px;
`;

const TravelRoute = styled(Primitive.Text)`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const CompanionCount = styled(Primitive.Text)`
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const TravelDays = styled(Primitive.Text)`
  font-size: 14px;
`;

// import React from 'react';
// import { FaUser } from 'react-icons/fa';

// interface CardProps {
//   userName: string;
//   creationDate: string;
//   from: string;
//   to: string;
//   travelDays: number;
//   companionCount?: number;
//   isPremium?: boolean;
// }

// const Card: React.FC<CardProps> = ({
//   userName,
//   creationDate,
//   from,
//   to,
//   travelDays,
//   companionCount,
//   isPremium = false,
// }) => {
//   return (
//     <div className='card'>
//       <div className='card-header'>
//         <FaUser className='avatar-icon' />
//         <div className='card-info'>
//           <h3 className='user-name'>{userName}</h3>
//           <p className='creation-date'>{creationDate}</p>
//         </div>
//         {isPremium && <span className='premium-badge'>★</span>}
//       </div>
//       <div className='card-body'>
//         <p className='travel-route'>
//           {from} to {to}
//         </p>
//         {companionCount && <p>Companions: {companionCount}</p>}
//         <p>Days: {travelDays}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
