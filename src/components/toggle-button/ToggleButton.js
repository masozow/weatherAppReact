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
        console.log(toggleSide);
    }
    return (
        <div className={styles.toggleButtonContainer}>
            <label className={styles.toggleButtonText}>{props.text}</label>
            <p>
                {props.leftOption}
                &nbsp;
                <div className={styles.toggleButtonStructure} onClick={handleToggle}>
                    <div className={classes}></div>
                </div>
                &nbsp;
                {props.rightOption}
            </p>
        </div>
    );
}

export default ToggleButton;