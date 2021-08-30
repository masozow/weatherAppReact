// import { NavLink } from 'react-router-dom';
import MenuButton from '../menu/MenuButton';
import styles from './NavBar.module.css';

function NavBar(props) {
    return (
        <header>
            <div className={styles.logo}>
                {/* <NavLink to='/'> */}
                WeatherApp
                {/* </NavLink> */}
            </div>
            <MenuButton />
        </header>
    );
}

export default NavBar;
