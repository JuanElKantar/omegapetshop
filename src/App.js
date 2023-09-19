import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/login';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Home from './paginas/Home';
import ProyectosAdmin from "./paginas/proyectos/ProyectosAdmin";
import ProyectosCrear from "./paginas/proyectos/ProyectosCrear";
import ProyectosEditar from "./paginas/proyectos/ProyectosEditar";
import TareasAdmin from "./paginas/proyectos/TareasAdmin";
import TareasCrear from "./paginas/proyectos/TareasCrear";
import TareasEditar from "./paginas/proyectos/TareasEditar";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/proyectos-crear" exact element={<ProyectosCrear/>}/>
          <Route path="/proyectos-editar/:idProyecto" exact element={<ProyectosEditar/>}/>
          <Route path="/tareas-admin/:idProyecto" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idProyecto" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idProyecto" exact element={<TareasEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;