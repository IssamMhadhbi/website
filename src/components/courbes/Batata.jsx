import React from 'react'
import './Courbe.css'

const Batata = () => {
  return (
    <div className='charts'>
        <iframe width="450" height="260"  src="https://thingspeak.com/channels/2540019/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
        <iframe width="450" height="260"  src="https://thingspeak.com/channels/2540019/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
        <iframe width="450" height="260"  src="https://thingspeak.com/channels/2540019/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>



    </div>
  )
}

export default Batata