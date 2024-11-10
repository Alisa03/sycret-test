import s from './icon_button.module.css'

export const IconButton = ({ Component = 'button', icon, alt, ...props }) => {
    return <Component className={s.container} {...props}>
        <span>
            <img className={s.svg} src={`/image/icon/${icon}.svg`} alt={alt} />
        </span>
    </Component>
}