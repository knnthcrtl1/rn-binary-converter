import React, { useState } from "react";

import { Box, CheckIcon, Select } from "native-base";
import { selectList } from "../global/list";

const SelectConverter = () => {
  const [service, setService] = useState<string>("");
  return (
    <Box>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Type"
        placeholder="Choose Type"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        {selectList.map((e) => (
          <Select.Item label={e.name} value={e.id} />
        ))}
      </Select>
    </Box>
  );
};

export default SelectConverter;
