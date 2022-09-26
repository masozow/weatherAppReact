import styles from './searchBox.module.css';
import SearchIcon from './SearchIcon';
import SearchTextBox from './SearchTextBox';
import { useState, createRef, useContext } from "react";
import { APIKey } from '../../functionality/APIKey';
import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';
import WeatherContext from '../../store/WheaterContext';
import { alternativeMessages } from '../../functionality/LocaleStrings';


function SearchBox(props) {
    const [textBoxIsShown, setTextBoxIsShown] = useState(false);
    const [modalIsShown, setModalIsShown] = useState(false);
    const [userData, setUserData] = useState([]);
    const searchQueryRef = createRef(); //using createRef instead of useRef
    const weatherContext = useContext(WeatherContext);

    // const showTextBoxHandler = () => {
    //     setTextBoxIsShown(true);
    // };

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
        if (!modalIsShown)
            setTextBoxIsShown(true);
        const searchQuery = searchQueryRef.current.value;
        if (textBoxIsShown && searchQuery.trim().length !== 0) {
            console.log('searching for: ', searchQuery);
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=10&appid=${APIKey}`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    console.log(typeof (data));
                    switch (data.length) {
                        case 1:
                            console.log('Just 1 record returned');
                            weatherContext.changeApiCallCondition(`lat=${data[0].lat}&lon=${data[0].lon}`)
                            break;
                        case 0:
                            console.log('No records')
                            setUserData(alternativeMessages.cityDataUnavailable[weatherContext.language]);
                            setModalIsShown(true);
                            break;
                        default:
                            setUserData(data);
                            setModalIsShown(true);
                            break;
                    }
                });
        }
    }

    return (
        <form className={styles.searchBox} onSubmit={handleSubmit} onBlur={hideTextBoxHandler}>
            <SearchTextBox autoFocus textBoxIsVisible={textBoxIsShown} ref={searchQueryRef} />
            <SearchIcon handleClick={handleSubmit} />
            {/* showTextBox={showTextBoxHandler} */}
            <Modal isModalVisible={modalIsShown} data={userData} closeModalBackdrophandler={hideModalBackdropHandler} />
            <Backdrop isBackdropVisible={modalIsShown} isBackdropVisibleHandler={hideModalBackdropHandler} />
        </form>
    );
}

export default SearchBox;