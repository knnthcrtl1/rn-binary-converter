import React from "react";
import {
  NativeBaseProvider,
  Box,
  Input,
  Button,
  TextArea,
  Text,
  FormControl,
} from "native-base";
import SelectConverter from "./src/Select/SelectConverter";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  const onSubmit = (data) => {
    console.log("submiting with ", data);
  };

  const renderSelect = () => {
    return (
      <Box>
        <Box>
          <SelectConverter errors={errors} control={control} />
        </Box>
        <Box marginTop="1">
          {/* <SelectConverter errors={errors} control={control} /> */}
        </Box>
      </Box>
    );
  };

  const renderInput = () => {
    return (
      <Box alignItems="center" marginTop={2}>
        <Input mx="3" placeholder="Input" w="100%" />
      </Box>
    );
  };

  const renderTextArea = () => {
    return (
      <Box marginTop={2}>
        <TextArea
          placeholder="Result"
          h={40}
          isDisabled={true}
          placeholderTextColor="black"
        />
      </Box>
    );
  };

  const renderTitle = () => {
    return (
      <Box mb={4} mt={2} alignItems="center">
        <Text fontSize={16}>App Converter</Text>
      </Box>
    );
  };

  const renderButton = () => {
    return (
      <Box marginTop={2}>
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
        <Button colorScheme="coolGray" marginTop={2}>
          Reset
        </Button>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} safeArea paddingX="2" maxW="100%" w="480px">
        {renderTitle()}
        {renderSelect()}
        {renderInput()}
        {renderButton()}
        {renderTextArea()}
      </Box>
    </NativeBaseProvider>
  );
}
