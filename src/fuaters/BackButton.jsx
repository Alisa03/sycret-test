import { Link, useNavigate } from "react-router-dom"

import { IconButton } from "../shared/ui/IconButton"

export const BackButton = () => {
    let navigate = useNavigate();

    return <IconButton to={navigate(-1)} Component={Link} icon='arrow' alt="Предыдущая страница" />
}