import React from 'react';
import '../style/Login.less';
import DataUser from '../Data/Data';
import '../style/GroupStudent.less';

export let Username;
export default function Login() {


    const ConfirmID = (e) =>{
        e.preventDefault()
        if(DataUser[0].Username == document.getElementById('Username').value){
            if(DataUser[0].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Welcome <span>${document.getElementById('Username').value}</span> to <span>G4</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <h2>${document.getElementById('Username').value}</h2>
            <p>Aprecio profundamente tu paciencia y la manera en que has compartido tu experiencia conmigo. Me has mostrado que la verdadera enseñanza va más allá de los conocimientos; se trata de inspirar y motivar</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);
                
            }else{

            }
        }else if(DataUser[1].Username == document.getElementById('Username').value){
            if(DataUser[1].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Welcome <span>${document.getElementById('Username').value}</span> to <span>G4</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <h2>${document.getElementById('Username').value}</h2>
            <p>Aprecio profundamente tu paciencia y la manera en que has compartido tu experiencia conmigo. Me has mostrado que la verdadera enseñanza va más allá de los conocimientos; se trata de inspirar y motivar</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);
            }else{

            }
        }
    };



  return (
    <section className='SLogin'>
        <form className='SL__Form' id='SL__Form' onSubmit={ConfirmID}>
            <div className='SL__Form_div1'>
                <i class='bx bx-user'></i>
                <h2>Sign In</h2>
            </div>
            <div className='SL__Form_div2'>
                <input type="text" placeholder='Username' id='Username' />
                <input type='password' placeholder='Password' id='Password' />
            </div>
            <div className='SL__Form_div3'>
                <input type="submit" value="Sign In" />
            </div>
        </form>


         <section className='GroupStudent' id='GroupStudent' >
                
        </section>
        <section className='SCartas' id='SCartas'>
         
    </section>


    </section>
  )
};
