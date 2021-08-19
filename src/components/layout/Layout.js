import NavBar from "./NavBar";
import styles from './Layout.module.css';

function Layout(props) {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                {props.children}
            </main>
        </>
    );

}
export default Layout;