import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HourlyForecastPage from './pages/HourlyForecastPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/hourlyForecast/:day/:coords'>
          <HourlyForecastPage />
        </Route>
        <Route path='/' exact>
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
