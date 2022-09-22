import styles from './searchBox.module.css';
import SearchIcon from './SearchIcon';
import SearchTextBox from './SearchTextBox';
import { useState, createRef } from "react";
import { APIKey } from '../../functionality/APIKey';
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';


function SearchBox(props) {
    const [textBoxIsShown, setTextBoxIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [userData, setUserData] = useState([]);
    const searchQueryRef = createRef(); //using createRef instead of useRef

    const showTextBoxHandler = () => {
        setTextBoxIsShown(true);
    };

    const hideTextBoxHandler = () => {
        if (searchQueryRef.current.value.trim().length === 0)
            setTextBoxIsShown(false);
    };
    const hideModalBackdropHandler = () => {
        setModalIsShown(false);
        console.log('backdrop has been clicked');
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted form');
        if (textBoxIsShown) {
            const searchQuery = searchQueryRef.current.value;
            console.log('searching for: ', searchQuery);
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=10&appid=${APIKey}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    setUserData(data);
                    setModalIsShown(true);
                    console.log(data);
                    if (data.length === 1) {
                        console.log('uno');
                    }
                });
        }
    }

    //TO DO:
    //If textbox is visible, and search icon is clicked, submit form
    //Focus on textbox when hover on search icon
    //
    return (
        <form className={styles.searchBox} onSubmit={handleSubmit} onBlur={hideTextBoxHandler}>
            <SearchTextBox textBoxIsVisible={textBoxIsShown} ref={searchQueryRef} />
            <SearchIcon showTextBox={showTextBoxHandler} handleClick={handleSubmit} />
            <Modal isModalVisible={modalIsShown} data={userData} />
            <Backdrop isBackdropVisible={modalIsShown} isBackdropVisibleHandler={hideModalBackdropHandler} />
        </form>
    );
}

export default SearchBox;