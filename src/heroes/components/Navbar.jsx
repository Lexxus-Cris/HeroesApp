import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login')
        console.log('Cerro sesion');
    }
    
    return (
        <nav as='nav' className="navbar w-100 navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div>
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={`nav-item nav-link`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={`nav-item nav-link`} 
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>
            <div className="w-100 order-3 dual-collapse2 d-flex justify-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Uriel
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}