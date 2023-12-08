import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
    <div className="d-flex flex-column p-3 text-white bg-dark" style={ {width: "280px", flexGrow: 0} }>
        
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Upload
        </button>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
        <li>
            <Link href="/" className="nav-link text-white">
            Dashboard
            </Link>
        </li>
        </ul>
        <hr />
        <div className="dropdown">
        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><Link className="dropdown-item" href="/">New project...</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="/">Sign out</Link></li>
        </ul>
        </div>

    </div>
    )

}

export default Sidebar