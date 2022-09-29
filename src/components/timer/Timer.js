import { useEffect } from "react";



function Timer(props) {


    useEffect(() => {
        const interval = setInterval(() => {
            props.setTimer()
            console.log('Timer has changed:', props.timer);
        }, 6000);

        return () => {
            clearInterval(interval);
        }
    }, [props]);

    return (null);
}
export default Timer;