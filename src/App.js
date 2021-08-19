import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import FutureForecastPage from './pages/FutureForecastPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/forecast'>
          <FutureForecastPage />
        </Route>
        <Route path='/' exact>
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
