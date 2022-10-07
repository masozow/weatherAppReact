import styles from './searchBox.module.css';
import SearchIcon from './SearchIcon';
import SearchTextBox from './SearchTextBox';
import { useState, createRef, useContext, useEffect } from "react";
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';
import WeatherContext from '../../store/WheaterContext';
import { Redirect } from 'react-router-dom';
import { submitForm } from './functions/submitForm';


function SearchBox(props) {
    const [textBoxIsShown, setTextBoxIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [userData, setUserData] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const searchQueryRef = createRef(); //using createRef instead of useRef
    const weatherContext = useContext(WeatherContext);

    const hideTextBoxHandler = () => {
        if (searchQueryRef.current.value.trim().length === 0)
            setTextBoxIsShown(false);
    };
    const handleTextBoxShow = () => {
        setTextBoxIsShown(true);
    }
    const modalBackdropHandler = () => {
        setModalIsShown(!modalIsShown);
    }

    useEffect(() => {
        setFormSubmitted(false);
    }, [formSubmitted])

    const formSubmittedHandler = () => {
        setFormSubmitted(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(searchQueryRef.current.value, weatherContext.language, modalIsShown, modalBackdropHandler, handleTextBoxShow, textBoxIsShown, formSubmittedHandler, setUserData, weatherContext);
    }

    return (
        <form className={styles.searchBox} onSubmit={handleSubmit} onBlur={hideTextBoxHandler}>
            <SearchTextBox autoFocus textBoxIsVisible={textBoxIsShown} ref={searchQueryRef} />
            <SearchIcon handleClick={handleSubmit} />
            {/* showTextBox={showTextBoxHandler} */}
            <Modal isModalVisible={modalIsShown} data={userData} closeModalBackdrophandler={modalBackdropHandler} formSubmitted={formSubmittedHandler} />
            <Backdrop isBackdropVisible={modalIsShown} isBackdropVisibleHandler={modalBackdropHandler} />
            {formSubmitted && <Redirect to='/' />}
        </form>
    );
}

export default SearchBox;