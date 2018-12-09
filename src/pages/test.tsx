import * as React from 'react';
import {Link} from 'react-router-dom'

const { PureComponent, Fragment } = React;

interface ITestProps {
    name: string,
    age: number,
}
interface ITestState {
    name: string,
    age: number
}

class Test extends PureComponent<ITestProps, ITestState> {
    state = {
        name: '',
        age: 0
    }
    constructor(props: ITestProps) {
        super(props);
        
        // this.doClick = this.doClick.bind(this);
        // console.log(this);
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.doClick}>Pass in an object</button>
                <button onClick={this.doClick2}>Pase in a function</button>
                <p>age: {this.state.age}</p>
                <p><Link to='/index'>to index</Link></p>
            </Fragment>
        );
    }
    doClick = () => {
        // console.log(this);

        this.setState({
            age: this.state.age + 1
        });
        
        if (true) {
            this.setState({
                age: this.state.age + 1
            });
        }
    }
    doClick2 = () => {
        // console.log(this);
        
        this.setState((prevState, props) => {
            return {
                age: prevState.age + 1
            }
        });

        if (true) {
            this.setState((prevState, props) => {
                return {
                    age: prevState.age + 1
                }
            });
        }
    }
}

export default Test