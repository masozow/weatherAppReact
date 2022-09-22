import classNames from "classnames";
import Card from "../layout/Card";
import styles from './modal.module.css';
import WeatherContext from "../../store/WheaterContext";
import { useContext } from "react";

function Modal(props) {
    //the next line needs some work
    const showModal = props.data.length > 1 ? props.isModalVisible : false;
    const modalStyles = classNames(styles.modal, { [styles.active]: showModal });
    const weatherContext = useContext(WeatherContext);

    return (
        <div className={modalStyles}>
            <Card themeSelector={weatherContext.theme}>
                <ul>{
                    props.data.map((item, idx) => {
                        return (
                            <li key={idx}>
                                {`${item.name}, ${item.state}, ${item.country}`}
                            </li>
                        )
                    })
                }
                </ul>
            </Card>
        </div>
    );
}

export default Modal;