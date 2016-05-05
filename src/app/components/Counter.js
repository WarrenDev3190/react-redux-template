import React,{Component} from 'react';
import {INCREMENT, DECREMENT} from '../actions/counter-actions';
import store from '../constants/counter-store';


const CounterCount = (props) => <h2>{props.count}</h2>;

class Counter extends Component {
	increment(){
		store.dispatch({type:INCREMENT});
	}
	decrement(){
		store.dispatch({type:DECREMENT});
	}
	render(){
		return (
			<div>
				<CounterCount count={store.getState()}/>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
};

export default Counter;