import store from './reducer'
import actions from './actions'
import * as React from 'react'
import {connect, Provider} from "react-redux"
import {Link} from 'react-router-dom'

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: actions
//         .add()
//         .type,
//     description: 'add 1 by dispatch'
// })
// store.dispatch({
//     type: actions
//         .add()
//         .type,
//     description: 'add 1 by dispatch'
// })
// store.dispatch({
//     type: actions
//         .reduce()
//         .type,
//     description: 'reduce 1 by dispatch'
// })
// store.dispatch({
//     type: actions
//         .modifyWord()
//         .type,
//     description: 'Modified the word'
// })

const Show : React.SFC = (props : any) => {
    const click = (type : number) => {
        type === 0
            ? props.reduce()
            : props.add();
    }
    const modifyWord = () => {
        props.modifyWord('当前随机数为：' + (Math.random() * 1000).toFixed(2))
    }
    return (
        <div className="App">
            <p>当前数值为：{props.num}</p>
            <button onClick={click.bind(null, 0)}>&nbsp;&nbsp;-1&nbsp;&nbsp;</button>
            <button onClick={click.bind(null, 1)}>&nbsp;&nbsp;+1&nbsp;&nbsp;</button>
            <p>当前word为：{props.word}</p>
            <button onClick={modifyWord.bind(null)}>&nbsp;&nbsp;修改word&nbsp;&nbsp;</button>
            <p><Link to='/mobx'>to mobx</Link></p>
        </div>
    )
}

const mapStateToProps = (state : any) => {
    return {num: state.operationNum.num, word: state.modifyWord.word};
}

const mapDispatchToProps = (dispatch : any) => {
    return {
        add() {
            dispatch(actions.add("desc add 1"));
        },
        reduce() {
            dispatch(actions.reduce("desc reduce 1"));
        },
        modifyWord(description : string) {
            dispatch(actions.modifyWord(description));
        }
    };
}

const ShowCom = connect(mapStateToProps, mapDispatchToProps)(Show)

const Redux = () => (
    <Provider store={store}>
        <ShowCom/>
    </Provider>
)

export default Redux