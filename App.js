import React from "react";
import { NativeBaseProvider, Box, Input } from "native-base";
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

  return (
    <NativeBaseProvider>
      <Box flex={1} safeArea paddingX="2">
        {renderSelect()}
        {renderInput()}
      </Box>
    </NativeBaseProvider>
  );
}
