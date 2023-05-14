import React from "react";
import { NativeBaseProvider, Box, Select, CheckIcon } from "native-base";
import SelectConverter from "./src/Select/SelectConverter";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" safeArea paddingX={4}>
        <Box>
          <SelectConverter />
        </Box>
        <Box marginTop={4}>
          <SelectConverter />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
