import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/login';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Home from './paginas/Home';
import Home2 from "./paginas/Home2";
import VisualizarProd from "./paginas/productosCliente/visualizarProductosC";
import CompraProducto from "./paginas/productosCliente/comprarProductoC";
import VisualizarPedidos from "./paginas/pedidos/visualizarPedidos";
import EditarPedido from "./paginas/pedidos/editarPedidos";
import ProyectosAdmin from "./paginas/tiendasD/ProyectosAdmin";
import ProyectosCrear from "./paginas/tiendasD/ProyectosCrear";
import ProyectosEditar from "./paginas/tiendasD/ProyectosEditar";
import TareasEditar from "./paginas/tiendasD/TareasEditara";
import TareasAdmin from "./paginas/tiendasD/TareasAdmin";
import TareasCrear from "./paginas/tiendasD/TareasCrear";
import CrearCuentaAdmin from "./paginas/auth/CrearCuentaAdmin";
import VisualizarCategorias from "./paginas/Categorias/visualizarCategoria";
import EditarCategoria from "./paginas/Categorias/editarCategoria";
import CrearCategoria from "./paginas/Categorias/crearCategoria";
import VerTiendasClientes from './paginas/tiendasD/verTiendasCliente';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/crear-cuentaAdmin" exact element={<CrearCuentaAdmin/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/home2" exact element={<Home2/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/proyectos-crear" exact element={<ProyectosCrear/>}/>
          <Route path="/proyectos-editar/:idTienda" exact element={<ProyectosEditar/>}/>
          <Route path="/tareas-admin/:idProyecto" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idProyecto" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idProyecto" exact element={<TareasEditar/>}/>
          <Route path="/visualizar-prod/:idProducto" exact element={<VisualizarProd/>}/>
          <Route path="/visualizar-pedidos" exact element={<VisualizarPedidos/>}/>
          <Route path="/editar-pedido/:idPedido" exact element={<EditarPedido/>}/>
          <Route path="/compra/:idVenta" exact element={<CompraProducto/>}/>
          <Route path="/visualizar-categorias" exact element={<VisualizarCategorias/>}/>
          <Route path="/crear-categoria" exact element={<CrearCategoria/>}/>
          <Route path="/editar-categoria/:idCategoria" exact element={<EditarCategoria/>}/>
          <Route path="/VerTiendasClientes" exact element={<VerTiendasClientes/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;