import MenuButton from '../menu/MenuButton';
import styles from './NavBar.module.css';

function NavBar(props) {
    return (
        <header>
            <div className={styles.logo}>
                WeatherApp
            </div>
            <MenuButton />
        </header>
    );
}

export default NavBar;
