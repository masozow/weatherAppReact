// import { NavLink } from 'react-router-dom';
import MenuButton from '../menu/MenuButton';
import NavLinks from '../menu/NavLinks';
import styles from './NavBar.module.css';

function NavBar(props) {
    return (
        <header>
            <div className={styles.logo}>
                {/* <NavLink to='/'> */}
                WeatherApp
                {/* </NavLink> */}
            </div>
            <NavLinks />
            <MenuButton />
        </header>
    );
}

export default NavBar;
