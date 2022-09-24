import classNames from 'classnames';
import styles from './Card.module.css';

function Card(props) {
    //props.classes is necesarry to override on particular cases (just because the use of css modules)
    const cardStyles = classNames(styles.card, { [styles.cardLightTheme]: props.themeSelector }, props.classes)
    return (
        <div className={cardStyles}>
            {props.children}
        </div>
    );
}

export default Card;