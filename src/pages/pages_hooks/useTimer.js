import { useEffect } from "react";

function useTimer(timer, setTimer) {


    useEffect(() => {
        const interval = setInterval(() => {
            setTimer()
        }, 900000);

        return () => {
            clearInterval(interval);
        }
    }, [timer, setTimer]);

    return (null);
}
export default useTimer;