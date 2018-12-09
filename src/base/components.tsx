import * as React from 'react'
import {Link} from 'react-router-dom'

const { lazy } = React;

const Detail = lazy(() => import('../pages/detail'))
const Mobx = lazy(() => import('../mobx/mobx'))
const Redux = lazy(() => import('../redux/redux'))
const Text = lazy(() => import('../HOC/Hoc'))
const Test = lazy(() => import('../pages/test'))
const Index: React.SFC<{}> = () => {
  return (
    <div>
      <Link to='/mobx'>to mobx</Link>
      <Text text='text' num={2}/>
    </div>
  )
}

export default {
  '/index': Index,
  '/mobx': Mobx,
  '/detail': Detail,
  '/redux': Redux,
  '/test': Test
}