import { Link } from 'react-router-dom'

import { Buy } from '../../fuaters'

import { formatPrice } from '../../shared/utils'
import { regSumma } from '../../shared/const'

import s from './product.module.css'

export const Products = ({ item }) => {
    return <div className={s.block}>
        <Link to={`forms?id=${item.ID}&Price=${item.PRICE}&Summa=${item.SUMMA}&TableName=${item.TABLENAME}&PrimaryKey=${item.PRIMARYKEY}`}>
            <div>
                <div className={s.img_block}>
                    <img alt={`Cертификат на ${formatPrice(item.SUMMA)} руб`} className={s.img} src='/image/card.webp' />
                </div>
                <div className={s.about}>
                    <h3 className={s.name}>
                        Cертификат на {formatPrice(item.SUMMA)} руб
                    </h3>
                    <div className={s.prices}>
                        <span className={s.price_after}>
                            {formatPrice(item.SUMMA)} ₽
                        </span>
                        <span className={s.price_before}>
                            {formatPrice(item.PRICE)}
                        </span>
                        <span className={s.discount} >
                            {item.DISCOUNT.replace(regSumma, '')}%
                        </span>
                    </div>
                </div>
            </div>
        </Link>
        <Buy id={item.ID} />
    </div>
}