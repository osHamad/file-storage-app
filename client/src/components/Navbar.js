import { Link, Outlet } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Navbar = () => {
    return (    
        <>
            <nav className="navbar navbar-expand bg-dark border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">MyWeb</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/profile">profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar