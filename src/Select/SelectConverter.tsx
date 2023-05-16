import React from 'react'

import { Box, CheckIcon, Select, Text } from 'native-base'
import { selectList } from '../global/list'
import {
  Controller,
  type Control as SelectControl,
  type FieldValues
} from 'react-hook-form'

interface SelectProps {
  errors?: any
  control: SelectControl<FieldValues, any>
}

const SelectConverter: React.FC<SelectProps> = ({
  errors = {},
  control
}: SelectProps) => {
  return (
    <Box>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select
            selectedValue={value}
            minWidth="200"
            accessibilityLabel="Choose Type"
            placeholder="Choose Type"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />
            }}
            mt={1}
            onValueChange={(itemValue: string) => {
              onChange(itemValue)
            }}
          >
            {selectList.map((e) => (
              <Select.Item label={e.name} value={e.id} />
            ))}
          </Select>
        )}
        name="firstName"
        rules={{ required: 'Field is required' }}
      />
      {errors?.firstName ? <Text>This is required.</Text> : null}
    </Box>
  )
}

export default SelectConverter
