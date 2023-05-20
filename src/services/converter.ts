import React from 'react'

const useConverter = () => {
  const [result, setResult] = React.useState('')

  const convertBinary = (from: string, to: string, bin: string) => {
    console.log(from, to)
    if (from === '1') {
      const strNumber = to === '2' ? undefined : to === '3' ? 8 : 16
      const digit = parseInt(bin, 2).toString(strNumber)

      setResult(digit)
    } else if (from === '2' && to === '1') {
      const response = Number(bin).toString(2)
      setResult(response)
    }
  }

  return {
    result,
    convertBinary
  }
}

export default useConverter
