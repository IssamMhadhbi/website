import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Description from '../components/Navbar/Description'
import plante from '../res/p2.jpg'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Description/>
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'100%', height:'50vh'}}>
            <table border={1}>
                <tr>
                    <th>Plante</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>
                        <img src={plante} alt='h' />
                    </td>
                    <td>
                        <p>
                        Nos poivrons, cultivés avec une régulation automatique de la lumière, de l'humidité du sol et de la température, poussent dans des conditions optimales pour une croissance saine et vigoureuse.
                        </p>
                    </td>
                    <td>
                        <span id='green'>Disponible</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={plante} alt='h' />
                    </td>
                    <td>
                        <p>
                        Nos poivrons, cultivés avec une régulation automatique de la lumière, de l'humidité du sol et de la température, poussent dans des conditions optimales pour une croissance saine et vigoureuse.
                         </p>
                    </td>
                    <td>
                        <span id='red'>Soldé</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={plante} alt='h' />
                    </td>
                    <td>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </td>
                    <td>
                        <span id='green'>Disponible</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Home