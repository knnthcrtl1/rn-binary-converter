import React from 'react'

import { Box, CheckIcon, Select, Text } from 'native-base'
import { selectList } from '../global/list'
import {
  Controller,
  type Control as SelectControl,
  type UseFormGetValues,
  type FieldValues
} from 'react-hook-form'

interface SelectProps {
  errors?: Record<string, any>
  control: SelectControl<FieldValues, any>
  name: string
  getValues: UseFormGetValues<FieldValues>
  rules: Record<string, any>
}

const SelectConverter: React.FC<SelectProps> = ({
  errors = {},
  control,
  name = '',
  rules
}: SelectProps) => {
  return (
    <Box>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
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
        name={name}
        rules={rules}
      />
      {errors?.[name]?.type === 'required' && <Text>This is required.</Text>}
      {errors?.[name]?.type === 'validate' && (
        <Text>Please change this type.</Text>
      )}
    </Box>
  )
}

export default SelectConverter
