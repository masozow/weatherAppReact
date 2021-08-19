import MenuButton from '../menu/MenuButton';
import styles from './NavBar.module.css';

function NavBar(props) {
    return (
        <header>
            <div className={styles.logo}>
                WheatherApp
            </div>
            <MenuButton />
        </header>
    );
}

export default NavBar;
