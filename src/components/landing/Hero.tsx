import { heroTypo } from '@/constants/LandingPage/hero';
import { Flex, Heading, Text } from '@/libs/primitives';
import { formattedDate } from '@/libs/utils/GetCurrentDay';

const Hero = () => {
  return (
    <>
      <Flex direction='column' gap='5px'>
        <Text>{formattedDate}</Text>
        <Heading>{heroTypo.Title}</Heading>
      </Flex>
    </>
  );
};

export default Hero;
