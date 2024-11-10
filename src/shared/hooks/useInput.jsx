import { useState } from 'react'

export const useInput = (reg) => {
    const [value, setValue] = useState('')
    const [isError, setIsError] = useState(false)

    const onChange = (event) => setValue(event.target.value)

    const onBlur = () => {
        return setIsError(value === ''
            || !new RegExp(reg).test(value)
        )
    }

    return { value, onChange, isError, onBlur }
}