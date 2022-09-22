import classNames from 'classnames';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styles from './backdrop.module.css';

function Backdrop(props) {

    const backdropStyles = classNames(styles.backdrop, { [styles.active]: props.isBackdropVisible })

    return (
        <div className={backdropStyles} onClick={props.isBackdropVisibleHandler}>
        </div>
    );

}

export default Backdrop;