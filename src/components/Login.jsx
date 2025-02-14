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
                 Bienvenida <span>Nashla</span> a <span>G4-14F</span></h1>`;

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
                        let change;
                        CoraNala.addEventListener('click',()=>{
                            if(change== undefined){
                                var Buscame = document.createElement('h3');
                            var TextBuscame = document.createTextNode('Antes de seguir, Búscame. Asegúrate de que estoy justo frente a ti. Si lo estás, y solo si lo estás… entonces lee la carta.')
                            Buscame.append(TextBuscame);
                            NalaElement.append(Buscame);
                            var BtnListo = document.createElement('button');
                            BtnListo.className = 'BtnListo';
                            let TextListo = document.createTextNode('Leer');
                            BtnListo.append(TextListo);
                            NalaElement.append(BtnListo);
                            change = 1;
                            }else{

                            };

                            BtnListo.addEventListener('click',()=>{
                                Buscame.remove();
                                TextBuscame.remove();
                                CoraNala.remove();
                                BtnListo.remove();
                                NalaElement.innerHTML +=`<div class = 'NashlaCarta'>
                                <b>Para Nashla Sena, alguien simplemente única❤️</b><br><br>

Nashla, si me hubieran dicho el primer día que te vi que algún día escribiría esta carta, probablemente me habría reído. Nunca imaginé que llegaríamos a ser tan cercanos, mucho menos que llegaría a sentir algo tan especial por ti. Es extraño pensar en cómo solía verte antes y en lo diferente que es todo ahora. <br><br>

Siempre supe que eras inteligente, ingeniosa y capaz de muchas cosas, pero con el tiempo, al hablar más contigo, me di cuenta de que hay mucho más en ti. Me sorprendieron tus medallas en ajedrez, tu amor por el anime, y hasta esa forma juguetona que tienes de ser, aunque sabes perfectamente cuándo ponerte seria. Admiro tu determinación, tu claridad al saber lo que quieres y tu manera de buscarlo hasta conseguirlo. Esas son cualidades que no todos tienen, y son parte de lo que te hace única. <br><br>

Trabajar en equipo contigo es como completar la otra mitad. Cuando lo hacemos, siento más seguridad, como si supiera que las posibilidades de fallar fueran menores. De alguna manera, me complementas. Hay cosas en ti que admiro porque yo no las tengo, y verte ser así me inspira.<br><br>

A lo largo del tiempo, sin darme cuenta, empecé a verte de otra manera. No sé en qué momento exacto pasó, pero pasó. Y ahora, simplemente lo sé: estoy enamorado de ti. Me encanta cuando te haces rizos, ese olor tan intenso que siento cada mañana cuando te acercas, y hasta esa manera en que a veces quieres romper la computadora cuando el código no compila. Admiro el esfuerzo que pones en entenderlo todo, la pasión que le pones a la programación, y ni hablar de la música. Desde el momento en que supe que tocabas el saxofón y otros instrumentos de viento, fue algo que me atrapó aún más.<br><br>

Sé que probablemente ya has escuchado que me gustas, y sí, es completamente cierto. Me encantaría construir algo bonito contigo, conocerte más y seguir compartiendo momentos. Es por eso hoy viernes 14 de febrero quiero decirte todo esto en persona. Sí, sé que no es la idea más original declararse este día, pero no encontré otro momento que se sintiera tan significativo para hacerlo.<br><br>

No sé cuál será tu respuesta, pero pase lo que pase, quiero que sepas que seguiré queriéndote, respetándote y apoyándote como hasta ahora. Eres alguien increíble, y eso no cambiará.<br><br>

Ah, y aunque todavía no entiendo cómo alguien puede no gustarle el aguacate ni cómo puedes ser tan mañosa con la comida… se te quiere y se te ama tal y como eres.<br><br>

