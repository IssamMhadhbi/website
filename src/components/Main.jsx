import React, { useState } from 'react'
import './Main.css'
import Felfel from './courbes/Felfel'
import Batata from './courbes/Batata'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const [isFelfel,setFelfel]  = useState(true)
  const naviagte = useNavigate()
  const goToHome = ()=> {
    naviagte('/')
  }
  return (
    <div className='main'>
    <button id='backbtn' onClick={goToHome}>Back</button>
        <div className='navs'>
            <ul>
                <li onClick={()=> {setFelfel(true)}}>Poivre</li>
                <li onClick={()=> {setFelfel(false)}}>Céleri </li>
            </ul>
        </div>
        <div className='courbes'>
        {isFelfel ? 
        (
          <Felfel/>
        ) :
        (
          <Batata/>
        )}
        </div>
    </div>
  )
}

export default Main