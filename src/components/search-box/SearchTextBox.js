import classNames from 'classnames';
import styles from './searchBox.module.css';
import { forwardRef, useContext, useEffect } from 'react';
import WeatherContext from '../../store/WheaterContext';

const SearchTextBox = forwardRef((props, ref) => {

    useEffect(() => {
        ref.current.focus();
    }, [ref])

    const weatherContext = useContext(WeatherContext);

    const searchTextBoxStyles = classNames(styles.textBox, { [styles.textBoxLight]: weatherContext.theme }, { [styles.textBox_open]: props.textBoxIsVisible });
    return <input type="text" placeholder="Search for a city" ref={ref} className={searchTextBoxStyles} />
});

export default SearchTextBox;