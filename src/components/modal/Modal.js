import classNames from "classnames";
import Card from "../layout/Card";
import styles from './modal.module.css';
import WeatherContext from "../../store/WheaterContext";
import { useContext } from "react";
import Li from "./Li";

function Modal(props) {
    //the next line needs some work
    // const showModal = props.data.length > 1 ? props.isModalVisible : false;
    const modalStyles = classNames(styles.modal, { [styles.active]: props.isModalVisible });
    const weatherContext = useContext(WeatherContext);

    const itemClickHandler = (event, param = {}) => {
        if (param.name) {
            weatherContext.changeApiCallCondition(`lat=${param.lat}&lon=${param.lon}`);
        }
        props.closeModalBackdrophandler();
    }

    const formattedData = (data) => {
        if (Array.isArray(data)) {
            return (
                < ul > {
                    props.data.map((item, idx) => {
                        return (
                            <Li key={idx} handleClick={event => itemClickHandler(event, item)} >
                                {item.name ? `${item.name}, ${item.state}, ${item.country}` : item}
                            </Li>
                        )
                    })
                }
                </ul >
            );
        }
        else {
            return (
                <p onClick={itemClickHandler} >{data}</p>
            )
        }
    }
    return (
        <div className={modalStyles}>
            {/* classes props is sent to override some original card properties */}
            <Card themeSelector={weatherContext.theme} classes={styles.card} >
                {
                    formattedData(props.data)
                }
            </Card>
        </div>
    );
}

export default Modal;