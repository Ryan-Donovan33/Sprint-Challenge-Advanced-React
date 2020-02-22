import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			playerData: {},
			playerTrends: []
		};
	}

	componentDidMount() {
		axios('http://localhost:5000/api/players')
			.then((player) => this.setState({ playerData: player.data }))
			.catch((err) => console.log('No Player Data', err));
		console.log('cDM is running');
	}

	render() {
		return <div className="App" />;
	}
}

export default App;
