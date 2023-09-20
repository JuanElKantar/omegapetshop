

// VerTiendasClientes.js
import APIInvoke from "../../utils/APIInvoke";
import { useEffect, useState } from "react";
import ContentHeader from "../../componentes/contentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainerClie from "../../componentes/SidebarContainerClientes";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import { Link } from "react-router-dom";

const VerTiendasClientes = () => {
  const [tiendas, setTiendas] = useState([]);

  useEffect(() => {
    const cargarTiendas = async () => {
      try {
        const response = await APIInvoke.invokeGET("/tiendas");
        console.log("Respuesta de la API:", response);

        if (Array.isArray(response) && response.length > 0) {
          setTiendas(response);
        } else {
          console.error("La respuesta de la API no contiene tiendas.");
        }
      } catch (error) {
        console.error("Error al cargar las tiendas:", error);
      }
    };

    cargarTiendas();
  }, []);

  

  return (
    <div className="wrapper">
    <Navbar></Navbar>
    <SidebarContainerClie></SidebarContainerClie>
    <div className="content-wrapper">

    <ContentHeader
                    titulo={"Listado de Tiendas"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Listado de Tiendas"}
                    ruta1={"/home2"}
                />
    <div className="card-body">
      
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {tiendas.map((tienda) => (
            <tr key={tienda.id}>
              <td>{tienda.id}</td>
              <td>{tienda.nombre}</td>
              <td>{tienda.direccion}</td>
              <td> <Link to={`/visualizar-prod/${tienda.id}@${tienda.nombre}`} className="btn btn-sm btn-primary">Ver Productos</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default VerTiendasClientes;