import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

    return (
        <div className="navBar">

            <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-bar">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </div>

            <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>


                <NavLink to="/mariela" onClick={()=>window.scrollTo(0,0)}> Inicio </NavLink>

                <NavLink to="/mariela/servicios" onClick={()=>window.scrollTo(0,0)}> Soy una OSC y quiero crecer</NavLink>

                {/*<NavLink to="/RealControlF/tipos" onClick={()=>window.scrollTo(0,0)}> Tipos de Plagas </NavLink>*/}

                <NavLink to="/mariela/licencias" onClick={()=>window.scrollTo(0,0)}> Quiero empezar una OSC </NavLink>

                <NavLink to="/mariela/clientes" onClick={()=>window.scrollTo(0,0)}> Quiero ayudar a una Fundación </NavLink>

                <NavLink to="/mariela/cursos" onClick={()=>window.scrollTo(0,0)}>Capacitaciones  </NavLink>

                <NavLink to="/mariela/contacto" onClick={()=>window.scrollTo(0,0)}> Contacto </NavLink>



                {/*<NavLink to="/AhilloPage/gobierno">    Gobierno </NavLink>

                <NavLink to="/AhilloPage/PGP"> PGP 2031-2033 </NavLink>

                <NavLink to="/AhilloPage/provincia"> Provincia Eclesiástica de Hermosillo </NavLink>*/}

            </div>
        </div>
    );
}
