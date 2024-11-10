import { Form } from 'react-router-dom'
import clsx from 'clsx'

import { useForm, useInput, useTelInput } from '../../shared/hooks'
import { Button, Input } from '../../shared/ui'
import { regEmail } from '../../shared/const'

import s from './buy.module.css'

export const FormBuy = () => {
    const { value: ClientName, onChange: onChangeName, isError: isErrorName, onBlur: onBlurName } = useInput()
    const { value: Email, onChange: onChangeEmail, isError: isErrorEmail, onBlur: onBlurEmail } = useInput(regEmail)
    const { isError: isErrorTel, onBlur, ref, unmaskedValue: Phone } = useTelInput()
    const { onSubmit, isError } = useForm({ ClientName, Email, Phone: Phone.replace(7, '') })

    return <Form className={clsx(s.wrapper, 'flex-column')}
        onSubmit={onSubmit}
    >
        <div className={clsx(s.container, 'flex-column')}>
            <Input
                value={ClientName} onChange={onChangeName}
                type='text'
                onBlur={onBlurName}
                error={isErrorName}
                placeholder='Введите...' name='ClientName'>
                ФИО *
            </Input>
            <Input
                value={Email} onChange={onChangeEmail}
                onBlur={onBlurEmail}
                error={isErrorEmail}
                type='email' name='Email' placeholder='Введите...'>
                Почта *
            </Input>
            <Input
                onBlur={onBlur}
                inputRef={ref}
                placeholder='Введите...'
                type='tel'
                name='Phone'
                error={isErrorTel}
            >
                Номер телефона *
            </Input>
        </div>
        <Button type='submit' disabled={isErrorEmail || isErrorName || isErrorTel || !ClientName || !Email || !Phone}>Login</Button>
        {isError && <p>Что-то пошло не так, приносим прощение</p>}
    </Form>
}