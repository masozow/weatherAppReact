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
        if (param.formatted) {
            weatherContext.changeApiCallCondition(`lat=${param.geometry.lat}&lon=${param.geometry.lng}`);
            props.formSubmitted();
        }
        props.closeModalBackdrophandler();
    }

    const formattedData = (data) => {
        if (Array.isArray(data)) {
            return (
                <>
                    < ul > {
                        props.data.map((item, idx) => {
                            return (
                                <Li key={idx} handleClick={event => itemClickHandler(event, item)} >
                                    {item.formatted ? `${item.formatted}` : item}
                                </Li>
                            )
                        })
                    }
                    </ul >
                </>
            );
        }
        else {
            return (
                <p onClick={itemClickHandler} >{data ? data : 'undefined'}</p>
            )
        }
    }
    return (
        <div className={modalStyles}>
            <Card themeSelector={weatherContext.theme} classes={styles.card} >
                {
                    formattedData(props.data)
                }
            </Card>
        </div>
    );
}

export default Modal;