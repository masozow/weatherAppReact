import styles from './searchBox.module.css';
import SearchIcon from './SearchIcon';
import SearchTextBox from './SearchTextBox';
import { useState, createRef, useContext } from "react";
import { APIKey } from '../../functionality/APIKey';
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';
import WeatherContext from '../../store/WheaterContext';


function SearchBox(props) {
    const [textBoxIsShown, setTextBoxIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [userData, setUserData] = useState([]);
    const searchQueryRef = createRef(); //using createRef instead of useRef
    const weatherContext = useContext(WeatherContext);

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
        const searchQuery = searchQueryRef.current.value;
        if (textBoxIsShown && searchQuery.trim().length !== 0) {
            console.log('searching for: ', searchQuery);
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=10&appid=${APIKey}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    switch (data.length) {
                        case 1:
                            weatherContext.changeApiCallCondition(`lat=${data[0].lat}&lon=${data[0].lon}`)
                            break;
                        case 0:
                            break;
                        default:
                            setUserData(data);
                            setModalIsShown(true);
                            break;
                    }
                    //if there's only 1 record, don't show modal, just update localization data and
                    //display weather for that location
                });
        }
    }

    return (
        <form className={styles.searchBox} onSubmit={handleSubmit} onBlur={hideTextBoxHandler}>
            <SearchTextBox autoFocus textBoxIsVisible={textBoxIsShown} ref={searchQueryRef} />
            <SearchIcon showTextBox={showTextBoxHandler} handleClick={handleSubmit} />
            <Modal isModalVisible={modalIsShown} data={userData} closeModalBackdrophandler={hideModalBackdropHandler} />
            <Backdrop isBackdropVisible={modalIsShown} isBackdropVisibleHandler={hideModalBackdropHandler} />
        </form>
    );
}

export default SearchBox;