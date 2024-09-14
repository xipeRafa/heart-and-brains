import "./servicios.css";
import { useState } from "react";
import Tecnicas from '../tecnicas/Tecnicas'
import img2 from "../../imgs/rc3.png";

export default function Servicios() {


  const[boolState, setBoolState]=useState(true)






  return (<>

  {boolState ?
    <p className="servicios1">
        * Soy una OSC y quiero crecer<br />
    * Desarrollo de órgano de gobierno (patronato) y liderazgos sólidos<br />

      <p className={boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Mas..</p>
    </p>




    :




     <p className="servicios1">
    * Soy una OSC y quiero crecer<br />
    * Desarrollo de órgano de gobierno (patronato) y liderazgos sólidos<br />
    * Planes de crecimiento a corto, mediano y largo plazo<br />
    * Medición de impacto de programas sociales<br />
    * Procuración de fondos <br />
    * Reputación institucional<br />
    * Administración y finanzas sanas <br />


      <p className={!boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Menos..</p>
    </p>}

<hr />

      <Tecnicas />

      <div className="sombra">
        <img src={img2} />
      </div>

  </>);
}
