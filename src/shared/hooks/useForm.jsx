import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { instance } from '../lib/axios'

export const useForm = (data) => {
    const [isError, setIsError] = useState(false)
    let [searchParams] = useSearchParams()
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault()

        setIsError(false)
        instance({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            params: {
                ApiKey: process.env.REACT_APP_API_KEY,
                MethodName: 'OSSale',
                IsGift: 0,
                UseDelivery: 0,
                PaymentTypeId: 2,
                // буду благодарна идеи как это сделать нормально 
                Id: searchParams.get('id'),
                Price: searchParams.get('Price'),
                Summa: searchParams.get('Summa'),
                TableName: searchParams.get('TableName'),
                PrimaryKey: searchParams.get('PrimaryKey'),
                ...data
            }
        })
            .then((response) => {
                return navigate('/payment')
            })
            .catch(() => {
                return setIsError(true)
            })
    }

    return { onSubmit, isError }
}