import React from 'react'
import {
  NativeBaseProvider,
  Box,
  Input,
  Button,
  TextArea,
  Text
} from 'native-base'
import SelectConverter from './src/Select/SelectConverter'
import { useForm, Controller } from 'react-hook-form'
import useConverter from './src/services/converter'

export default function App () {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      fromType: '',
      toType: '',
      binaryNumber: ''
    }
  })

  const { result, convertBinary } = useConverter()

  const onSubmit = (data) => {
    const { binaryNumber: bin, fromType, toType } = data
    convertBinary(fromType, toType, bin)
  }

  const renderSelect = () => {
    return (
      <Box>
        <Box>
          <SelectConverter
            errors={errors}
            control={control}
            name="fromType"
            rules={{
              required: 'Field is required'
            }}
          />
        </Box>
        <Box marginTop="1">
          <SelectConverter
            errors={errors}
            control={control}
            name="toType"
            getValues={getValues}
            rules={{
              required: 'Field is required',
              validate: (value) => value !== getValues('fromType')
            }}
          />
        </Box>
      </Box>
    )
  }

  const renderInput = () => {
    return (
      <Box marginTop={2}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Enter binary number"
              w="100%"
              keyboardType="number-pad"
              value={value}
              onChangeText={(val) => onChange(val)}
              borderColor={errors?.binaryNumber && 'red.400'}
            />
          )}
          name="binaryNumber"
          rules={{
            required: 'Field is required',
            pattern: {
              value: /^[0-1()|&]+$/
            }
          }}
        />
        {errors?.binaryNumber?.type === 'required' && (
          <Text color="red.400" fontSize="9">
            This is required.
          </Text>
        )}
        {errors?.binaryNumber?.type === 'pattern' &&
          getValues('fromType') === '1' && (
            <Text color="red.400" fontSize="9">
              Please input binary number only.
            </Text>
        )}
      </Box>
    )
  }

  const renderTextArea = () => {
    return (
      <Box marginTop={2}>
        <TextArea
          placeholder="Result"
          h={40}
          isDisabled={true}
          placeholderTextColor="black"
          value={!isNaN(result) ? result : null}
        />
      </Box>
    )
  }

  const renderTitle = () => {
    return (
      <Box mb={4} mt={2} alignItems="center">
        <Text fontSize={16}>App Converter</Text>
      </Box>
    )
  }

  const renderButton = () => {
    return (
      <Box marginTop={2}>
        <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
        <Button colorScheme="coolGray" marginTop={2} onPress={() => reset()}>
          Reset
        </Button>
      </Box>
    )
  }

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
  )
}
