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

    const itemClickHandler = (event, param) => {
        console.log("this is the data:", param);
        weatherContext.changeApiCallCondition(`lat=${param.lat}&lon=${param.lon}`);
        props.closeModalBackdrophandler();
    }
    return (
        <div className={modalStyles}>
            <Card themeSelector={weatherContext.theme}>
                <ul>{
                    props.data.map((item, idx) => {
                        return (
                            <Li key={idx} handleClick={event => itemClickHandler(event, item)} >
                                {`${item.name}, ${item.state}, ${item.country}`}
                            </Li>
                        )
                    })
                }
                </ul>
            </Card>
        </div>
    );
}

export default Modal;