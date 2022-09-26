// import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import WeatherContext from '../../store/WheaterContext';
import MenuButton from '../menu/MenuButton';
import NavLinks from '../menu/NavLinks';
import Backdrop from '../modal/Backdrop';
import SearchBox from '../search-box/SearchBox';
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
                <NavLink to='/' style={{ textDecoration: 'none', color: 'inherit', padding: '0', margin: '0' }}>
                    WeatherApp
                </NavLink>
            </div>
            <SearchBox />
            <NavLinks isOpen={isMenuOpen} themeSelector={weatherContext.theme} />
            <MenuButton isOpen={isMenuOpen} handleClick={handleIsOpen} />
            <Backdrop isBackdropVisibleHandler={handleIsOpen} isBackdropVisible={isMenuOpen} />
        </header>
    );
}

export default NavBar;
