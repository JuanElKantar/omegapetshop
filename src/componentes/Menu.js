import React from "react";
import { Link } from "react-router-dom";

const Menu=()=>{
    return(

        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Inicio
                        </p>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/proyectos-admin"} className="nav-link">
                        <i className="nav-icon fas fa-store" />
                        <p>
                            Tiendas
                        </p>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/visualizar-categorias"} className="nav-link">
                        <i className="nav-icon fas fa-tag" />
                        <p>
                            Categorias
                        </p>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/visualizar-pedidos"} className="nav-link">
                        <i className="nav-icon fas fa-truck" />
                        <p>
                            Pedidos
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>

        
    )
}

export default Menu;