import {action, observable} from 'mobx';

export default class AppState {
    @observable public num : number = 0
    @action public addNum(newNum : number) {
        this.num += newNum;
    }
    @action public reduceNum(newNum : number) {
        this.num -= newNum;
    }
}