import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ProyectosAdmin = () => {

    const [proyectos, setProyectos] = useState([]);

    const cargarProyectos = async () => {
        try {
            var response = await APIInvoke.invokeGET('/proyectos');
            console.log('Respuesta de la API:', response); // Verifica la respuesta de la API

            if (Array.isArray(response) && response.length > 0) {
                setProyectos(response);
            } else {
                console.error('La respuesta de la API no contiene proyectos.');
            }
        } catch (error) {
            console.error('Error al cargar los proyectos:', error);
        }
    };


    useEffect(() => {
        cargarProyectos();
    }, []);

    const eliminarProyecto = async (e, id) => {
        e.preventDefault();
        const verificarExistenciaUsuario = async (id) => {
            try {
                const response = await APIInvoke.invokeGET(
                    `/proyectos?id=${id}`
                );
                if (response && response.length > 0) {
                    return true; // El usuario ya existe
                }
                return false; // El usuario no existe
            } catch (error) {
                console.error(error);
                return false; // Maneja el error si la solicitud falla
            }
        };

        const usuarioExistente = await verificarExistenciaUsuario(id);

        if (usuarioExistente) {
            const response = await APIInvoke.invokeDELETE(`/proyectos/${id}`);
            const msg = "Proyecto Eliminado Correctamente";
            swal({
                title: "Informacion",
                text: msg,
                icon: "success",
                buttons: {
                    confirmar: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-prymari",
                        closeModal: true,
                    },
                },
            });
            cargarProyectos();
        } else {
            const msg = "El Proyecto No Pudo Ser Eliminado";
            swal({
                title: "Error",
                text: msg,
                icon: "error",
                buttons: {
                    confirmar: {
                        text: "Ok",
                        value: true,
                        visible: true,
                        className: "btn btn-danger",
                        closeModal: true,
                    },
                },
            });
        }
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Listado de proyectos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Proyectos"}
                    ruta1={"/proyectos-admin"}
                />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/proyectos-crear"} className="btn btn-block btn-primary btn-sm">crear Proyecto</Link></h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-times" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>#</th>
                                        <th style={{ width: '75%' }}>Nombre</th>
                                        <th style={{ width: '15%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        proyectos.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.nombre}</td>
                                                <td>
                                                    <Link to={`/tareas-admin/${item.id}@${item.nombre}`} className="btn btn-sm btn-info">Tareas</Link> &nbsp;&nbsp;
                                                    <Link to={`/proyectos-editar/${item.id}@${item.nombre}`} className="btn btn-sm btn-primary">Editar</Link> &nbsp;&nbsp;
                                                    <button onClick={(e) => eliminarProyecto(e, item.id)} className="btn btn-sm btn-danger">Borrar</button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>


                            </table>
                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ProyectosAdmin;