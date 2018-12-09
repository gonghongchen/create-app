import {Route, Switch, Redirect} from 'react-router-dom'
import * as React from 'react'
import components from './base/components'
import './App.css'

const { lazy, Suspense } = React;

const NotFound = lazy(() => import('./pages/notFound'))

console.log(Object.entries(components));

export default () => (
  <Suspense fallback={<div>loading……</div>}>
    <Switch>
      <Redirect from='/' to='/index' exact={true}/>
      {
        Object.entries(components).map((item, index) => {
          return <Route path={item[0]} exact={true} component={item[1]} key={index.toString()}/>
        })
      }
      <Route component={NotFound}/>
    </Switch>
  </Suspense>
);