import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";

function HomePage(props) {
    const forecastData = [
        {
            day1: {

            }
        }
    ];
    return (
        <>
            <h1>Next 5 days forecast</h1>
            <Card >
                <DailyWeather />
                <DailyWeather />
                <DailyWeather />
                <DailyWeather />
                <DailyWeather />
            </Card>
        </>
    );
}

export default HomePage;