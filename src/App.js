import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
