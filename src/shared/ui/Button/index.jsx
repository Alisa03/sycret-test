import clsx from 'clsx'

import s from './button.module.css'

export const Button = ({
    Component = 'button',
    onClick,
    isLoading = false,
    children,
    className,
    ...props
}) => {
    return <Component
        onClick={onClick}
        disabled={isLoading}
        className={clsx(s.btn, s.containe_light, className)}
        {...props}
    >
        {
            isLoading ? <div className={s.main}>
                <div className={s.loader} />
            </div>
                : children
        }
    </Component>
}