import {Route, Switch, Redirect} from 'react-router-dom'
import * as React from 'react'
import './App.css'
import NotFound from './pages/notFound'
import Detail from './pages/detail'
import Mobx from './mobx/mobx'
import Redux from './redux/redux'

export default() => (
  <Switch>
    <Redirect from='/' to='/index' exact={true}/>
    <Route path='/mobx' exact={true} component={Mobx}/>
    <Route path='/detail' exact={true} component={Detail} />
    <Route path='/redux' exact={true} component={Redux} />
    <Route component={NotFound}/>
  </Switch>
);