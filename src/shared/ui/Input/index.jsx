import clsx from 'clsx'

import s from './input.module.css'

export const Input = ({
    type = 'text',
    name,
    error,
    placeholder,
    children,
    inputRef,
    ...props
}) => {
    return <div className={s.container}>
        <label className={clsx(s.label, { [s.error_label]: error })}>{children}
        </label>
        <input
            ref={inputRef}
            {...props}
            type={type} name={name} placeholder={placeholder}
            className={clsx(
                s.form_control, {
                [s.error]: error,
                [type === 'chackbox']: s.checkbox
            })}
        />
    </div>
}