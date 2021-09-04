import classNames from 'classnames';
import { useState } from 'react';
import styles from './ToggleButton.module.css';

function ToggleButton(props) {
    const [toggleSide, setToggleSide] = useState(false);
    // let bouncingCircleClassName = {styles.toggleButtonBouncingCircle};
    let classes = classNames(styles.toggleButtonBouncingCircle, { [styles.right]: toggleSide, [styles.left]: !toggleSide })

    function handleToggle(e) {
        setToggleSide(!toggleSide);
        props.callbackFunction();
    }

    return (
        <span className={styles.toggleButtonContainer}>
            <label className={styles.toggleButtonText}>{props.text}</label>
            <p>
                {props.leftOption}
                &nbsp;
                <span className={styles.toggleButtonStructure} onClick={handleToggle}>
                    <span className={classes}></span>
                </span>
                &nbsp;
                {props.rightOption}
            </p>
        </span>
    );
}

export default ToggleButton;