import {Route, Switch, Redirect} from 'react-router-dom'
import * as React from 'react'
import './App.css'
import NotFound from './pages/notFound'
import Detail from './pages/detail'
import Mobx from './mobx/mobx'
import Redux from './redux/redux'
import {Link} from 'react-router-dom'
import Text from './HOC/Hoc'

const Index = () => {
  return (
    <div>
      <Link to='/mobx'>to mobx</Link>
      <Text text='text' num={2}/>
    </div>
  )
}

export default() => (
  <Switch>
    <Redirect from='/' to='/index' exact={true}/>
    <Route path='/index' exact={true} component={Index}/>
    <Route path='/mobx' exact={true} component={Mobx}/>
    <Route path='/detail' exact={true} component={Detail} />
    <Route path='/redux' exact={true} component={Redux} />
    <Route component={NotFound}/>
  </Switch>
);