import classNames from 'classnames';
import { useState } from 'react';
import styles from './ToggleButton.module.css';

function ToggleButton(props) {
    const [toggleSide, setToggleSide] = useState(false);
    // let bouncingCircleClassName = {styles.toggleButtonBouncingCircle};
    const bouncingCircleClasses = classNames(styles.toggleButtonBouncingCircle, { [styles.right]: toggleSide, [styles.left]: !toggleSide, [styles.toggleButtonBouncingCircleLightTheme]: props.themeSelector })
    const buttonStructureClasses = classNames(styles.toggleButtonStructure, { [styles.toggleButtonStructureLightTheme]: props.themeSelector })
    const buttonTitleClasses = classNames(styles.toggleButtonTitle, { [styles.toggleButtonTitleLightTheme]: props.themeSelector });
    function handleToggle(e) {
        setToggleSide(!toggleSide);
        props.callbackFunction();
    }

    return (
        <span className={styles.toggleButtonContainer}>
            <label className={buttonTitleClasses}>{props.text}</label>
            <p>
                {props.defaultOption}
                &nbsp;
                <span className={buttonStructureClasses} onClick={handleToggle}>
                    <span className={bouncingCircleClasses}></span>
                </span>
                &nbsp;
                {props.alternativeOption}
            </p>
        </span>
    );
}

export default ToggleButton;