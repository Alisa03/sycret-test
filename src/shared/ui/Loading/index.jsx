import s from './loading.module.css'

export const Loading = () => {
    return <div className={s.main}>
        <div className={s.loader} />
    </div>
}