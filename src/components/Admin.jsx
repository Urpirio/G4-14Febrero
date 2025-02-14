import React from 'react';
import '../style/GroupStudent.less';
import Cartas from './Cartas/Cartas';
import { useState } from 'react';

export default function Admin() {
  const [Change,setchange]= useState(true);
    const Continuar = () =>{
      setchange(!Change);

        Change ? document.querySelector('.SCartas').style.display = 'flex' : document.querySelector('.SCartas').style.display = 'none';
        Change ? document.querySelector('.GSwelcome').style.display = 'none' : document.querySelector('.GSwelcome').style.display = 'flex';
        Change ? document.querySelector('.btnContinuar').style.display = 'none' : document.querySelector('.btnContinuar').style.display = 'flex';
    };
    
  return (
   <section className='GroupStudent'>
    <h1 className = 'GSwelcome'> Welcome <span>Admin</span> to <span>G4</span></h1>
    <button className='btnContinuar' onClick={Continuar}>Continuar</button>
    <Cartas name = 'Admin' carta = 'Aprecio profundamente tu paciencia y la manera en que has compartido tu experiencia conmigo. Me has mostrado que la verdadera enseñanza va más allá de los conocimientos; se trata de inspirar y motivar' />
   </section>
  )
};
