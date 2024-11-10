import { useLoaderData, useNavigation } from 'react-router-dom'

import { Products } from '../../modules/Products'

import s from './list.module.css'

export const ListSertification = () => {
    const { data } = useLoaderData()
    const { state } = useNavigation()

    if (state === 'loading') {
        return <p>loading...</p>
    }

    if (data.result !== 0) {
        return <h1 className={s.title}>Просим прощения, что-то пошло не так</h1>
    }

    return <section>
        <h1 className='title' style={{ marginBottom: '2rem' }}>Доступные сертификаты</h1>
        <div className={s.grid}>{
            data.data.map((item) =>
                <Products key={item.ID} item={item} />
            )}
        </div>
    </section>
}