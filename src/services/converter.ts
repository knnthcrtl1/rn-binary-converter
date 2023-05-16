import React from 'react'

const useConverter = () => {
  const [result, setResult] = React.useState('')

  const convertBinary = (from: string, to: string, bin: string) => {
    if (from === '1' && to === '2') {
      const digit = parseInt(bin, 2)

      setResult(digit.toString())
    }
  }

  return {
    result,
    convertBinary
  }
}

export default useConverter
