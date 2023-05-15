import React from "react";
import {
  NativeBaseProvider,
  Box,
  Input,
  Button,
  TextArea,
  Text,
} from "native-base";
import SelectConverter from "./src/Select/SelectConverter";

export default function App() {
  const renderSelect = () => {
    return (
      <Box>
        <Box>
          <SelectConverter />
        </Box>
        <Box marginTop="1">
          <SelectConverter />
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

  const renderButton = () => {
    return (
      <Box marginTop={2}>
        <Button onPress={() => console.log("hello world")}>Submit</Button>
        <Button colorScheme="coolGray" marginTop={2}>
          Reset
        </Button>
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
