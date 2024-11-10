import { Link } from 'react-router-dom'

import { Button } from '../shared/ui/Button'

export const Buy = ({id}) => {
    return <Button to={`form?id=${id}`} Component={Link}>
        Buy
    </Button>
}