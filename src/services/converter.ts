import React from 'react'

const useConverter = () => {
  const [result, setResult] = React.useState('')

  const convertBinary = (from: string, to: string, bin: string) => {
    console.log(from, to)
    if (from === '1' && to === '2') {
      const digit = parseInt(bin, 2)

      setResult(digit.toString())
    } else if (from === '2' && to === '1') {
      console.log('test')
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
