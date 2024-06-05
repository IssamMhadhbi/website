import React from 'react'
import './Description.css'
import pep from '../../res/pep.jpeg'

const Description = () => {
  return (
    <div className='Description'>
        <div className='Content'>
        <p>
        Bienvenue à notre pepiniere, où l'innovation technologique transforme la production de jeunes plants. Nous utilisons des capteurs avancés pour surveiller en continu la lumière (LDR), l'humidité du sol et la température. Ces données nous permettent de réguler automatiquement la température, l'éclairage et l'irrigation. Notre système intelligent ajuste la lumière et active la pompe à eau en fonction des besoins des plantes, assurant un environnement optimal pour leur croissance. À notre pepiniere intelligente, nous allions tradition agricole et technologie de pointe pour vous offrir des plants de la plus haute qualité.
        </p>
        </div>
        <div className='Cover'>
            <img src={pep} />
        </div>
    </div>
  )
}

export default Description