import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

import { userNameValidate, passwordValidate } from "../../utils/form-validate";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { register, handleSubmit, errors, handleLogin, login } = useLogin();
  return (
    <Center w="100%" h="100vh">
      <Box
        mx="1"
        maxW="md"
        p="9"
        borderWidth="1px"
        borderRadius="lg"
        bg="gray.100"
        shadow={"md"}
      >
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>

        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>User Id</FormLabel>
            <Input
              type="text"
              placeholder="user id "
              {...register("userId", userNameValidate)}
              borderWidth={"2px"}
              borderColor="blackAlpha.500"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password123"
              {...register("password", passwordValidate)}
              borderWidth={"2px"}
              borderColor="blackAlpha.500"
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="yellow"
            size="md"
            w="full"
            // isLoading={isLoading}
            loadingText="Logging In"
          >
            Log In
          </Button>
        </form>

        <Text fontSize="xlg" align="center" mt="6">
          Don't have an account?{" "}
          <Link
            // as={RouterLink}
            // to={REGISTER}
            color="green"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "teal.100" }}
          >
            Register
          </Link>{" "}
          instead!
        </Text>
        <Text color="green">Login Successfully</Text>
      </Box>
    </Center>
  );
};
