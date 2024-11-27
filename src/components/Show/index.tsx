import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './Show.css'

export const Show = () => {

    const [eye, setEye] = useState(false)
    
    const hideEye = () => {
        setEye(!eye)
    }

    return (
        <>
            {eye ? <FontAwesomeIcon icon={faEye} className='eye-container' onClick={hideEye} /> : <FontAwesomeIcon icon={ faEyeSlash } className='eye-container' onClick={hideEye} /> }
        </>
    )
}

