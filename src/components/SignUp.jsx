import {
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={"center"}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple.500"
          ></Input>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple.500"
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          ></Input>
          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme="purple">
              <Link to="/login">Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
