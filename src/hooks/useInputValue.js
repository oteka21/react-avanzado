import { useState } from 'react'

export function useInputValue (initialVAlue) {
  const [value, setValue] = useState(initialVAlue)

  function onChange (e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange
  }
}