Con cariño,
Urpirio
                                </div>`;
                               
                                let BtnContinuar= document.createElement('button');

                            
                            
                            })

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
                 Para ${document.getElementById('Username').value}, el maestro del <span>humor y del caos</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div class = 'sanmy' >
            <p>Sanmy, quería tomarme un momento para escribirte estas palabras, porque aunque a veces parezca que solo nos dedicamos a tirar chistes raros y a incomodar a la gente con nuestras ocurrencias(Bueno tu y javier XDD yo aveces), la verdad es que valoro mucho tenerte cerca.<br><br>

Tienes un gusto peculiar por Brasil y el portugués, algo que, sinceramente, me sigue pareciendo una de las cosas más random y geniales a la vez. No cualquiera puede hacer de un idioma su marca personal, pero tú lo logras con estilo. Y qué decir de tu humor… a veces tan roto que hasta el abismo se queda corto. No cualquiera entiende ese tipo de bromas, pero quienes lo hacemos sabemos que detrás de cada chiste incómodo hay una mente maestra operando.<br><br>

Pero más allá de eso, lo que más aprecio de ti es que, cuando realmente se necesita, estás ahí. Eres de esas personas que pueden sacarle una risa a cualquiera, pero también de las que saben cuándo es momento de ponerse serias y dar apoyo. Y eso, amigo, vale más que cualquier chiste, por más negro que sea.<br><br>

Así que nada, solo quería recordarte que se te valora más de lo que probablemente admitiría en una conversación normal. Gracias por ser tú, con toda tu esencia brasileña, tu humor peculiar y esa forma extraña pero sincera de demostrar que te importan los demás.<br><br>

Un abrazo, aunque sé que preferirías un chiste incómodo en su lugar. Att: Urpirio</p>
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
                 Para Pedro Miguel, <span>el distraído más brillante</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Pedro Miguel, tenía ganas de escribirte esto porque, aunque a veces parezca que andas en otro mundo, sé que en realidad tu mente siempre está en movimiento. Ya sea jugando, practicando o tratando de romperte el caco descifrando cómo funcionan las cosas, siempre estás buscando aprender y resolver problemas, aunque desde afuera parezca que solo estás perdido en tus pensamientos.<br><br>

A tu manera, te esfuerzas más de lo que muchos pueden ver, y eso es algo que valoro mucho. No siempre se nota, pero sé que lo haces, y eso dice mucho de la persona que eres. Además, tus preguntas random y esas conversaciones raras sobre "cuando me case" hacen que todo sea más entretenido. Nunca sabes por dónde vas a salir, y creo que eso es parte de tu encanto.<br><br>

Eres un gran compañero, alguien con quien siempre se puede contar, y la verdad es que te quiero un montón. No cambies tu forma de ser, porque es precisamente lo que te hace único.<br><br>

Un abrazo, aunque probablemente lo interrumpas con una pregunta random en cualquier momento.Att: Urpirio </p>
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
                 Para Pedro Amin,<span> el maestro del toque y el caos.</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Pedro Amin, no sé ni por dónde empezar contigo, porque eres un personaje de otro nivel. Siempre con ese meneo raro y esa manía de tocar a la gente como si estuvieras marcando territorio. A veces pienso en ponerte una orden de alejamiento por tu sobadera y jodedera, pero, al final del día, la verdad es que el curso no sería lo mismo sin ti.<br><br>

Tu humor negro es de otro planeta, parece que no hay chiste demasiado oscuro para ti. Y, aunque a veces incomodas hasta al más inmune, hay algo en ti que hace que todo sea más entretenido. Sanmy es tu kriptonita, pero también tu cómplice en ese arte de poner a la gente en situaciones incómodas.<br><br>

Más allá de toda esa locura, algo que admiro de ti es tu capacidad para aprender. Si algo te interesa, lo intentas hasta que te salga, sin importar cuántas veces lo hagas mal al principio. No todo el mundo tiene esa determinación, y es algo que te hace especial. Ah, y tu habilidad en el ajedrez no es un chiste, le has ganado a medio mundo en el CTC.<br><br>

Por cierto, peínate como cuando te conocí, que ese estilo tenía algo icónico. En serio.<br><br>

En fin, aunque a veces me hagas considerar seriamente la orden de alejamiento, la verdad es que te quiero un montón. Sin ti, todo sería mucho más aburrido.<br><br>

Un abrazo, pero sin tanto toque, por favor. Att: Urpirio</p>
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
                 Para Ronald,<span> el apasionado de los autos y más</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Ronald, quería escribirte esto porque, aunque a veces parezcas tranquilo y metido en tus pensamientos, sé que hay mucho más en ti de lo que la gente ve a simple vista. Eres un amante de los autos como pocos, no te pierdes ni un solo evento de vehículos deportivos, y cuando hablas del tema se nota la pasión con la que lo vives.<br><br>

Eres increíblemente inteligente, incluso si a veces no lo aparentas. Escuchas con atención, eres educado y siempre estás al día, esforzándote al máximo sin importar lo cansado que estés. Lo veo cuando llegas al CTC con ojeras, pero aún así te mantienes despierto, buscando la manera de estar atento a lo que el maestro Diego dice. Esa dedicación es algo que muchos notamos y valoramos.<br><br>

Ahora también estás estudiando inglés, y aunque sé que a veces dudas de ti mismo, quiero recordarte algo importante: todos confiamos en ti, incluso cuando tú no lo haces. Sabemos que puedes lograr más de lo que imaginas, porque tienes un potencial enorme. Solo tienes que creerlo tú también.<br><br>

Y por si alguna vez te lo preguntas: Ronald, todos te queremos. Y Ronald, nada es tu culpa.<br><br>

Un abrazo, y sigue siendo tú. Att: Urpirio</p>
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
                 Para Yohandy, <span> el niño con musa y mucho más </span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >

            <p>Yohandy, desde el momento en que supe de tu existencia, mi cabeza explotó. ¿Cómo alguien termina la escuela tan joven? Desde ese día dije: “Este tipo es durísimo”, y con el tiempo solo confirmaste que tenía razón. Eres increíblemente talentoso en muchas áreas, enfocado cuando se trata de resolver problemas y, aunque no seas el más disciplinado, cuando te propones algo, lo logras. Eres alguien top, sin duda.<br><br>

Pero más allá de lo impresionante que eres en lo académico, está el Yohandy que considero un amigo cercano. Tienes tu lado medio alocado, a veces te distraes y hay momentos en los que parece que eres de La Victoria y otros en los que te falta calle, pero eso es parte de lo que te hace único. Y luego está tu talento con las palabras… porque sí, escribes poemas hermosos que realmente valen la pena. No por nada te ganaste el apodo de “el niño con musa” (y sí, porque además tienes novia, demasiado duro pero cierto jajaja).<br><br>

Tu flow es tremendo, manejas la comunicación como un experto y tienes una pronunciación que muchos envidiarían. Pero lo que más valoro es la persona que eres: alguien que está ahí cuando se le necesita, que apoya sin dudar y que se gana el cariño de los que lo rodean.<br><br>

Quiero que sepas que te aprecio un montón y que valoro mucho todo lo que has hecho, especialmente con Nashla. Independientemente del resultado, el simple hecho de que me hayas ayudado significa mucho para mí.<br><br>

Eres un amigo increíble, y me alegra poder decírtelo.<br><br>

Un abrazo, Yohandy, sigue siendo el niño con musa y con flow. Att:Urpirio</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[10].Username == document.getElementById('Username').value){//yerlina
            if(DataUser[10].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Para Yerlina, <span>la amante de los libros y las matemáticas</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Yerlina, desde que te conocí, supe que eras alguien especial. Amante de los libros, con una mente curiosa que disfruta de las matemáticas, incluso cuando a veces parecen no querer cooperar contigo(es decir te pierdes en el ejercicio). Siempre con tus audífonos y esa esencia tan única, como si tuvieras tu propio mundo sonando de fondo.<br><br>

Eres callada y algo tímida(si), pero cuando te propones algo, lo logras. Me sorprendió muchísimo cuando creaste una página de libros con algunos de tus favoritos, y en ese momento entendí que tienes una capacidad increíble para hacer cosas grandes. Puede que no hablemos con tanta intensidad, más allá de esos “buenos días” secos de la mañana (con una falta de cariño evidente, por cierto xD), pero igual se te quiere mucho y a tu manera.<br><br>

Eso sí, trata de no acabar con el pobre Víctor y Pedro en el proyecto final, llévalos con calma, que ellos también son duros y pueden sorprenderte.<br><br>

Quiero recordarte que eres capaz de muchas más cosas de las que crees. Tienes talento, determinación y, además, un muy buen estilo para vestir. Pero, por favor, no uses blanco, que con tanto lodo suelto es una batalla perdida.<br><br>

Un abrazo, Yerlina. Sigue siendo tú. Att: Urpirio</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[11].Username == document.getElementById('Username').value){//Oliver
            if(DataUser[11].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Para Oliver, <span>el otaku disciplinado y confiable</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >

            <p>Oliver, desde el momento en que te conocí, supe que eras diferente. Medio raro (en el mejor sentido), full otaku y fan del anime. Nunca olvidaré cómo lo primero que hiciste fue poner una canción de anime, y cómo Nashla se cambió de lugar por eso XDD. Fue un momento icónico, digno de recordar.<br><br>

Pero más allá de los memes de anime, tengo muchas cosas buenas que decir sobre ti. Me impresiona tu capacidad de aprendizaje y la disciplina que has demostrado en estos últimos días. Todo lo que me has enseñado sobre CSS, Python y HTML… en serio, ¿qué haría sin ti? He visto cómo te esfuerzas por lograr lo que quieres y cómo siempre estás dispuesto a ayudar a los demás.<br><br>

Sí, a veces eres un poco tímido y en otras ocasiones te sale el lado medio agresivo, pero al final del día, eres una persona increíblemente sana. Recuerdo la primera vez que oraste antes de comer, me sorprendió y, al mismo tiempo, me pareció un gesto muy bonito. Es algo que no se ve todos los días y que habla bien de ti.<br><br>

Sinceramente, te considero alguien que me ha ayudado muchísimo, y por eso solo tengo una palabra para ti: gracias.<br><br>

Eres alguien en quien se puede confiar, y eso vale mucho más de lo que crees.<br><br>

Un abrazo, Oliver. Sigue siendo tú. att: Urpirio</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[12].Username == document.getElementById('Username').value){//moises
            if(DataUser[12].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Para Moisés, <span>alguien digno de admirar</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>

La primera vez que te vi, no sabía qué pensar. Parecías una persona seria, como si ya hubieras vivido 40 vidas. Se te veía algo cerrado al interactuar con los demás, siempre con los audífonos puestos y perdido en tu propia música. Al principio, dabas la impresión de estar despistado y, para ser sincero, no parecías muy inteligente en la forma en que actuabas. Pero con el tiempo, me di cuenta de lo equivocado que estaba.<br><br>

Tu transformación ha sido increíble. Pasaste de estar desenfocado a esforzarte cada día más, dando lo mejor de ti en cada oportunidad. Has logrado grandes avances, incluso obteniendo un certificado como reconocimiento a tu esfuerzo. Y lo mejor es que sigues superándote, rompiendo tus propios límites y demostrando que cuando te lo propones, puedes alcanzar cualquier meta.<br><br>

Algo que admiro mucho de ti es que no buscas la aprobación de nadie. Eres alguien de bajo perfil, pero con una gran esencia. Amistoso, amable, siempre dispuesto a colaborar y trabajar en equipo. Tu educación y respeto por los demás hablan por sí solos, y eso es algo que vale mucho.<br><br>

Eres un ejemplo de que el progreso no tiene que ser inmediato, sino constante. No importa si el proceso es más lento que el de otros, lo importante es que estás logrando cosas positivas, paso a paso y de manera firme.<br><br>

Ah, y no podía olvidar mencionarlo: espero que algún día superes tu miedo a las vacas de la Nueva Barquita… aunque, siendo sinceros, te entiendo.<br><br>

Sigue adelante, Moisés. Eres alguien digno de admirar.<br><br>

Con aprecio, Urpirio.</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[13].Username == document.getElementById('Username').value){//Victor
            if(DataUser[13].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                Para Víctor, <span>el bandido con más potencial</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Víctor, el bandido del curso… ¡JAJAJA! Vitico, desde el primer día que te vi, me di cuenta de que tienes una personalidad única. A simple vista, puede que no parezcas el más inteligente, pero la verdad es que tienes talentos ocultos que ni siquiera tú mismo has descubierto por completo. Y te digo algo: el día que lo hagas, te vas a tragar el mundo.<br><br>

Eres alguien que se esfuerza mucho por lograr sus metas, aunque sí, te distraes un montón y te encanta jugar. Eres educado, no insultas a nadie(pedro miguel ssh no puede hablar), y aunque a veces intentas hacerte el duro, en realidad eres amoroso y hasta medio sensible. No puedes engañar a nadie con esa fachada de bandido, porque en el fondo eres muy buena gente.<br><br>

Nunca olvide cuando tenia cero y tú no perdiste la oportunidad de besarme la cabeza… ¡te pasaste! XDD. Pero eso es parte de lo que te hace ser tú, con tu humor y tu forma de ser. También recuerdo cuando empezamos a estudiar juntos y no te despegabas del teléfono. Se curaban diciendo que estabas en amor… ¡XDDD! Pero a pesar de eso, he visto cómo te esfuerzas y cómo sigues avanzando.<br><br>

No te lleves de Pedro Amin. Sé que lograrás cosas increíbles. Te veo con un potencial enorme, y puede que ahora mismo estés pensando que estoy exagerando o diciendo mentiras, pero créeme, cuando digo este tipo de cosas, las digo en serio.<br><br>

Te aprecio un montón, Vitico. Nunca dudes de lo que puedes llegar a ser.<br><br>

Con aprecio, Urpirio.</p>
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
                 Para Dioveny, <span>el que me cerró la boca</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Dio… este hombre. La primera impresión que me diste fue de atracador de Los Mina con cinco años de experiencia, pero después me callaste la boca en cuanto hablaste por primera vez en clase. Desde ese día, mi percepción de ti cambió por completo. La seguridad con la que te expresas, el léxico que manejas… durísimo.<br><br>

Cada día que pasaba compartiendo la misma aula, me daba más cuenta de lo equivocado que estaba con esa primera impresión. Eres increíblemente inteligente, hábil y rápido para resolver problemas. Tienes muchos talentos y hábitos que te hacen destacar. Y bueno, mega fan de One Piece, ¡se nota que te lo sabes completico! Me sorprende la pasión con la que hablas de ese anime, y eso que aún no ha terminado.<br><br>

Cuando fuimos a Sambil contigo y los muchachones, recuerdo que pensé: "Bárbaro, ¿cómo terminé aquí?". Pero al final, me cerraron la boca otra vez. Son tremendas personas, y tú en especial me dejaste una gran impresión. Ese día estuvo bacanísimo.<br><br>

En programación, siempre ibas más adelantado. Mientras yo estaba con CSS, tú ya estabas metido en JavaScript… una bestia. También tienes un talento especial para contar chistes en el mejor momento, y eso es algo que pocos saben hacer bien. No buscas problemas, te llevas bien con todos, y tienes una personalidad humilde, comprensiva y empática. Además, eres una persona que sabe lo que quiere y es súper decidido al tomar sus propias decisiones.<br><br>

Y loco, los tatuajes que tienes están durísimos. Todavía no encuentro la fuerza espiritual para hacerme uno, pero respeto el flow. Los del abdomen y el cuello te quedan apareos.<br><br>

Por cierto, sobre la apariencia… probablemente no fui el único que se confundió contigo al inicio. Quizás podrías hacer un pequeño cambio en tu estilo de vestir. Por ejemplo, cuando fuiste a la entrevista, te veías bacanísimo y con un flow brutal. Ese estilo te queda bien, bro.<br><br>

Te admiro y eres alguien digno de admirar. Con respeto y aprecio, Urpirio.</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[15].Username == document.getElementById('Username').value){//genesis
            if(DataUser[15].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Para Génesis, <span>alguien que siempre sorprende</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Génesis, al principio no tuve la mejor impresión de ti, pero con el tiempo me demostraste lo contrario. Tienes un talento increíble para la comunicación, las matemáticas y la resolución de problemas. Además, te adaptas rápido a cualquier situación, lo que es una habilidad que pocos tienen.<br><br>

Eres una persona trabajadora y honesta, alguien que se esfuerza día tras día, aunque a veces pase desapercibido. Luz Clara dice que eres un "bandido que calibra" XD, pero sabemos que es relajando.<br><br>

Tal vez en el curso no llegue a ver todo tu potencial, ya sea por el cansancio o porque algunas veces llegas tarde, pero eso no cambia el hecho de que tienes muchísimo que dar. Si te lo propones, sé que puedes lograr grandes cosas, incluso aquellas que parecen imposibles. No tengas miedo de apuntar alto, porque tienes lo necesario para alcanzar lo que te propongas.<br><br>

Admiro mucho tus valores: tu honestidad, empatía, respeto y paciencia. Y quiero que sepas algo: te respeto mucho más de lo que imaginas. Eres alguien que sorprende, y cuando lo haces, lo haces en grande.<br><br>

Con mucho aprecio, Urpirio.</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[16].Username == document.getElementById('Username').value){//Johan
            if(DataUser[16].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Para Johan, <span>un mentor invaluable</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>Johan, la verdad no sé bien cómo describirte, pero si hay algo que tengo claro es lo mucho que has significado en mi camino como desarrollador de software. Desde antes de hablar contigo, ya había escuchado sobre ti: que eres un duro en la programación, que tienes años de experiencia y un nivel extraordinario en el área. Y cuando finalmente tuve la oportunidad de conocerte, supe que todo eso era cierto.<br><br>

Para mí, has sido una pieza clave en mi crecimiento. No solo porque me has enseñado muchísimo, sino porque me has demostrado que el aprendizaje en este mundo no tiene límites. Que siempre hay algo nuevo por descubrir, que siempre hay un reto más por superar. Antes, hasta me daba miedo hablarte, y ahora eres uno de mis mentores, alguien que me ha ayudado a expandir mi conocimiento en formas que ni siquiera imaginaba.<br><br>

Si miro mi GitHub ahora, veo cómo he avanzado, cómo he empezado a aprender desarrollo móvil, y todo eso en gran parte gracias a ti. Eres un pilar esencial en el crecimiento de muchas personas, y estoy seguro de que has dejado huella en cada uno de nosotros.<br><br>

Te agradezco enormemente por tu disciplina, por compartir tu pasión por la programación y por ser esa guía que muchos necesitamos. Te respeto muchísimo y valoro todo lo que has aportado.<br><br>

Gracias por todo, Johan.<br><br>

Con mucho aprecio, Urpirio</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[17].Username == document.getElementById('Username').value){//luz Clara
            if(DataUser[17].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Luz Clara, <span>la maestra que dejó huella</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>

La primera vez que la vi, pensé: "Wey, esta maestra debe ser difícil". Pero con el tiempo me di cuenta de que estaba equivocado… hasta aquel día de las malas exposiciones. Ese día rompió el cascarón y soltó unas palabras que me marcaron. Desde entonces, me prometí a mí mismo que en su clase no podía fallar, ni en ninguna otra. Tenía que mantenerme enfocado y dar lo mejor de mí.<br><br>

Sin darme cuenta, terminé adquiriendo el hábito de la lectura, algo que realmente necesitaba. Ahora leo más, me esfuerzo más y busco siempre ir más allá del límite que creo tener. Gracias a usted, mejoré mi léxico y mi comprensión lectora; incluso, en exámenes de la universidad o en libros, he encontrado errores que antes ni habría notado. También aprendí a expresarme mejor, a ordenar mis ideas antes de hablar y a transmitir con claridad lo que quiero decir. Puede que usted no se haya dado cuenta de estos cambios, pero todo eso es gracias a su esfuerzo y dedicación.<br><br>

Extraño esos aplausos de las 9 de la mañana. Amo la energía con la que entra al aula y el ambiente que lograba crear en cada clase. Puede que no sea su mejor alumno, pero créame que sí soy uno de los que más la aprecia. Su determinación, disciplina y pensamiento crítico son algo que admiro muchísimo. Y su autoestima… eso sí es inquebrantable. Nunca la he visto llegar desmotivada, sin una sonrisa o sin esas ganas de enseñar y dejar huella en sus estudiantes.<br><br>

Ojalá siga transformando más vidas como lo hizo con la mía.<br><br>

Con mucho respeto y gratitud, Urpirio</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[18].Username == document.getElementById('Username').value){//Diego
            if(DataUser[18].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Diego, <span>el maestro que me inspiró</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >
            <p>La primera vez que entraste al aula y mencionaste que venías del ITLA, recién ingresado, me sorprendí bastante. Para mí, el mundo de la programación era algo que conocía, pero a la vez desconocía, así que lo veía como algo relativamente nuevo. Desde ese momento, sin darme cuenta, comencé a admirarte y a sentirme inspirado para aprender.<br><br>

Conforme avanzaba el programa, noté tu gran pasión por la enseñanza. No te conformabas con que simplemente aprendiéramos, sino que querías que realmente entendiéramos la lógica de la programación y pudiéramos resolver problemas complejos. Desde el inicio, pusiste muchísimo empeño en cada clase y cariño en todo lo que hacías, y eso se notaba. Tu dedicación fue clave para motivarme a superar mis propios límites.<br><br>

Aunque suene increíble, muchas de las cosas que sé ahora las aprendí gracias a ti. La lógica de programación, el pensamiento analítico y gran parte del amor que siento por esta área surgieron de tus enseñanzas. Y sé que no soy el único; dentro del grupo 4, hay más de uno que fue motivado por tu forma de enseñar. No solo explicas bien, sino que también sabes cómo conectar con tus alumnos y hacer que crean en sí mismos, y eso vale oro.<br><br>

Ahora, hablemos del Diego fuera del CTC. Es otra persona, pero sin perder su esencia. Si en el aula eres apasionado y entregado, fuera de clase eres aún más dinámico y auténtico. Eres súper amigable, sincero y honesto, con chistes que a veces dan risa… y otras veces, bueno, simplemente no, jaja. Tu vibra es tan única que a veces ni pareces un maestro en el sentido tradicional, pero justo eso es lo que te hace especial.<br><br>

Gracias, Diego, por inspirarme y por ayudarme a ver la programación con otros ojos.</p>
                   </div>`
                });


                let T = document.createTextNode('Ver Carta');
                D.append(T)
                document.getElementById('GroupStudent').append(D);

            }else{

            }
        }else if(DataUser[19].Username == document.getElementById('Username').value){//wander
            if(DataUser[19].Password == document.getElementById('Password').value){
                document.getElementById('SL__Form').style.display = 'none';
                document.getElementById('GroupStudent').style.display = 'flex';
                document.getElementById('GroupStudent').innerHTML = `<h1 class = 'GSwelcome'>
                 Wander, <span>un amigo admirable</span></h1>`;

                let D = document.createElement('button')
                D.className = 'btnContinuar';

                D.addEventListener('click',()=>{

                    document.getElementById('GroupStudent').style.display = 'none';
                    document.getElementById('SCartas').style.display = 'flex';

                    document.getElementById('SCartas').innerHTML = ` <div >

            <p>Eres una de las personas más genuinas y sinceras que conozco. Tu dedicación y esfuerzo para salir adelante no tienen comparación, y aunque tú digas lo contrario, eres increíblemente disciplinado e inteligente. La pasión que sientes por la arquitectura es admirable, siempre te entregas al máximo, incluso cuando la universidad te está llevando al límite.<br><br>

(¡Y sobre el pin de Jake el Perro de Hora de Aventura! Lo sé, lo sé, no te lo voy a robar, pero es tan lindo y lo quiero un montón. Perdón, pensamientos intrusivos jaja).<br><br>

Pero en serio, te respeto y admiro muchísimo. Tu perseverancia y la forma en que siempre encuentras soluciones a cualquier desafío son impresionantes. A veces dices que te golpeo, pero para mí son solo abrazos y saludos llenos de cariño. Te quiero un montón, de verdad, eres una persona increíblemente amorosa y solidaria.<br><br>

Es cierto que, en ocasiones, te cruzan los cables y te da un poco de paciencia, pero eso es solo porque estás agotado o porque el sueño te está venciendo. Si fuera por ti, nunca dejarías de ir al gym, pero sé que el tiempo y el cansancio no perdonan.<br><br>

Y, por supuesto, no puedo dejar de decir que te pareces a Finn el Humano, solo que con el color de cabello diferente. ¡Te sigo insistiendo en que te pongas rubio! Aunque, como siempre, te rebeles jaja.<br><br>

Wander, eres un amor de persona, un trabajador incansable y alguien que vive con pasión lo que hace. Si estás leyendo esto, dame un abrazo, bro, porque te quiero y te admiro muchísimo.</p>
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
            <i class='bx bxs-heart'></i>
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
