import React from 'react'

const useConverter = () => {
  const [result, setResult] = React.useState('')

  const convertBinary = (from: string, to: string, bin: string) => {
    if (from === '1') {
      const str = to === '2' ? undefined : to === '3' ? 8 : 16
      const digit = parseInt(bin, 2).toString(str)
      setResult(digit)
    } else if (from === '2') {
      const str = to === '1' ? 2 : to === '3' ? 8 : 16
      const response = Number(bin).toString(str)
      setResult(response)
    } else if (from === '3') {
      const str = to === '1' ? 2 : to === '2' ? undefined : 16
      const digit = parseInt(bin, 8).toString(str)
      setResult(digit)
    } else {
      const str = to === '1' ? 2 : to === '2' ? undefined : 8
      const digit = parseInt(bin, 16).toString(str)
      setResult(digit)
    }
  }

  return {
    result,
    convertBinary
  }
}

export default useConverter
