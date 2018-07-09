import AppState from '../mobx/AppState'
import ToDetail from '../pages/toDetial'
import {observer} from 'mobx-react'
import * as React from 'react'

const state = new AppState();
interface ISentenceProps {
  store : AppState
};

const Sentence : React.SFC < ISentenceProps > = observer(props => {
  return (
    <p>当前数值为：{props.store.num}</p>
  )
})

const Button : React.SFC < ISentenceProps > = observer(props => {
  const click = (type : number) => {
    type === 0
      ? props
        .store
        .reduceNum(1)
      : props
        .store
        .addNum(1);
  }

  return (
    <div>
      <button onClick={click.bind(null, 0)}>&nbsp;&nbsp;-1&nbsp;&nbsp;</button>
      <button onClick={click.bind(null, 1)}>&nbsp;&nbsp;+1&nbsp;&nbsp;</button>
      <p>当前数值为：{props.store.num}</p>
      <ToDetail />
    </div>
  )
})

@observer
class Mobx extends React.Component {
  public render() {
    return (
      <div className="App">
        <Sentence store={state}/>
        <Button store={state}/>
      </div>
    )
  }
}

export default Mobx