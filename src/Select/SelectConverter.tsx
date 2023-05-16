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
  control?: SelectControl<FieldValues, any>
  name: string
  getValues?: UseFormGetValues<FieldValues>
  rules: Record<string, any>
}

const SelectConverter: React.FC<SelectProps> = ({
  errors = {},
  control,
  name = '',
  rules
}: SelectProps) => {
  const getValidate = errors?.[name]?.type === 'validate'
  const getRequired = errors?.[name]?.type === 'required'

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
            borderColor={getRequired || getValidate ? 'red.400' : null}
          >
            {selectList.map((e) => (
              <Select.Item label={e.name} value={e.id} />
            ))}
          </Select>
        )}
        name={name}
        rules={rules}
      />
      {getRequired && (
        <Text color="red.400" fontSize="9">
          This is required.
        </Text>
      )}
      {getValidate && (
        <Text color="red.400" fontSize="9">
          Please change this type.
        </Text>
      )}
    </Box>
  )
}

export default SelectConverter
