import styles from './searchBox.module.css';
import SearchIcon from './SearchIcon';
import SearchTextBox from './SearchTextBox';
import { useState, createRef, useContext } from "react";
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';
import WeatherContext from '../../store/WheaterContext';
import { useHistory } from 'react-router-dom';
import { submitForm } from './functions/submitForm';
import { fetchForwardGeocoding } from './functions/fetchForwardGeocoding';


function SearchBox(props) {
    const [textBoxIsShown, setTextBoxIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [userData, setUserData] = useState();
    const searchQueryRef = createRef(); //using createRef instead of useRef
    const weatherContext = useContext(WeatherContext);
    const history = useHistory();

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

    const formSubmittedHandler = () => {
        history.push('/');
    }
    const handleSetUserData = (params) => {
        setUserData(params);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!modalIsShown)
            handleTextBoxShow();
        const searchQuery = searchQueryRef.current.value;
        if (textBoxIsShown && searchQuery.trim().length !== 0) {
            const receivedData = await fetchForwardGeocoding(searchQuery, weatherContext.language);
            if (receivedData.results) {
                submitForm(receivedData, modalBackdropHandler, formSubmittedHandler, handleSetUserData, weatherContext);
            }
        }
    }

    return (
        <form className={styles.searchBox} onSubmit={handleSubmit} onBlur={hideTextBoxHandler}>
            <SearchTextBox autoFocus textBoxIsVisible={textBoxIsShown} ref={searchQueryRef} />
            <SearchIcon handleClick={handleSubmit} />
            <Modal isModalVisible={modalIsShown} data={userData} closeModalBackdrophandler={modalBackdropHandler} formSubmitted={formSubmittedHandler} />
            <Backdrop isBackdropVisible={modalIsShown} isBackdropVisibleHandler={modalBackdropHandler} />
        </form>
    );
}

export default SearchBox;