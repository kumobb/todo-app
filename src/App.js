import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/learning-examples/MyComponent';
import FComponent from './components/learning-examples/FComponent';
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/*<Counter/>*/}
				<TodoApp/>
			</div>
		);
	}
}

class LearningComponents extends Component {
	render() {
		return (
			<div className="LearningComponents">
				Hello World
				<MyComponent></MyComponent>
				<FComponent></FComponent>
			</div>
		);
	}
}

export default App;