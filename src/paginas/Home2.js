import { Link } from "react-router-dom";
import ContentHeader from "../componentes/contentHeader";
import Navbar from "../componentes/Navbar";
import SidebarContainerClie from "../componentes/SidebarContainerClientes";
import Footer from "../componentes/Footer";
import APIInvoke from "../utils/APIInvoke";
import { useEffect, useState } from "react";

const Home2 = () => {



    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainerClie></SidebarContainerClie>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Panel para Clientes"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Panel para Clientes"}
                    ruta1={"/home2"}
                />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

        
                        <div className="col-lg-7 col-8">
    <div className="small-box bg-pink">
        <div className="inner">
            <h3>Tiendas</h3>
            <p>&nbsp;</p>
        </div>
        <div className="icon">
            <i className="fas fa-shopping-bag"></i>
        </div>
        <Link to="/VerTiendasClientes"  className="small-box-footer">
            Ver Tiendas <i className="fas fa-arrow-circle-right"></i>
        </Link>
    </div>
</div>

                                    

                        </div>
                    </div>
                </section>
            </div>
            
            <Footer></Footer>
        </div>
    );
}

export default Home2;