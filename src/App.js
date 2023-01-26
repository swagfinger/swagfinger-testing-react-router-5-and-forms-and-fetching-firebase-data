import { Route, Switch } from 'react-router-dom'; //react router v5
import { About, Shop, Intro } from './pages';

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
