import React from "react";
import Navbar from "../componentes/Navbar";
import SidebarContainer from "../componentes/SidebarContainer";
import ContentHeader from "../componentes/contentHeader";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
            
            <ContentHeader
                titulo={"Dashboard"}
                breadCrumb1={"Inicio"}
                breadCrumb2={"Dashboard"}
                ruta1={"/home"}
            />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg- col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>Productos</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-dog"></i>
                                </div>
                                <Link to={"/proyectos-admin"} className="small-box-footer"> Visualizar Productos <i className="fas fa-arrow-circle-right"></i></Link>
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

export default Home;