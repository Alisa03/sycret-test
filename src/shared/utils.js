import { regSumma } from "./const"

export const formatPrice = (price) => {
    const intl = new Intl.NumberFormat('ru-RU')

    return intl.format(price.replace(regSumma, ''))
}