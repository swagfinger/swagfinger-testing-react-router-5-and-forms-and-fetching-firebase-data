import { Route, Switch } from 'react-router-dom'; //react router v5
import { Navigation } from './layout/navigation';
import { About, Shop, Intro } from './pages';

function App() {
  return (
    <div className='App'>
      <Navigation>
        <Switch>
          <Route path='/' exact>
            <Intro />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Navigation>
    </div>
  );
}

export default App;
