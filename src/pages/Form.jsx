import { useLayoutEffect } from 'react';

import { FormBuy } from '../screens/FormBuy';
import { BackButton } from '../fuaters';

export const Forms = () => {
    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [])

    return <>
        <div className='flex' style={{marginBottom: '2rem'}}>
            <BackButton />
            <h1 className='title'>Оформление покупки</h1>
        </div>
        <FormBuy />
    </>
}