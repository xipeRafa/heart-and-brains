import "./banner.css";
import trofeo from "../../imgs/trofeo.png";
import residencias from "../../imgs/residencias.png";
import comercios from "../../imgs/comercios.png";
import industrial from "../../imgs/industrial.png";

export default function Banner() {

  return (
    <div className="clientes">
    

        <div className='clientesBanner'>
            <div><img src={trofeo} />15 Años De Experincia</div>
            <div><img src={residencias} />6 Años como Empresaria</div>
            <div><img src={comercios} />Docente Universitaria</div>
            <div><img src={industrial} /> Formación y Certificación</div>
        </div>


    </div>
  );

}
//🏡 🏠 ⭐ <span>🏘️</span> <span>🏬</span> <span>🏭</span>