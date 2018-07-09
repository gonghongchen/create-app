import states from './states'
import actions from './actions'
import {createStore, combineReducers} from 'redux'

interface IActionType {
    type : string,
    description : string | number
}

const operationNum = (state : any = states, action : IActionType) => {
    switch (action.type) {
            case actions
                .add('add 1')
                .type:
            return {
                num: state.num + 1
            }
        case actions
                .reduce('reduce 1')
                .type:
            return {
                num: state.num - 1
            }
        default:
            return state
    }
}

const modifyWord = (state : any = states, action : IActionType) => {
    switch (action.type) {
            case actions
                .modifyWord()
                .type:
            return {
                word: action.description
            }
        default:
            return state
    }
}

const reducers = combineReducers({
    operationNum,
    modifyWord
})

const store = createStore(reducers)

export default store