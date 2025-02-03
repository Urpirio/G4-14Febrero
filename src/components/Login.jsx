import React from 'react';
import '../style/Login.less';
import DataUser from '../Data/Data';

export let Username;
export default function Login() {


    const ConfirmID = (e) =>{
        e.preventDefault()
        if(DataUser[0].Username == document.getElementById('Username').value){
            if(DataUser[0].Password == document.getElementById('Password').value){
                window.location.pathname = '/Admin';
                
            }else{

            }
        }else if(DataUser[1].Username == document.getElementById('Username').value){
            if(DataUser[1].Password == document.getElementById('Password').value){
                window.location.pathname = '/Nashla';
            }else{

            }
        }
    };



  return (
    <section className='SLogin'>
        <form className='SL__Form' onSubmit={ConfirmID}>
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
    </section>
  )
};
