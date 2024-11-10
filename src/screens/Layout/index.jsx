import { Outlet } from 'react-router-dom'

import { Header } from '../../modules'

import s from './layout.module.css'

export const Layout = () => {
    return <div className={s.wrapper}>
        <Header />
        <main className='container'>
            <Outlet />
        </main>
    </div>
}