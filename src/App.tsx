import {Route, Switch, Redirect, Link} from 'react-router-dom'
import * as React from 'react'
import './App.css'
// import NotFound from './pages/notFound'
// import Detail from './pages/detail'
// import Mobx from './mobx/mobx'
// import Redux from './redux/redux'
// import Text from './HOC/Hoc'

const { lazy, Suspense } = React;

const NotFound = lazy(() => import('./pages/notFound'))
const Detail = lazy(() => import('./pages/detail'))
const Mobx = lazy(() => import('./mobx/mobx'))
const Redux = lazy(() => import('./redux/redux'))
const Text = lazy(() => import('./HOC/Hoc'))

const Index = () => {
  return (
    <div>
      <Link to='/mobx'>to mobx</Link>
      <Text text='text' num={2}/>
    </div>
  )
}

export default() => (
  <Suspense fallback={<div>loading……</div>}>
    <Switch>
      <Redirect from='/' to='/index' exact={true}/>
      <Route path='/index' exact={true} component={Index}/>
      <Route path='/mobx' exact={true} component={Mobx}/>
      <Route path='/detail' exact={true} component={Detail} />
      <Route path='/redux' exact={true} component={Redux} />
      <Route component={NotFound}/>
    </Switch>
  </Suspense>
);