import './Button.css'

interface ButtonProps {
    label: string,
    type: string,
    parentMethod: () => void
}

export const Button = ({label, type, parentMethod}: ButtonProps) => {
    return(
        <button className={`btn btn-${type}`} onClick={parentMethod}>
            {label}
        </button>
    )
}