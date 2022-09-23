import classNames from 'classnames';
import styles from './searchBox.module.css';
import { forwardRef, useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import WeatherContext from '../../store/WheaterContext';
// import { useCallback } from 'react/cjs/react.production.min';

const SearchTextBox = forwardRef((props, ref) => {
    const weatherContext = useContext(WeatherContext);

    useEffect(() => {
        ref.current.focus();
    }, [ref])


    const searchTextBoxStyles = classNames(styles.textBox, { [styles.textBoxLight]: weatherContext.theme }, { [styles.textBox_open]: props.textBoxIsVisible });
    return <input type="text" placeholder="Search for a city" ref={ref} className={searchTextBoxStyles} />
});

export default SearchTextBox;