import { Show } from '../Show'
import './Input.css'

interface InputProps {
    hideEye?: boolean,
    type: string
}

export const Input = ({hideEye, type}: InputProps) => {
    return(
        <div>
            <input type={type} />
            {hideEye ?? <Show />}
        </div>
    )
}