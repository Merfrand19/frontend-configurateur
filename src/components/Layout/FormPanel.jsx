import React from 'react'
import { useLayoutContext } from '../../context/appContext';

const FormPanel = () => {
    const {setBrand}=useLayoutContext()

  return (
    <div>
        <input type="text" onChange={(e)=>setBrand(e.target.value)}/>
    </div>
  )
}

export default FormPanel