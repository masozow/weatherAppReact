// import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuButton from '../menu/MenuButton';
import NavLinks from '../menu/NavLinks';
import styles from './NavBar.module.css';

function NavBar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleIsOpen() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header>
            <div className={styles.logo}>
                {/* <NavLink to='/'> */}
                WeatherApp
                {/* </NavLink> */}
            </div>
            <NavLinks isOpen={isMenuOpen} />
            <MenuButton isOpen={isMenuOpen} handleClick={handleIsOpen} />
        </header>
    );
}

export default NavBar;
