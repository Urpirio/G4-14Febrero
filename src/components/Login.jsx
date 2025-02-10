import React from 'react';
import '../style/Login.less';
import DataUser from '../Data/Data';
import '../style/GroupStudent.less';

export let Username;

export default function Login() {

    const ConfirmID = (e) =>{
        e.preventDefault()
        if(DataUser[0].Username == document.getElementById('Username').value){//Admin
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
                   

                
                    

                    document.getElementById('SCartas').innerHTML = ` <div id = 'SCartas__div' >
            <h2>${document.getElementById('Username').value}</h2>
            <p>Aprecio profundamente tu paciencia y la manera en que has compartido tu experiencia conmigo. Me has mostrado que la verdadera enseñanza va más allá de los conocimientos; se trata de inspirar y motivar</p>
                   </div>`;
                   let Btn = document.createElement('button');
                   Btn.className = 'Btncerrar';
                   let b = document.createTextNode('Cerrar sesion');
                   Btn.append(b);
                   Btn.addEventListener('click',()=>{
                       window.location.href = 'https://g4-14-febrero.vercel.app/';
                   })
                   
                   document.getElementById('SCartas__div').append(Btn);


                });

              
                    



                




                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);
                document.getElementById('SCartas__div').append(Btn);
                
            }else{

            }
            
        }else if(DataUser[1].Username == document.getElementById('Username').value){//Nashla
            if(DataUser[1].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Bienvenida <span>${document.getElementById('Username').value}</span> a <span>G4</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';
                D.addEventListener('click',()=>{
                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'none';
                    document.getElementById('SLogin').style.background = '#FEFEFE'
                    document.getElementById('SLogin').innerHTML += `<section id='Nashla'></section>`;
                    let NalaElement = document.getElementById('Nashla');
                    let NalaImg = document.createElement('img');
                    NalaImg.className = 'NalaImg';
                    NalaImg.src = 'https://cdn-images.dzcdn.net/images/artist/93a458fff3ae7f831fe78fcc47cc5e15/1900x1900-000000-80-0-0.jpg';
                    NalaElement.append(NalaImg);
                    let GojoWord = document.createElement('h3');
                    let GojoF = document.createTextNode('Estas segura de que deseas continuar.');
                    GojoWord.append(GojoF);
                    NalaElement.append(GojoWord);
                    let Btnconteiner = document.createElement('div');
                    Btnconteiner.className = 'Btnconteiner';
                    let BtnNalaContinua = document.createElement('button');
                    
                    
                    



                    BtnNalaContinua.className = 'BtnNalaContinua';
                    BtnNalaContinua.id ='BtnNalaContinua';
                    let BtnNalaNoContinua = document.createElement('button');
                    BtnNalaNoContinua.className = 'BtnNalaNoContinua';
                    BtnNalaNoContinua.id = 'BtnNalaNoContinua';
                    let TextNala = document.createTextNode('Si');
                    let TextNalaNo = document.createTextNode('No');
                    BtnNalaContinua.append(TextNala);
                    BtnNalaNoContinua.append(TextNalaNo);

                    BtnNalaNoContinua.addEventListener('click',()=>{
                        GojoWord.innerHTML = `Eso es todo,  Adiosss`;
                        BtnNalaNoContinua.remove();
                        BtnNalaContinua.remove();
                        setTimeout(()=>{
                            window.location.href = 'https://g4-14-febrero.vercel.app/';
                        },3000);
                        
                    });
                    BtnNalaContinua.addEventListener('click',()=>{
                        BtnNalaNoContinua.remove();
                        BtnNalaContinua.remove();
                        NalaImg.remove();
                        GojoWord.remove();
                        Btnconteiner.remove();

                        let CoraNala = document.createElement('img');
                        CoraNala.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png';
                        CoraNala.className = 'CoraNala';

                        let animacion;
                        setInterval(()=>{
                            if (animacion == undefined){
                                animacion = 1;
                                CoraNala.style.animation = 'Cora2 1s infinite';
                               
                            }else{
                                animacion = undefined ;
                                CoraNala.style.animation = 'Cora1 1s infinite';
                            };
                        },1000);

                        NalaElement.append(CoraNala);
                        CoraNala.addEventListener('click',()=>{
                            let Buscame = document.createElement('h3');
                            let TextBuscame = document.createTextNode('Antes de seguir, Búscame. Asegúrate de que estoy justo frente a ti. Si lo estás, y solo si lo estás… entonces lee la carta.')
                            Buscame.append(TextBuscame);
                            NalaElement.append(Buscame);
                            let BtnListo = document.createElement('button');
                            BtnListo.className = 'BtnListo';
                            let TextListo = document.createTextNode('Leer');
                            BtnListo.append(TextListo);
                            NalaElement.append(BtnListo);


                        });










                    });

                    Btnconteiner.append(BtnNalaNoContinua);
                    Btnconteiner.append(BtnNalaContinua);

                    NalaElement.append(Btnconteiner);
                    
                    
                    
                   
                   
                });


                let T = document.createTextNode('Continuar');
                D.append(T)
                document.getElementById('GroupStudent').append(D);
            }else{

            }
        }else if(DataUser[2].Username == document.getElementById('Username').value){//Javier
            if(DataUser[2].Password == document.getElementById('Password').value){
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
            <p>Eres de esas personas que hace que cualquier momento se vuelva más divertido. Siempre tienes una broma lista para hacernos reír, aunque, hay que admitirlo, no siempre lo logras. Aun así, tu energía y tu buena onda son contagiosas. Nos compartes tus ideas y
             haces más llevaderas hasta las clases más aburridas. ¡Sigue siendo el genio que eres en todo
              lo que haces! Se te quiere.</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);
            }else{

            }
        }else if(DataUser[3].Username == document.getElementById('Username').value ){//Enmanuel
            if(DataUser[3].Password == document.getElementById('Password').value){
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
            <p>Señor Batuce, eres ese amigo indispensable que equilibra la crítica constructiva con el arte de molestar,
             siempre con ingenio, empatía y oportunas ideas que hacen la diferencia; un hater de primera,
              pero también un apoyo incondicional, alguien que sabe ayudar y hacer reír en igual medida, 
            y aunque a veces seas insoportable(XDDDD), el mundo sería mucho más aburrido sin ti.</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[4].Username == document.getElementById('Username').value){//Yeremi
            if(DataUser[4].Password == document.getElementById('Password').value){
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
            <p>LOCOOOOOO, ya es hora de un cambio de look. Quítate esa barba, dale un respiro a tu cara y córtate el pelo, que seguro ni recuerdas cómo te ves sin tanto cabello.
             Un refresh nunca cae mal, quién sabe, capaz hasta te ves mejor sin ella. Dale, anímate, que no cuesta nada probar(Ronald Sabe Recortar).</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[5].Username == document.getElementById('Username').value){//Sanmy
            if(DataUser[5].Password == document.getElementById('Password').value){
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
        }else if(DataUser[6].Username == document.getElementById('Username').value){ //PedroMiguel
            if(DataUser[6].Password == document.getElementById('Password').value){
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
        }else if(DataUser[7].Username == document.getElementById('Username').value){//Pedro Amin
            if(DataUser[7].Password == document.getElementById('Password').value){
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
        }else if(DataUser[8].Username == document.getElementById('Username').value){//Ronald
            if(DataUser[8].Password == document.getElementById('Password').value){
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
        }else if(DataUser[9].Username == document.getElementById('Username').value){//Yohandy
            if(DataUser[9].Password == document.getElementById('Password').value){
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
        }else if(DataUser[10].Username == document.getElementById('Username').value){
            if(DataUser[10].Password == document.getElementById('Password').value){
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
        }else if(DataUser[11].Username == document.getElementById('Username').value){
            if(DataUser[11].Password == document.getElementById('Password').value){
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
        }else if(DataUser[12].Username == document.getElementById('Username').value){
            if(DataUser[12].Password == document.getElementById('Password').value){
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
        }else if(DataUser[13].Username == document.getElementById('Username').value){
            if(DataUser[13].Password == document.getElementById('Password').value){
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
        }else if(DataUser[14].Username == document.getElementById('Username').value){
            if(DataUser[14].Password == document.getElementById('Password').value){
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
        }else if(DataUser[15].Username == document.getElementById('Username').value){
            if(DataUser[15].Password == document.getElementById('Password').value){
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
        }else if(DataUser[16].Username == document.getElementById('Username').value){
            if(DataUser[16].Password == document.getElementById('Password').value){
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
        }else if(DataUser[17].Username == document.getElementById('Username').value){
            if(DataUser[17].Password == document.getElementById('Password').value){
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
        }else if(DataUser[18].Username == document.getElementById('Username').value){
            if(DataUser[18].Password == document.getElementById('Password').value){
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
        }else if(DataUser[19].Username == document.getElementById('Username').value){
            if(DataUser[19].Password == document.getElementById('Password').value){
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
    <section className='SLogin' id='SLogin'>
        <form className='SL__Form' id='SL__Form' onSubmit={ConfirmID}>
            <div className='SL__Form_div1'>
            <i >❤️</i> 
                <h2>San Valentín</h2>
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
        <section className={`SCartas`} id='SCartas'>
         
    </section>


    </section>
  )
};
