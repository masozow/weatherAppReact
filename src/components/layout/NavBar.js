// import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import WeatherContext from '../../store/WheaterContext';
import MenuButton from '../menu/MenuButton';
import NavLinks from '../menu/NavLinks';
import styles from './NavBar.module.css';

function NavBar(props) {
    const weatherContext = useContext(WeatherContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerClasses = classNames(styles.header, { [styles.headerLightTheme]: props.themeSelector })
    const logoClasses = classNames(styles.logo, { [styles.logoLightTheme]: props.themeSelector });

    function handleIsOpen() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className={headerClasses}>
            <div className={logoClasses}>
                {/* <NavLink to='/'> */}
                WeatherApp
                {/* </NavLink> */}
            </div>
            <NavLinks isOpen={isMenuOpen} themeSelector={weatherContext.theme} />
            <MenuButton isOpen={isMenuOpen} handleClick={handleIsOpen} />
        </header>
    );
}

export default NavBar;
