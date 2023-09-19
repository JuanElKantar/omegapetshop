import React from "react";
import { Link } from "react-router-dom";

const MenuClientes=()=>{
    return(

        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-item">
                    <Link to={"/home2"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Inicio
                        </p>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/visualizar-prod"} className="nav-link">
                        <i className="fas fa-shopping-bag" />
                        <p>
                            Productos
                        </p>
                    </Link>
                </li>


            </ul>
        </nav>

        
    )
}

export default MenuClientes;