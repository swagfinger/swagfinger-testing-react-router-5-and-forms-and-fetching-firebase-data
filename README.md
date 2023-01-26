## routing router v5

### install

```shell
npm install --save react-router-dom@5
```

### index.js

- import { BrowserRouter } from 'react-router-dom';
- wrap <App> with <BrowserRouter><App/></BrowserRouter>

### App.js

- Define routes with Route component
- import {Route } from 'react-router-dom'
- Route has defined paths - and which component to load - path is from url (\*part after domain)

### selective route rendering

- import {Switch} from 'react-router-dom' which wraps every route, and it say only go to one route at a time
- note: route / is always rendered
- unless you specify exact={true} or just exact property on the / route
- use <Switch> to wrap all your <Route>s

## navigation & links

- import { Link } from 'react-router-dom';
- use Link elements instead of <a>
- use "to" to navigate <Link to=""> eg. <Link to='/'>intro</Link>

```jsx
// Navigation.js
//navigation should look something like this:
<header>
  <div>logo</div>
  <nav>
    <ul>
      <li>
        <Link to='/'>intro</Link>
      </li>
      <li>
        <Link to='/about'>about</Link>
      </li>
      <li>
        <Link to='/shop'>shope</Link>
      </li>
    </ul>
  </nav>
</header>
```

- import Navigation.js into App (where the routes are) and wrap the <Navigation> component around the <Switch> routes
- Navigation always showing because it wraps <Switch>
