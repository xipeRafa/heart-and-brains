import './tecnicas.css'
import { useState } from "react";
// import img1 from './1.png'
// import img2 from './2.png'
// import img3 from './3.png'
// import img4 from './4.png'



export default function Tecnicas() {


  const[displayState, setDisplayState]=useState('1')
  const[displayState2, setDisplayState2]=useState('5')

  return (<>
    <div className='inicioContainer'>
        <div className='titulo'>
            <h4>Desarrollo Sostenible</h4>
            <h2>Heart and Brains</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>info 1</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>info 2 </button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}> info 3</button>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('4')}>info 4</button>

        </div>


{/*//-pulverizadores - espolvoreadores -termonebulizacion*/}
        <div className={displayState !== '1' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                        info 1<br />
                        info 1
                    </h3>
            </div>                    
        </div>




        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        info 2 <br /> 
                        info 2 
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                     info 3<br />
                     info 3
                  </h3>
                 

            </div> 
        </div>


        <div className={displayState !== '4' ? 'd-none' : 'displayX'}>         
            <div>
                
                  <h3>
                      info 4<br />
                      info 4
                  </h3>
                 

            </div> 
        </div>




    </div>




















     <div className='inicioContainer'>

      {/*  <div className='titulo'>
            <h4>REAL CONTROL</h4>
            <h2>TECNICAS DE FUMIGACIÓN</h2>
        </div>*/}


        <div className='buttonsContainer'>
            <button className={displayState2 === '5' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('5')}>Leadership</button>
            <button className={displayState2 === '6' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('6')}>Development</button>
            <button className={displayState2 === '7' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('7')}>Coaching</button>

        </div>


        <div className={displayState2 !== '5' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>           
                      Leadership<br />
                      texto....Leadership
                    </h3>
            </div>                    
        </div>




        <div className={displayState2 !== '6' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        Development<br />
                        texto.....Development
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState2 !== '7' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                    Career Development Coaching<br />
                        texto....Career Development Coaching
                  </h3>
                 

            </div> 
        </div>


   

    </div>
  </>)

  
}

  