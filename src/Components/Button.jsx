import React,{useContext} from 'react'
import './button.css'
import { handleButton } from '../Contexto/Contexto'

const Button = () => {

  const {cambiar} = useContext(handleButton)

  return (
    <div className='btnContainer'>
        <div className="btnWrapper">
            <button onClick={cambiar}>Aprietame!</button>
        </div>
    </div>
  )
}

export default Button;