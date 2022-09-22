import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './searchBox.module.css';

function SearchIcon(props) {
    return (
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} onMouseEnter={props.showTextBox} onClick={props.handleClick} />
    )
};

export default SearchIcon;