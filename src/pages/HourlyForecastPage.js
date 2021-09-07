import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function HourlyForecastPage(props) {
    const params = useParams();
    const location = useLocation();
    useEffect(() => {
        console.log('Location: ');
        console.log(location);
        console.log('Params: ');
        console.log(params);
    }, [params, location])
    return (
        <>
            <h1>Hourly {params.day} </h1>
        </>
    );
}
export default HourlyForecastPage;