import React,{Component} from 'react';
import {render} from 'react-dom';
import store from './constants/counter-store';
import Counter from './components/Counter';

const App = () => <div><Counter/></div>;

const renderApp = () => {
	render(<App/>,document.getElementById('app'));
};

store.subscribe(renderApp);

renderApp();