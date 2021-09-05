import classNames from 'classnames';
import styles from './Card.module.css';

function Card(props) {
    const cardStyles = classNames(styles.card, { [styles.cardLightTheme]: props.themeSelector })
    return (
        <div className={cardStyles}>
            {props.children}
        </div>
    );
}

export default Card;