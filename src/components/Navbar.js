import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo">
                       TUDO NOTÍCIAS
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to = '/principal' className='nav-links' onClick = {closeMobileMenu}>
                            Principais do Dia
                        </Link>
                    </li>
                    <li>
                        <Link to = '/esportes' className='nav-links' onClick = {closeMobileMenu}>
                            Esportes
                        </Link>
                    </li>
                    <li>
                        <Link to = '/politica' className='nav-links' onClick = {closeMobileMenu}>
                            Politica
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle = 'btn--outline'> SIGN UP </Button>}
            </nav>
        </>
    )
}

export default Navbar
