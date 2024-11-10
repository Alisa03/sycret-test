import { Link } from 'react-router-dom'

import s from './header.module.css'
import clsx from 'clsx'

export const Header = () => {
    return <header className={s.wrapper}>
        <div className={clsx('container', s.container)}>
            <p>Logo</p>
            <nav className=''>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    </header>
}