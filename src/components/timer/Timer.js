import { useEffect } from "react";



function Timer(props) {


    useEffect(() => {
        const interval = setInterval(() => {
            props.setTimer()
        }, 900000);

        return () => {
            clearInterval(interval);
        }
    }, [props]);

    return (null);
}
export default Timer;