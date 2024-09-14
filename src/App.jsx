

import "./css/App.css";
// import img1 from "./imgs/1.png";


import { Routes, Route,  } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Servicios from "./components/servicios/Servicios";
import Header from "./components/header/Header";
// import Tipos from "./components/tipos/Tipos";
import Licencias from "./components/licencias/Licencias";
import Clientes from "./components/clientes/Clientes";
import Cursos from "./components/cursos/Cursos";
import Contacto from "./components/contacto/Contacto";



function App() {

  return (
    <div className="containerApp">
      <Navbar />

      <Routes>
        <Route path="/mariela/servicios" element={<Servicios />} />
        <Route path="/mariela/" element={<Header />} />
        {/*<Route path="/RealControlF/tipos" element={<Tipos />} />*/}
        <Route path="/mariela/licencias" element={<Licencias />} />
        <Route path="/mariela/clientes" element={<Clientes />} />
         <Route path="/mariela/cursos" element={<Cursos />} />
        <Route path="/mariela/contacto" element={<Contacto />} />

        <Route path="*" element={<Header />} />
      </Routes>


   {/*   <div className="sombra">
        <img src={img1} style={{ marginBottom: "20px" }} />
      </div>*/}

      
      <Footer />
    </div>
  );
}

export default App;
