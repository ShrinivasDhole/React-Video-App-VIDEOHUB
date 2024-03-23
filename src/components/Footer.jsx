import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineSend,
} from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack align={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center' , 'left']}>
            Hello Family! Welcome here
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a href="http://instagram.com/_xhriiiii">
              <AiFillInstagram />
            </a>
            <Text>Instagram</Text>
          </Button>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a href="https://www.linkedin.com/in/shrinivas-dhole-701811213/">
              <AiFillLinkedin />
            </a>
            <Text>LinkedIn</Text>
          </Button>
          <Button variant={'link'} colorScheme="whiteAlpha">
            <a href="https://github.com/ShrinivasDhole">
              <AiFillGithub />
            </a>
            <Text>GitHub</Text>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
