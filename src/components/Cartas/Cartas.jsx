import React from 'react';

export default function (props) {
  
  return (
    <section className='SCartas'>
        <div id = 'SCartas' >
            <h2>{props.name}</h2>
            <p>{props.carta}</p>
        </div>
        
    </section>
  )
}
