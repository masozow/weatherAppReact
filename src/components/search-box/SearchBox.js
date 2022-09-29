import styles from './searchBox.module.css';
import SearchIcon from './SearchIcon';
import SearchTextBox from './SearchTextBox';
import { useState, createRef, useContext } from "react";
import { OpenCageGeocodingAPIKey } from '../../functionality/APIKey';
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

            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${OpenCageGeocodingAPIKey}&language=${weatherContext.language}&pretty=1`)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data.results);
                    switch (data.results.length) {
                        case 1:
                            console.log('Just 1 record returned');
                            weatherContext.changeApiCallCondition(`lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}`)
                            break;
                        case 0:
                            console.log('No records')
                            setUserData(alternativeMessages.cityDataUnavailable[weatherContext.language]);
                            setModalIsShown(true);
                            break;
                        default:
                            setUserData(data.results);
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