import { useState } from 'react'
import { useIMask } from 'react-imask';

import { maskTel } from '../const';

export const useTelInput = () => {
    const [isError, setIsError] = useState(false)
    const opts = {
        mask: maskTel, unmask: true
    }
    const {
        ref,
        unmaskedValue
    } = useIMask(opts);

    const onBlur = () => {
        return setIsError(unmaskedValue === ''
            || unmaskedValue.length !== 11)
    }

    return { isError, onBlur, ref, unmaskedValue }
}